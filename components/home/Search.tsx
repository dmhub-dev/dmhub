import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const initialSearchState = {
  postcode: "",
  name: "",
};

export default function Search() {
  return (
    <section className="w-full container">
      <div className="max-w-[500px] w-full -mt-[80px] mx-auto bg-white p-6 md:p-8 shadow-xl space-y-2">
        <h2 className="font-bold text-2xl mb-4">
          Vind de uw uitvaartverzorger die bij u past
        </h2>
        <div className="relative w-full">
          <Input placeholder="Postcode of plaatsnaam" />
        </div>
        <div className="relative w-full">
          <Input placeholder="Zoek op naam of bedrijfsnaam" />
        </div>
        <Button className="w-full">Zoek uw uitvaartverzorger</Button>
      </div>
    </section>
  );
}
