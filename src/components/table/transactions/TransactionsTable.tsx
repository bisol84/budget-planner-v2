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
import DeleteButton from "../../button/DeleteButton";
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
    Account: {
      name: string;
    };
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleTransactionUpdated = async () => {
    await fetchTransactions();
  };

  const fetchTransactions = async () => {
    const response = await fetch("/api/v1/transactions");
    if (response.ok) {
      const data = await response.json();
      setTransactionsTable(data);
    }
  };

  function formatDate(date: any) {
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleDateString("fr-CH", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return formattedDate;
  }

  const handleDeleteTransaction = async (transactionID: string) => {
    const response = await fetch(
      `/api/v1/transaction/delete/${transactionID}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      fetchTransactions();
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
            <TableCell>{formatDate(transactionLine.date)}</TableCell>
            <TableCell>{transactionLine.amount.toFixed(2)}</TableCell>
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
            <TableCell>{transactionLine.Account?.name}</TableCell>
            <TableCell>
              <div className="flex gap-x-5">
                <ModifyDialog
                  transactionLine={transactionLine}
                  onTransactionUpdated={handleTransactionUpdated}
                />
                <DeleteButton
                  onClick={() => handleDeleteTransaction(transactionLine.ID)}
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
