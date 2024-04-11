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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function TransactionCard() {
  const [transactionCard, setTransactionCard] = useState<ITransaction>();

  interface ITransaction {
    amount: number;
    total: any;
    up: any;
    down: any;
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
        <span>{transactionCard?.total._sum.amount.toFixed(2)} CHF</span>
      </CardContent>
      <CardFooter>
        <div className="flex w-full">
          <span className="text-green-500"><FontAwesomeIcon icon={faArrowUp} />&nbsp;{transactionCard?.up._sum.amount.toFixed(2)}</span>
          <span className="text-red-500 m-auto"><FontAwesomeIcon icon={faArrowDown} />&nbsp;{transactionCard?.down._sum.amount.toFixed(2)}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
