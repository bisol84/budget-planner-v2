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
import { Input } from "@/components/ui/input";
import type { IBudgetData } from "./BudgetTable";

interface ModifyBudgetDialogProps {
  budgetLine: IBudgetData;
  onBudgetUpdated: any;
}

export default function ModifyDialog({
  budgetLine,
  onBudgetUpdated,
}: ModifyBudgetDialogProps) {
  const submitFormModifyRecord = async (e: any) => {
    e.preventDefault();
    const formURL = e.target.action;
    const formData = new FormData(e.target);
    const formBudget = formData.get("inputBudget");
    formData.set("budgetID", budgetLine.ID);

    const response = await fetch(formURL, {
      method: "PATCH",
      body: formData,
    });

    if (response.ok) {
      onBudgetUpdated();
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <ModifyButton />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-1">
          Modifier le budget
        </DialogHeader>
        <form
          name="updateBudget"
          onSubmit={submitFormModifyRecord}
          action="/api/v1/budget/update"
        >
          <DialogDescription>
            <div className="grid gap-4 py-4">
              <Label htmlFor="inputBudget">Budget</Label>
              <Input name="inputBudget" defaultValue={budgetLine.amount} />
            </div>
          </DialogDescription>
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
