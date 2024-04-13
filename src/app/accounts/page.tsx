"use client";

import AccountCard from "@/components/card/dashboard/AccountCard";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Accounts() {
  const [accountCard, setAccountCard] = useState([]);

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
      <div className="flex gap-4">
        {accountCard.map((account) => (
          <AccountCard
            key={account.ID}
            accountName={account.name}
            accountDescription={account.description}
            accountType={account.type}
          />
        ))}
      </div>
    </main>
  );
}
