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

export default function BudgetTable() {
  const [budgetTable, setBudgetTable] = useState<IBudget[]>([]);

  interface IBudget {
    ID: number;
    category: string;
    parent_category_id: number;
    amount: number;
    start_date: Date | null;
    end_date: Date | null;
    transactions_amount: number;
  }

  useEffect(() => {
    fetch("/api/v1/budgets")
      .then((response) => response.json())
      .then((data) => setBudgetTable(data));
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Catégorie</TableHead>
          <TableHead>Budget</TableHead>
          <TableHead>Transaction</TableHead>
          <TableHead>Restant</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {budgetTable.map((budgetLine) => (
          <TableRow key={budgetLine.ID}>
            <TableCell>{budgetLine.category}</TableCell>
            <TableCell>{budgetLine.amount}</TableCell>
            <TableCell>{budgetLine.transactions_amount}</TableCell>
            <TableCell>{budgetLine.amount - budgetLine.transactions_amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
