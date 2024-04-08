"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";

export default function TransactionCard() {
  const [transactionCard, setTransactionCard] = useState<ITransaction>();

  interface ITransaction {
    amount: number;
  }

  useEffect(() => {
    fetch("/api/v1/dashboard/transactions")
      .then((response) => response.json())
      .then((data) => setTransactionCard(data));
  }, []);

  return (
    <Card className="min-w-64 min-h-48">
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
        <CardDescription>Transactions du mois</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{transactionCard?.amount} CHF</p>
      </CardContent>
      <CardFooter>
        <p></p>
      </CardFooter>
    </Card>
  );
}
