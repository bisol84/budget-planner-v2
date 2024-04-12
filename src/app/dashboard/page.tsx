"use client";

import BudgetCard from "@/components/card/dashboard/BudgetCard";
import TransactionCard from "@/components/card/dashboard/TransactionsCard";
import AccountsCards from "@/components/card/dashboard/AccountsCards";
import InvestCard from "@/components/card/dashboard/InvestCard";
import DatePicker from "@/components/date/DatePicker";
import { useState } from "react";

export default function Dashboard() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <main className="m-4">
      <div className="mb-2">
        <DatePicker date={date} handleUpdate={setDate} />
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <BudgetCard />
        </div>
        <div>
          <TransactionCard />
        </div>
        <div className="col-span-2">
          <AccountsCards />
        </div>
        <div className="col-span-2">Graphique</div>
        <div>
          <InvestCard />
        </div>
      </div>
    </main>
  );
}
