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

export default function BudgetCard() {
  const [budgetCard, setBudgetCard] = useState<IBudget>();

  interface IBudget {
    total: number;
  }

  useEffect(() => {
    fetch("/api/v1/dashboard/budgets")
      .then((response) => response.json())
      .then((data) => setBudgetCard(data));
  }, []);

  return (
    <Card className="min-w-64 min-h-48">
      <CardHeader>
        <CardTitle>Budget</CardTitle>
        <CardDescription>Budget net du mois</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{budgetCard?.total.toFixed(2)} CHF</p>
      </CardContent>
      <CardFooter>
        <p></p>
      </CardFooter>
    </Card>
  );
}
