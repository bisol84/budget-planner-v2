import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CategorySelect from "./CategorySelect";
import AccountSelect from "./AccountSelect";
import type { ITransactions } from "./TransactionsTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

interface ModifyDialogProps {
  transactionLine: ITransactions;
  onTransactionUpdated: any;
}

export default function ModifyDialog({
  transactionLine,
  onTransactionUpdated,
}: ModifyDialogProps) {
  const submitFormModifyRecord = async (e: any) => {
    e.preventDefault();
    const formURL = e.target.action;
    const formData = new FormData(e.target);
    const formCategory = formData.get("selectCategory");
    formData.set("transactionID", transactionLine.ID);

    const response = await fetch(formURL, {
      method: "PATCH",
      body: formData,
    });

    if (response.ok) {
      onTransactionUpdated();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FontAwesomeIcon icon={faPenToSquare} className="cursor-pointer" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-1">
          Modifier la transaction
        </DialogHeader>
        <form
          name="updateTransaction"
          onSubmit={submitFormModifyRecord}
          action="/api/v1/transaction/update"
        >
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="selectCategory">Catégorie</Label>
              <CategorySelect selectedValue={transactionLine.Category.ID} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="transactionType">Type</Label>
              <RadioGroup
                defaultValue={transactionLine.transaction_type}
                name="transactionType"
                className="flex"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="income" id="income" />
                  <Label htmlFor="income">Entrant</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="outcome" id="outcome" />
                  <Label htmlFor="outcome">Sortant</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="transfert" id="transfert" />
                  <Label htmlFor="transfert">Transfert</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="selectAccount">Compte</Label>
              <AccountSelect selectedValue={transactionLine.Account?.ID} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Fermer</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit" variant="outline">
                Envoyer
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
