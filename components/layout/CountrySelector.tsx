"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const countries = [
  { name: "Netherlands", locale: "nl" },
  { name: "United States", locale: "us" },
  { name: "United Kingdom", locale: "uk" },
  { name: "Germany", locale: "de" },
  { name: "France", locale: "fr" },
  { name: "Spain", locale: "es" },
  { name: "Italy", locale: "it" },
  // {name: "China", locale: "cn"},
  // {name: "Japan", locale: "jp"},
  // {name: "South Korea", locale: "kr"},
  // {name: "Australia", locale: "au"},
];

const CountrySelector = () => {
  const [locale, setLocale] = useState("nl");

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <img
            src={`/flags/${locale}.svg`}
            alt={locale}
            className="h-5 w-auto"
          />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Locale</DialogTitle>
            <DialogDescription>
              <div className="mt-4">
                <Select onValueChange={(v) => setLocale(v)}>
                  <SelectTrigger className="w-full z-[1000] relative">
                    <div className="flex items-center gap-2">
                      <img
                        src={`/flags/${locale}.svg`}
                        alt={locale}
                        className="h-5 w-auto"
                      />
                      <span>
                        {countries.find((c) => c.locale === locale)?.name}
                      </span>
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.name} value={country.locale}>
                        <div className="flex items-center gap-2">
                          <img
                            src={`/flags/${country.locale}.svg`}
                            alt={country.name}
                            className="h-5 w-auto"
                          />
                          <span>{country.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CountrySelector;
