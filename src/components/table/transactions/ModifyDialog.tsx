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
import ModifyButton from "../../button/ModifyButton";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CategorySelect from "./CategorySelect";
import AccountSelect from "./AccountSelect";

interface ITransaction {
  ID: string;
  import_category: string;
  transaction_type: string;
  Category: {
    ID: string;
    category: string;
  };
}

interface ModifyDialogProps {
  transactionLine: ITransaction;
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
      <DialogTrigger>
        <ModifyButton />
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
          <DialogDescription>
            <Label htmlFor="selectCategory">Catégorie</Label>
            <CategorySelect selectedValue={transactionLine.Category.ID} />
            <div className="gap-3">&nbsp;</div>
            <Label htmlFor="transactionType">Type</Label>
            <RadioGroup
              defaultValue={transactionLine.transaction_type}
              name="transactionType"
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
            <Label htmlFor="selectAccount">Compte</Label>
            <AccountSelect selectedValue={transactionLine.Account?.ID} />
          </DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Fermer</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit">Envoyer</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
