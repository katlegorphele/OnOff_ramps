'use client'

import Image from "next/image";
import Welcome from "./components/Welcome";
import { TransactionsProvider } from "@/context/TransactionContext";
import Transactions from "./components/Transactions";

export default function Home() {
  return (
    <TransactionsProvider>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Welcome/>
        <Transactions/>
        
      </main>
      
    </div>
    </TransactionsProvider>
  );
}
