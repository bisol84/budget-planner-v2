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
import ModifyButton from "./ModifyButton";
import { Button } from "@/components/ui/button";
import CategorySelect from "./CategorySelect";
import { Label } from "@/components/ui/label";

interface ITransaction {
  ID: string;
  import_category: string;
  Category: {
    ID: string;
    category: string;
  };
}

interface ModifyDialogProps {
  transactionLine: ITransaction;
  onTransactionUpdated: any;
}

export default function ModifyDialog({ transactionLine, onTransactionUpdated }: ModifyDialogProps) {

  const submitFormModifyRecord = async (e: any) => {
    e.preventDefault()
    const formURL = e.target.action;
    const formData = new FormData(e.target);
    const formCategory = formData.get("selectCategory")
    formData.set('transactionID', transactionLine.ID)

    const response = await fetch(formURL, {
      method: "PATCH",
      body: formData,
    })
    .then(onTransactionUpdated());
  }

  return (
    <Dialog>
      <DialogTrigger>
        <ModifyButton />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-1">
          Modifier la transaction
        </DialogHeader>
        <form name="updateTransaction" onSubmit={submitFormModifyRecord} action="/api/v1/transaction/update">
          <DialogDescription>
            <Label htmlFor="selectCategory">Catégorie</Label>
            <CategorySelect selectedValue={transactionLine.Category.ID} />
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