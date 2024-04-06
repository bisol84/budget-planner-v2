"use client";

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
import UploadButton from "./UploadButton";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function UploadDialog() {
  const [file, setFile] = useState(null);

  const submitFormAddCSV = async (e: any) => {
    e.preventDefault();

    const formURL = e.target.action;
    const formData = new FormData();

    if (file) {
      formData.append("file", file);
    }

    const response = await fetch(formURL, {
      method: "POST",
      body: formData,
    });
  };

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <UploadButton />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-1">
          Envoi de .csv
        </DialogHeader>
        <form
          method="POST"
          onSubmit={submitFormAddCSV}
          action="/api/v1/upload/csv"
        >
          <DialogDescription>
            <input
              accept=".csv"
              type="file"
              name="file"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            ></input>
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
