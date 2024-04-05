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

export default function InvestCard() {
  const [investCard, setInvestCard] = useState<IInvest>();

  interface IInvest {
    message: string;
  }

  useEffect(() => {
    fetch("/api/v1/budgets")
      .then((response) => response.json())
      .then((data) => setInvestCard(data));
  }, []);

  return (
    <Card className="min-w-64 min-h-48">
      <CardHeader>
        <CardTitle>Investissements</CardTitle>
        <CardDescription>Invests du jour</CardDescription>
      </CardHeader>
      <CardContent className="">
        <span className="text-3xl font-semibold">{investCard?.message}</span>
      </CardContent>
      <CardFooter>
        <p></p>
      </CardFooter>
    </Card>
  );
}
