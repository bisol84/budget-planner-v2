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

export default function TransactionCard({
  transactionDate,
}: {
  transactionDate: Date;
}) {
  const [transactionCard, setTransactionCard] = useState<ITransaction>();

  interface ITransaction {
    amount: number;
    total: any;
    up: any;
    down: any;
  }

  useEffect(() => {
    fetch(`/api/v1/dashboard/transactions/${transactionDate}`)
      .then((response) => response.json())
      .then((data) => setTransactionCard(data));
  }, [transactionDate]);

  return (
    <Card className="min-w-64 min-h-56">
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
        <CardDescription>Transactions classées</CardDescription>
      </CardHeader>
      <CardContent>
        <span>{transactionCard?.total?.toFixed(2)} CHF</span>
      </CardContent>
      <CardFooter>
        <div className="flex w-full">
          <span className="text-green-500">
            <FontAwesomeIcon icon={faArrowUp} />
            &nbsp;{transactionCard?.up?.toFixed(2)} CHF
          </span>
          <span className="text-red-500 m-auto">
            <FontAwesomeIcon icon={faArrowDown} />
            &nbsp;{transactionCard?.down?.toFixed(2)} CHF
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
