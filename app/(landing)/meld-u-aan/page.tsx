import Hero from "@/components/layout/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function SignUpPage() {
  return (
    <>
      <Hero />
      <section className="w-full max-w-4xl container">
        <div className="bg-white shadow-lg p-10 md:p-16 w-full -mt-20 mb-16">
          <h1 className="text-4xl font-bold text-gray-700 mb-4">
            Laat je bedrijf zien in de top 10 !
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consectetur, nisl id porttitor luctus, nunc libero.
          </p>

          <form action="" className="mt-8 w-full grid">
            <Input
              placeholder="Wat is je bedrijfsnaam?"
              className="mb-2 w-full h-12"
            />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-end text-sm block mb-4 hover:text-primary"
            >
              Jouw bedrijf niet in de lijst?
            </a>

            <Button className="h-12">Gratis aanmelden</Button>
          </form>
        </div>
      </section>
    </>
  );
}
