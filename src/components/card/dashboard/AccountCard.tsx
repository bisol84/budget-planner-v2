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

export default function AccountCard() {
  const [accountCard, setAccountCard] = useState<IAccount>();

  interface IAccount {
    message: string;
  }

  useEffect(() => {
    fetch("/api/v1/budgets")
      .then((response) => response.json())
      .then((data) => setAccountCard(data));
  }, []);

  return (
    <Card className="min-w-64 min-h-48">
      <CardHeader>
        <CardTitle>Compte 1</CardTitle>
        <CardDescription>Compte 1</CardDescription>
      </CardHeader>
      <CardContent className="">
        <span className="text-3xl font-semibold">{accountCard?.message}</span>
      </CardContent>
      <CardFooter>
        <p></p>
      </CardFooter>
    </Card>
  );
}
