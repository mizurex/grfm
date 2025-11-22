"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import RevenueCard from "@/components/cards/RevenueCard";
import TransactionsCard from "@/components/cards/TransactionsCard";
import RecentTransactionsCard from "@/components/cards/RecentTransactionCard";
import ConversionRateCard from "@/components/cards/ConversionRateCard";
import TotalExpenseCard from "@/components/cards/TotalExpenseCard";
import ExchangeRateCard from "@/components/cards/ExchangeCard";
import CreditScoreCard from "@/components/cards/CreditScore";

export default function DodoPaymentsDashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="grid h-screen w-screen grid-cols-1 overflow-hidden dark:bg-slate-900 lg:grid-cols-[280px_1fr]">
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <main className="flex h-screen flex-col overflow-hidden">
        <Header onMenuOpen={() => setIsMobileMenuOpen(true)} />
        <div className="w-full min-[1000px]:overflow-x-auto min-[1400px]:overflow-x-hidden bg-background overflow-y-auto mt-[4px]">
          <div className="w-full  min-[1400]:ml-8 min-[1500px]:ml-15 ">
            <div className="pt-[2px] px-[16px] pb-[20px] w-full max-w-[1440px]">
              <div className="flex flex-col gap-4 lg:flex-row lg:gap-[20px]">
                <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-[352px_352px]">
                  <RevenueCard />
                  <TransactionsCard />
                  <RecentTransactionsCard />
                  <ConversionRateCard />
                </div>
                <div className="flex flex-col gap-[20px] lg:w-[352px] ">
                  <TotalExpenseCard />
                  <ExchangeRateCard />
                  <CreditScoreCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
