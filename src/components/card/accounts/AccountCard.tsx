"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ModifyAccount from "@/components/dialog/ModifyAccount";
import DeleteButton from "@/components/button/DeleteButton";

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
    <Card className="min-w-64 min-h-56 h-full">
      <CardHeader>
        <CardTitle>{accountName}</CardTitle>
        <CardDescription>{accountType}</CardDescription>
      </CardHeader>
      <CardContent>
        <span>{accountDescription}</span>
      </CardContent>
      <CardFooter className="relative h-full">
        <div className="absolute space-x-2 right-4 top-10">
          <ModifyAccount />
          <DeleteButton />
        </div>
      </CardFooter>
    </Card>
  );
}
