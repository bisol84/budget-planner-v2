"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
import ModifyDialog from "./ModifyDialog";

export default function BudgetTable({ budgetDate }) {
  const [budgetTable, setBudgetTable] = useState<IBudgetData[]>([]);

  interface IBudgetData {
    ID: number;
    category: string;
    parent_category_id: number;
    amount: number;
    start_date: Date | null;
    end_date: Date | null;
    transactions_amount: number;
  }

  useEffect(() => {
    fetchBudget(budgetDate);
  }, [budgetDate]);

  const handleBudgetUpdated = () => {
    fetchBudget(budgetDate);
  };

  const fetchBudget = async (budgetDate) => {
    const response = await fetch(`/api/v1/budgets/${budgetDate}`);
    if (response.ok) {
      const data = await response.json();
      setBudgetTable(data);
    }
  };

  function calculateTotalAmount(budgetLine: any) {
    if (budgetLine.transactions_amount < 0) {
      return (budgetLine.amount + budgetLine.transactions_amount).toFixed(2);
    } else {
      return (budgetLine.amount - budgetLine.transactions_amount).toFixed(2);
    }
  }

  function formatTransactionAmount(transactions_amount: number) {
    if (transactions_amount == null) {
      return 0.0;
    } else {
      return transactions_amount.toFixed(2);
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Catégorie</TableHead>
          <TableHead>Budget</TableHead>
          <TableHead>Transaction</TableHead>
          <TableHead>Restant</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {budgetTable.map((budgetLine: IBudgetData) => (
          <TableRow key={budgetLine.ID}>
            <TableCell>{budgetLine.category}</TableCell>
            <TableCell>{budgetLine.amount.toFixed(2)}</TableCell>
            <TableCell>
              {formatTransactionAmount(budgetLine.transactions_amount)}
            </TableCell>
            <TableCell
              className={
                calculateTotalAmount(budgetLine) < 0
                  ? "text-red-500"
                  : "text-green-500"
              }
            >
              {calculateTotalAmount(budgetLine)}
            </TableCell>
            <TableCell>
              <ModifyDialog
                budgetLine={budgetLine}
                onBudgetUpdated={handleBudgetUpdated}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
