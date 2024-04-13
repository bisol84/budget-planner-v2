"use client";

import AccountCard from "./AccountCard";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function AccountsCards() {
  const [accountCard, setAccountCard] = useState([]);
  const [current, setCurrent] = useState(0);

  const previous = () => setCurrent(current - 1);
  const next = () => setCurrent(current + 1);

  interface IAccount {
    message: string;
    map: any;
    account: any;
  }

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
          className=" flex gap-4 transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${current * 40}%)` }}
        >
          {accountCard.map((account) => (
            <AccountCard
              key={account.ID}
              accountName={account.name}
              accountDescription={account.description}
              accountType={account.type}
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          {current !== 0 && (
            <Button onClick={previous} variant="outline">
              <FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer" />
            </Button>
          )}
          <Button onClick={next} variant="outline">
            <FontAwesomeIcon icon={faArrowRight} className="cursor-pointer" />
          </Button>
        </div>
      </div>
    </>
  );
}
