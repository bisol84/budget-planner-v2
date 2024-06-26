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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddAccount({ onUpdate }: { onUpdate: any }) {
  const submitAddRecord = async (e: any) => {
    e.preventDefault();
    const formURL = e.target.action;
    const formData = new FormData(e.target);

    const response = await fetch(formURL, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      onUpdate();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-1">
          Ajouter un compte
        </DialogHeader>
        <form
          name="updateAccount"
          onSubmit={submitAddRecord}
          action="/api/v1/account/create"
        >
          <div className="grid gap-4 py-4">
            <Label htmlFor="inputAccountName">Compte</Label>
            <Input name="inputAccountName" defaultValue="" />
            <Label htmlFor="inputAccountDescription">Description</Label>
            <Input name="inputAccountDescription" defaultValue="" />
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
