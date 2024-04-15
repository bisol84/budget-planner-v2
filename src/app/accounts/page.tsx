"use client";

import AccountCard from "@/components/card/accounts/AccountCard";
import AddAccount from "@/components/dialog/AddAccount";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Accounts() {
  const [accountCard, setAccountCard] = useState<any[]>([]);

  useEffect(() => {
    fetchAccount();
  }, []);

  const fetchAccount = async () => {
    const response = await fetch("/api/v1/accounts");
    if (response.ok) {
      const data = await response.json();
      setAccountCard(data);
    }
  };

  return (
    <main className="m-4">
      <div className="grid grid-cols-4 gap-2">
        {accountCard.map((account, index) => (
          <div key={index} className="max-w-72">
            <AccountCard
              key={account.ID}
              accountID={account.ID}
              accountName={account.name}
              accountDescription={account.description}
              accountType={account.type}
            />
          </div>
        ))}
        <div>
          <AddAccount />
        </div>
      </div>
    </main>
  );
}
