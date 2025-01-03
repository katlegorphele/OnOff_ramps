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
import {Account} from 'thirdweb/wallets'

import { contractAddress, contractAddressUzar } from "../utils/constants";

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

// const createEthereumContractUZAR = () => {
//   const provider = new ethers.providers.Web3Provider(ethereum);
//   const signer = provider.getSigner();
//   const UZARContract = new ethers.Contract(contractAddressUzar, contractUzarAbi, signer);

//   return UZARContract;
// };

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
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const availableTransactions = await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          referenceId: transaction.referenceId,
          walletId: transaction.walletId,
          amount: parseInt(transaction.amount._hex) / 10 ** 18,
        }));

        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllTransactions();
        await fetchBalance(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBalance = async (account) => {
    try {
      const UZARContract = createEthereumContractUZAR();
      const rawBalance = await UZARContract.balanceOf(account);
      const formattedBalance = ethers.utils.formatEther(rawBalance);
      setBalance(formattedBalance);
      console.log("Balance:", formattedBalance);
    } catch (error) {
      console.log("Failed to fetch balance:", error);
    }
  };

  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const currentTransactionCount = await transactionsContract.getTransactionCount();

        window.localStorage.setItem("transactionCount", currentTransactionCount);
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async () => {
    
  };

  const sendTransaction = async () => {
    try {
      if (ethereum) {
        const { addressTo, amount, walletId, referenceId } = formData;
        const transactionsContract = createEthereumContract();
        const UZARContract = createEthereumContractUZAR();
        const parsedAmount = ethers.utils.parseEther(amount);
  
        // Check for allowance
        const allowance = await UZARContract.allowance(currentAccount, contractAddress);
  
        if (allowance.lt(parsedAmount)) {
          console.log("Insufficient allowance, requesting approval...");
          const approveTx = await UZARContract.approve(contractAddress, parsedAmount);
          console.log(`Approval transaction hash: ${approveTx.hash}`);
          await approveTx.wait();
          console.log("Approval granted.");
        }
  
        // Initiate the transaction
        const transactionHash = await transactionsContract.OnOffRamp(
          addressTo,
          parsedAmount,
          referenceId,
          walletId
        );
  
        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);
  
        const transactionsCount = await transactionsContract.getTransactionCount();
        setTransactionCount(transactionsCount.toNumber());
  
        
        const apiData = {
          addressTo,
          amount,
          walletId,
          referenceId,
          transactionHash: transactionHash.hash,
        };
  
        // const response = await fetch("https://sandbox-api.kotanipay.io/api/v3/withdraw/v2/bank", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //   },
        //   body: JSON.stringify(apiData),
        // });
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

        
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);
      throw new Error("Error in sendTransaction function");
    }
  };
  

  useEffect(() => {
    checkIfWalletIsConnect();
    checkIfTransactionsExists();
  }, [transactionCount]);

  return (
    <TransactionContext.Provider
      value={{
        transactionCount,
        connectWallet,
        transactions,
        currentAccount,
        isLoading,
        sendTransaction,
        handleChange,
        formData,
        balance,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
