import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

interface AccountSelectProps {
  selectedValue: string;
}

interface Account {
  ID: number;
  name: string;
}

export default function AccountSelect({
  selectedValue,
}: {
  selectedValue: string;
}) {
  const [accounts, setAccount] = useState<Account[]>([]);

  useEffect(() => {
    fetch("/api/v1/accounts")
      .then((response) => response.json())
      .then((data) => setAccount(data));
  }, []);

  return (
    <Select name="selectAccount" defaultValue={selectedValue?.toString()}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Compte" />
      </SelectTrigger>
      <SelectContent>
        {accounts.map((account) => (
          <SelectItem key={account.ID} value={account.ID.toString()}>
            {account.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
