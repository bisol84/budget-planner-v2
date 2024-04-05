import BudgetCard from "@/components/card/dashboard/BudgetCard";
import TransactionCard from "@/components/card/dashboard/TransactionsCard";
import AccountsCards from "@/components/card/dashboard/AccountsCards";
import InvestCard from "@/components/card/dashboard/InvestCard";

export default function Dashboard() {
  return (
    <main className="m-4">
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <BudgetCard />
        </div>
        <div>
          <TransactionCard />
        </div>
        <div className="col-span-2">
          <AccountsCards />
        </div>
        <div className="col-span-2">Graphique</div>
        <div>
          <InvestCard />
        </div>
      </div>
    </main>
  );
}
