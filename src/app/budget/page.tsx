"use client"
import BudgetTable from "@/components/table/budget/BudgetTable";
import { DatePicker } from "@/components/date/DatePicker";
import { useState } from "react";

export default function Budget() {
  const [date, setDate] = useState<Date>(new Date())

  return (
    <main className="m-4">
      <div>
        <DatePicker date={date} handleUpdate={setDate} />
      </div>
      <div>
        <BudgetTable budgetDate={date} />
      </div>
    </main>
  );
}
