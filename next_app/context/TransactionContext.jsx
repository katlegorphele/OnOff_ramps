'use client'

import React, { useEffect, useState } from "react";
import {
  defineChain,
  getContract,
  prepareContractCall,
  readContract,
  sendTransaction,
} from "thirdweb";
import { thirdwebClient } from "@/app/client";
import { sepolia } from 'thirdweb/chains'

import Web3 from "web3";

import { contractABI, contractAddress, contractUzarAbi, contractAddressUzar } from "../utils/constants";
import { useActiveAccount } from "thirdweb/react";

export const TransactionContext = React.createContext();

const lisk_sepolia = defineChain(4202);

const transactionContract = getContract({
  client: thirdwebClient,
  chain: lisk_sepolia,
  address: contractAddress,
  abi: contractABI,
});

const uzarContract = getContract({
  client: thirdwebClient,
  chain: lisk_sepolia,
  address: contractAddressUzar,
  abi: contractUzarAbi,
});

export const TransactionsProvider = ({ children }) => {
  const [formData, setformData] = useState({ addressTo: "", amount: "", walletId: "", referenceId: "" });
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState("");

  useEffect(() => {
    const transactionCount = window.localStorage.getItem("transactionCount");
    setTransactionCount(transactionCount);
  }, []);

  const account = useActiveAccount();

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllTransactions = async () => {
    try {
      const availableTransactions = await readContract({
        contract: transactionContract,
        method: "getAllTransactions",
        params: [],
      });

      const structuredTransactions = availableTransactions.map((transaction) => ({
        addressTo: transaction.receiver,
        addressFrom: transaction.sender,
        timestamp: new Date(Number(transaction.timestamp) * 1000).toLocaleString(),
        referenceId: transaction.referenceId,
        walletId: transaction.walletId,
        amount: Number(Web3.utils.fromWei(transaction.amount.toString(), "ether")),
      }));

      setTransactions(structuredTransactions);
    } catch (error) {
      console.log("Error fetching transactions:", error);
    }
  };

  const fetchBalance = async () => {
    try {
      const rawBalance = await readContract({
        contract: uzarContract,
        method: "balanceOf",
        params: [currentAccount],
      });

      const formattedBalance = Web3.utils.fromWei(rawBalance.toString(), "ether");
      setBalance(formattedBalance);
      console.log("Balance:", formattedBalance);
    } catch (error) {
      console.log("Failed to fetch balance:", error);
    }
  };

  const checkIfTransactionsExists = async () => {
    try {
      const currentTransactionCount = await readContract({
        contract: transactionContract,
        method: "getTransactionCount",
        params: [],
      });

      window.localStorage.setItem("transactionCount", currentTransactionCount.toString());
    } catch (error) {
      console.log("Error checking transactions:", error);
    }
  };

  const _sendTransaction = async () => {
    try {
      setIsLoading(true);
      const { addressTo, amount, walletId, referenceId } = formData;
      const parsedAmount = Web3.utils.toWei(amount.toString(), "ether");

      // check for allowance
      const allowance = await readContract({
        contract: uzarContract,
        method: "allowance",
        params: [currentAccount, contractAddress],
      });

      console.log("Allowance:", allowance);

      if (Number(allowance) < Number(parsedAmount)) {
        const approval = prepareContractCall({
          contract: uzarContract,
          method: "approve",
          params: [contractAddress, parsedAmount],
        });

        console.log("Approval:", approval);

        await sendTransaction({
          transaction: approval,
          account: account,
        });
      }

      // prepare main transaction
      const transactionMain = prepareContractCall({
        contract: transactionContract,
        method: "OnOffRamp",
        params: [addressTo, parsedAmount, walletId, referenceId],
      });

      const { transactionHash } = await sendTransaction({
        transaction: transactionMain,
        account: account,
      });

      const apiData = {
        addressTo,
        amount,
        walletId,
        referenceId,
        transactionHash: transactionHash,
      };

      const response = await fetch("/api/buy-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(apiData),
      });

      const responseData = await response.json();
      if (response.ok) {
        console.log("Data successfully sent to the API:", responseData);
      } else {
        console.error("Failed to send data to the API:", responseData);
      }
      setIsLoading(false);

    } catch (error) {
      console.log("Error sending transaction:", error);
      setIsLoading(false);
    }

    setIsLoading(false);

  };

  useEffect(() => {
    getAllTransactions();
    checkIfTransactionsExists();
  }, [transactionCount]);

  return (
    <TransactionContext.Provider
      value={{
        transactionCount,
        transactions,
        currentAccount,
        isLoading,
        _sendTransaction,
        handleChange,
        formData,
        balance,
        fetchBalance,
        setCurrentAccount,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};