import Hero from "@/components/layout/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import Benefits from "@/components/meld-u-aan/Benefits";
import Testimonials from "@/components/home/Testimonials";
import BusinessModels from "@/components/meld-u-aan/BusinessModels";
import SearchCompanies from "@/components/sign-up/SearchCompanies";

export default function SignUpPage() {
  return (
    <>
      <section className="w-full container">
        <div className="w-full py-10">
          <h1 className="text-3xl font-bold text-secondary mb-4">
            Kom als uitvaartverzorger direct in contact met potentiële klanten
          </h1>
          <div className="grid md:grid-cols-[2fr_1fr] gap-6">
            <div>
              <p className="text-gray-600 ">
                Nederland telt jaarlijks ongeveer 170.000 overlijdens.
                Consumenten moeten daarbij vaak in korte een lastige keuze maken
                tussen verschillende uitvaartverzorgers in hun regio. Dat is
                geen eenvoudige keuze! Belangrijk daarbij is dat ze een
                uitvaartverzorger kiezen die het beste bij hun past. MyFunus
                helpt consumenten in die zoektocht naar de ideale
                uitvaartverzorger.
              </p>
              <h2 className="text-2x1 font-bold text-gray-700 mb-2 mt-2">
                Meld u aan en kom direct in contact
              </h2>
              <p className="text-gray-600 mb-2">
                Elke uitvaartverzorger staat standaard op myFunus. Door u aan te
                melden bij myFunus kunt u zich via een persoonlijke pagina nog
                nadrukkelijker presenteren aan consumenten die op zoek zijn naar
                de ideale uitvaartverzorger.
              </p>
            </div>
          </div>

          <SearchCompanies />
        </div>
      </section>

      <section className="bg-secondary py-14 text-white mt-10">
        <div className="container w-full text-center">
          <div className="md:flex md:justify-around gap-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">2.500+</span>
              <span className="block">uitvaartverzorgers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">500.000+</span>
              <span className="block">consumenten</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">&gt;90%</span>
              <span className="block">tevredenheid</span>
            </div>
          </div>
        </div>
      </section>

      <Benefits />

      <section className="container mt-8">
        <h1 className="text-4xl font-bold text-darktext mb-4">
          Wat anderen zeggen
        </h1>
        <div className="max-w-5xl mx-auto">
          <Testimonials />
        </div>
      </section>

      <BusinessModels />
      <section className="bg-teal-600 py-12 text-center text-white">
        <h3 className="text-3xl font-normal mb-16">
          Profiteer net als al die andere uitvaartverzorgers!
        </h3>
        <div className="flex justify-around gap-4 max-w-5xl mx-auto">
          <button className="bg-transparent border-2 border-white text-white px-6 py-2 text-center md:w-[40%]">
            VEELGESTELDE VRAGEN
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-2 text-center md:w-[40%]">
            MELD U DIRECT AAN
          </button>
        </div>
      </section>
    </>
  );
}
