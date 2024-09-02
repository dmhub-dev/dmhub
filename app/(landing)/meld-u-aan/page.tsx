import Hero from "@/components/layout/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import Benefits from "@/components/meld-u-aan/benefits";
import Testimonials from "@/components/home/Testimonials";
import BusinessModels from "@/components/meld-u-aan/BusinessModels";

export default function SignUpPage() {
  return (
    <>
      <Hero />
      <section className="w-full max-w-4xl container">
        <div className="bg-white shadow-lg p-10 md:p-16 w-full -mt-20 mb-16">
          <h1 className="text-4xl font-bold text-teal-700 mb-4">
          Kom als uitvaartverzorger direct in contact met potentiële klanten
          </h1>
          <p className="text-gray-600 ">
            Nederland telt jaarlijks ongeveer 170.000 overlijdens. Consumenten moeten
            daarbij vaak in korte een lastige keuze maken tussen verschillende
            uitvaartverzorgers in hun regio. Dat is geen eenvoudige keuze! Belangrijk daarbij
            is dat ze een uitvaartverzorger kiezen die het beste bij hun past. MyFunus helpt
            consumenten in die zoektocht naar de ideale uitvaartverzorger.
          </p>

          <h2 className="text-4x1 font-bold text-gray-700 mb-2 mt-2"> 
          Meld u aan en kom direct in contact
          </h2>
          <p className="text-gray-600 mb-2">
            Elke uitvaartverzorger staat standaard op myFunus. Door u aan te melden bij
            myFunus kunt u zich via een persoonlijke pagina nog nadrukkelijker presenteren
            aan consumenten die op zoek zijn naar de ideale uitvaartverzorger.
          </p>

          <p>
          Heeft u vragen? Neem direct <a href="/contact" className="text-blue-500 underline">contact</a> met ons op.
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

      <section className="bg-secondary py-16 text-white mt-16">
        <div className="container max-w-4xl w-full text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="text-2xl md:text-4xl font-bold">2.500+</span>
          <span className="block">uitvaartverzorgers</span>
        </div>
        <div>
          <span className="text-2xl md:text-4xl font-bold">500.000+</span>
          <span className="block">consumenten</span>
        </div>
        <div>
          <span className="text-2xl md:text-4xl font-bold">&gt;90%</span>
          <span className="block">tevredenheid</span>
        </div>
        </div>
        </div>
      </section>

      <Benefits/>

      <section>
      <div className="bg-white p-10 md:p-16 w-full -mt-30 mb-0">
          <h1 className="text-4xl font-bold text-black-700 mb-4">
          Wat anderen zeggen
          </h1>
      </div>
      </section>

      <Testimonials/>
      
      <BusinessModels/>
    </>
  );
}
