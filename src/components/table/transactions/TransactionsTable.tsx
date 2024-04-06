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
import DeleteButton from "./DeleteButton";

export default function TransactionsTable() {
  const [transactionsTable, setTransactionsTable] = useState<ITransactions[]>(
    []
  );

  interface ITransactions {
    ID: number;
    date: string;
    amount: number;
    import_category: string;
    Category: string;
    description: string;
    Account: string;
  }

  useEffect(() => {
    fetch("/api/v1/transactions")
      .then((response) => response.json())
      .then((data) => setTransactionsTable(data));
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Montant</TableHead>
          <TableHead>Catégorie importée</TableHead>
          <TableHead>Catégorie sélectionnée</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Compte</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactionsTable.map((transactionLine) => (
          <TableRow key={transactionLine.ID}>
            <TableCell>{transactionLine.date}</TableCell>
            <TableCell>{transactionLine.amount}</TableCell>
            <TableCell>{transactionLine.import_category}</TableCell>
            <TableCell>{transactionLine.Category}</TableCell>
            <TableCell>{transactionLine.description}</TableCell>
            <TableCell>{transactionLine.Account}</TableCell>
            <TableCell><ModifyDialog transactionLine={transactionLine} />&nbsp;<DeleteButton /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
