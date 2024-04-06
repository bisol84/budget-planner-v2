import TransactionsTable from "@/components/table/transactions/TransactionsTable";
import UploadButton from "@/components/table/transactions/UploadButton";
import UploadDialog from "@/components/table/transactions/UploadDialog";

export default function Transactions() {

  return (
    <main className="m-4">
      <div>
        <UploadDialog />
      </div>
      <div>
      <TransactionsTable />
      </div>
    </main>
  );
}
