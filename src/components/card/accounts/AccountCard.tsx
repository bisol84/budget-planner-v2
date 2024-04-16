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
  onUpdate: any;
}

export default function AccountCard({
  accountName,
  accountDescription,
  accountType,
  accountID,
  onUpdate,
}: IAccount) {
  const handleDelete = async (accountID: string) => {
    const response = await fetch(`/api/v1/account/delete/${accountID}`, {
      method: "DELETE",
    });
    if (response.ok) {
      onUpdate();
    }
  };

  return (
    <Card className="min-w-64 min-h-56 h-full relative">
      <CardHeader>
        <CardTitle>{accountName}</CardTitle>
        <CardDescription>{accountType}</CardDescription>
      </CardHeader>
      <CardContent>
        <span>{accountDescription}</span>
      </CardContent>
      <CardFooter className="h-full">
        <div className="absolute bottom-0 right-0 mb-4 mr-4 space-x-2">
          <ModifyAccount
            accountID={accountID}
            accountName={accountName}
            accountDescription={accountDescription}
            accountType={""}
            onUpdate={onUpdate}
          />
          <DeleteButton onClick={() => handleDelete(accountID)} />
        </div>
      </CardFooter>
    </Card>
  );
}
