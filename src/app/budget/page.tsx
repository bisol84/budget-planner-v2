import BudgetTable from "@/components/table/budget/BudgetTable";
import { DatePicker } from "@/components/date/DatePicker";

export default function Budget() {
  return (
    <main className="m-4">
      <div>
        <DatePicker />
      </div>
      <div>
        <BudgetTable />
      </div>
    </main>
  );
}
