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
import ModifyButton from "../button/ModifyButton";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ModifyAccount() {
  return (
    <Dialog>
      <DialogTrigger>
        <ModifyButton />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-1">
          Modifier le compte
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Label htmlFor="inputAccount">Compte</Label>
          {/* <Input
              name="inputBudget"
              defaultValue={budgetLine.amount}
              className="w-full"
            /> */}
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
      </DialogContent>
    </Dialog>
  );
}
