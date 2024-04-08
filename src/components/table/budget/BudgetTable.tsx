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

export default function BudgetTable() {
  const [budgetTable, setBudgetTable] = useState<IBudget[]>([]);

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
    fetchBudget()
  }, []);

  const handleBudgetUpdated = () => {
    fetchBudget();
  };

  const fetchBudget = async () => {
    const response = await fetch("/api/v1/budgets");
    if (response.ok) {
      const data = await response.json();
      await setBudgetTable(data);
    }
  };

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
            <TableCell>{budgetLine.amount}</TableCell>
            <TableCell>{budgetLine.transactions_amount}</TableCell>
            <TableCell
              style={{
                color:
                  budgetLine.amount - budgetLine.transactions_amount < 0
                    ? "red"
                    : "green",
              }}
            >
              {budgetLine.amount - budgetLine.transactions_amount}
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
