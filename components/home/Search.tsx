"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { X } from "lucide-react";

const initialSearchState = {
  postcode: "",
  name: "",
};

export default function Search() {
  const [postcode, setPostcode] = useState("");
  const [name, setName] = useState("");

  return (
    <section className="w-full container">
      <div className="max-w-[500px] w-full -mt-[80px] mx-auto bg-white p-6 md:p-8 shadow-xl space-y-2">
        <h2 className="font-bold text-2xl mb-4">
          Vind de uw uitvaartverzorger die bij u past
        </h2>
        <div className="relative w-full">
          <Input
            placeholder="Postcode of plaatsnaam"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
          {postcode && postcode.length > 1 && (
            <button
              onClick={() => setPostcode("")}
              className="absolute top-3 right-2"
            >
              <X className="size-4 text-[#dbdbd7] stroke-2" />
            </button>
          )}
          {postcode && postcode.length > 1 && (
            <div className="w-full absolute top-10 shadow-custom bg-white z-50">
              <div className="py-[9px] px-4">
                <h4 className="text-sm font-bold text-darktext">Postcodes</h4>
              </div>
              <div className="py-2 px-4">
                <p className="text-sm text-darktext">Loading...</p>
              </div>
            </div>
          )}
        </div>
        <div className="relative w-full">
          <Input
            placeholder="Zoek op naam of bedrijfsnaam"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name && name.length > 1 && (
            <button
              onClick={() => setName("")}
              className="absolute top-3 right-2"
            >
              <X className="size-4 text-[#dbdbd7] stroke-2" />
            </button>
          )}
          {name && name.length > 1 && (
            <div className="w-full absolute top-10 shadow-custom bg-white z-50">
              <div className="py-[9px] px-4">
                <h4 className="text-sm font-bold text-darktext">
                  Uitvaartverzorgers
                </h4>
              </div>
              <div className="py-2 px-4">
                <p className="text-sm text-darktext">Loading...</p>
              </div>
            </div>
          )}
        </div>
        <Button className="w-full h-[35px]">Zoek uw uitvaartverzorger</Button>
      </div>
    </section>
  );
}
