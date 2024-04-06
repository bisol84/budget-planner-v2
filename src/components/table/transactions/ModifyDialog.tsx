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

interface ITransaction {
  import_category: string;
}

interface ModifyDialogProps {
  transactionLine: ITransaction;
}

export default function ModifyDialog({ transactionLine }: ModifyDialogProps) {

  return (
    <Dialog>
      <DialogTrigger>
        <ModifyButton />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-1">
          Modifier la transaction
        </DialogHeader>
        <DialogDescription>{transactionLine.import_category}</DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Fermer</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit">Envoyer</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
