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
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

interface IAccount {
  accountName: string;
  accountDescription: string;
  accountType: string;
  accountID: string;
  onUpdate: any;
}

export default function ModifyAccount({
  accountID,
  accountName,
  accountDescription,
  accountType,
  onUpdate,
}: IAccount) {
  const submitFormModifyRecord = async (e: any) => {
    e.preventDefault();
    const formURL = e.target.action;
    const formData = new FormData(e.target);
    formData.set("accountID", accountID);

    const response = await fetch(formURL, {
      method: "PATCH",
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
          <FontAwesomeIcon icon={faPenToSquare} className="cursor-pointer" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-1">
          Modifier le compte
        </DialogHeader>
        <form
          name="updateAccount"
          onSubmit={submitFormModifyRecord}
          action="/api/v1/account/update"
        >
          <div className="grid gap-4 py-4">
            <Label htmlFor="inputAccount">Compte</Label>
            <Input
              name="inputAccountName"
              defaultValue={accountName}
              className="w-full"
            />
            <Label htmlFor="inputAccount">Description</Label>
            <Input
              name="inputAccountDescription"
              defaultValue={accountDescription}
              className="w-full"
            />
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
