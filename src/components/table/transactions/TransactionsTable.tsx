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
import { Badge } from "@/components/ui/badge";

export default function TransactionsTable() {
  const [transactionsTable, setTransactionsTable] = useState<ITransactions[]>(
    []
  );

  interface ITransactions {
    ID: string;
    date: string;
    amount: number;
    import_category: string;
    description: string;
    transaction_type: string | null;
    id_category: number | null;
    id_account: number | null;
    account: string;
    Category: {
      ID: string;
      category: string;
      description: string;
      color: string;
      icon: string;
      parent_category_id: number | null;
    };
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleTransactionUpdated = () => {
    fetchTransactions();
  };

  const fetchTransactions = async () => {
    const response = await fetch("/api/v1/transactions");
    if (response.ok) {
      const data = await response.json();
      setTransactionsTable(data);
    }
  };

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
            <TableCell>
              <Badge
                variant="outline"
                className={`bg-opacity-75`}
                style={{ backgroundColor: transactionLine.Category.color }}
              >
                {transactionLine.Category.category}
              </Badge>
            </TableCell>
            <TableCell>{transactionLine.description}</TableCell>
            <TableCell>{transactionLine.account}</TableCell>
            <TableCell>
              <ModifyDialog
                transactionLine={transactionLine}
                onTransactionUpdated={handleTransactionUpdated}
              />
              &nbsp;
              <DeleteButton />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
