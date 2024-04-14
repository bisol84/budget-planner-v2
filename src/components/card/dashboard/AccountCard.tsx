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
}

export default function AccountCard({
  accountName,
  accountDescription,
  accountType,
}: IAccount) {
  return (
    <Card className="min-w-64 min-h-56">
      <CardHeader>
        <CardTitle>{accountName}</CardTitle>
        <CardDescription>{accountType}</CardDescription>
      </CardHeader>
      <CardContent className="">
        <span>{accountDescription}</span>
      </CardContent>
      <CardFooter>
        <p></p>
      </CardFooter>
    </Card>
  );
}
