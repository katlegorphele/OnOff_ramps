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
import { Account } from 'thirdweb/wallets';
import Web3 from "web3";

import { contractABI, contractAddress, contractUzarAbi, contractAddressUzar } from "../utils/constants";

export const TransactionContext = React.createContext();

const lisk_sepolia = defineChain(4202);

const transactionContract = getContract({
  client: thirdwebClient,
  chain: lisk_sepolia,
  address: contractAddress,
});

const uzarContract = getContract({
  client: thirdwebClient,
  chain: lisk_sepolia,
  address: contractAddressUzar,
});

export const TransactionsProvider = ({ children }) => {
  const [formData, setformData] = useState({ addressTo: "", amount: "", walletId: "", referenceId: "" });
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState("");

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllTransactions = async () => {
    try {
      const availableTransactions = await readContract({
        contract: transactionContract,
        method: "function getAllTransactions() public view returns (Transaction[] memory)",
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

  const fetchBalance = async (account) => {
    try {
      const rawBalance = await readContract({
        contract: uzarContract,
        method: "function balanceOf(address) view returns (uint256)",
        params: [account],
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
        method: "function getTransactionCount() view returns (uint256)",
        params: [],
      });

      window.localStorage.setItem("transactionCount", currentTransactionCount.toString());
    } catch (error) {
      console.log("Error checking transactions:", error);
    }
  };

  const sendTransaction = async (account) => {
    try {
      const { addressTo, amount, walletId, referenceId } = formData;
      const parsedAmount = Web3.utils.toWei(amount, "ether");

      // Check allowance
      const allowance = await readContract({
        contract: uzarContract,
        method: "function allowance(address,address) view returns (uint256)",
        params: [account.address, transactionContract.address],
      });

      if (BigInt(allowance) < BigInt(parsedAmount)) {
        console.log("Insufficient allowance, requesting approval...");
        const approveTransaction = prepareContractCall({
          contract: uzarContract,
          method: "function approve(address,uint256)",
          params: [transactionContract.address, parsedAmount],
        });

        const approveTx = await sendTransaction({ transaction: approveTransaction, account });
        console.log("Approval granted:", approveTx);
      }

      // Prepare and send the main transaction
      const transaction = prepareContractCall({
        contract: transactionContract,
        method: "function OnOffRamp(address,uint256,string,string)",
        params: [addressTo, parsedAmount, referenceId, walletId],
      });

      setIsLoading(true);
      const tx = await sendTransaction({ transaction, account });
      console.log("Transaction sent:", tx);
      
      // Wait for transaction confirmation
      await tx.wait();
      console.log("Transaction confirmed:", tx);
      setIsLoading(false);

      // Update transaction count
      const newTransactionCount = await readContract({
        contract: transactionContract,
        method: "function getTransactionCount() view returns (uint256)",
        params: [],
      });
      setTransactionCount(newTransactionCount.toString());

      // Send data to API
      const apiData = {
        addressTo,
        amount,
        walletId,
        referenceId,
        transactionHash: tx.hash,
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
    } catch (error) {
      console.log("Error in sendTransaction:", error);
      throw new Error("Transaction failed");
    }
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
        sendTransaction,
        handleChange,
        formData,
        balance,
        fetchBalance,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};