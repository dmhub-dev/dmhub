import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

export default function SearchCompanies() {
  return (
    <form action="" className="mt-8 w-full grid max-w-xl">
      <Input
        placeholder="Wat is je bedrijfsnaam?"
        className="mb-2 w-full h-12"
      />
      <Link
        href="/meld-u-aan/next"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-end text-sm block mb-4 hover:text-primary"
      >
        Staat uw bedrijf niet in de lijst?
      </Link>
      <Button className="h-12 w-1/3 mb-6 uppercase font-semibold">
      Start gratis
      </Button>
    </form>
  );
}
