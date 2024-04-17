"use client";

import AccountCard from "./AccountCard";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface IAccount {
  ID: string;
  name: string;
  description: string;
  type: string;
}

export default function AccountsCards() {
  const [accountCard, setAccountCard] = useState<IAccount[]>([]);
  const [current, setCurrent] = useState(0);

  const previous = () => setCurrent(current - 1);
  const next = () => setCurrent(current + 1);

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
    <>
      <div className="overflow-hidden relative">
        <div
          className="flex gap-4 transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${current * 30}%)` }}
        >
          {accountCard.map((account) => (
            <AccountCard
              key={account.ID}
              accountID={account.ID}
              accountName={account.name}
              accountDescription={account.description}
              accountType={account.type}
            />
          ))}
        </div>
        <div>
          {current !== 0 && (
            <Button
              onClick={previous}
              variant="outline"
              className="absolute top-1/2 left-4"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer" />
            </Button>
          )}
          {current !== accountCard.length && accountCard.length > 2 && (
            <Button
              onClick={next}
              variant="outline"
              className="absolute top-1/2 right-4"
            >
              <FontAwesomeIcon icon={faArrowRight} className="cursor-pointer" />
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
