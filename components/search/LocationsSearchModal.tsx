import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function LocationsSearchModal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Postcode of plaatsnaam</DialogTitle>
          <DialogDescription>
            <div className="mt-4">
              <div className="relative w-full mb-4">
                <Input placeholder="Postcode of plaatsnaam" />
              </div>
              {/* <div className="relative w-full">
                <Input placeholder="Zoek op naam of bedrijfsnaam" />
              </div> */}
              <Button className="w-full">Zoek</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
