"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface IAccount {
  accountName: string;
  accountDescription: string;
  accountType: string;
  accountID: string;
}

export default function AccountCard({
  accountName,
  accountDescription,
  accountType,
  accountID,
}: IAccount) {
  return (
    <Card className="min-w-18 min-h-56">
      <CardHeader>
        <CardTitle>{accountName}</CardTitle>
        <CardDescription>{accountType}</CardDescription>
      </CardHeader>
      <CardContent className="">
        <span>{accountDescription}</span>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
