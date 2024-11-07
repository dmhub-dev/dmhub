import HeroSec from "@/components/Sermenweken/HeroSem";
import React from "react";
import TestimonialCarousel from "@/components/meld-u-aan/TestimonialCarousel";
import Benefits from "@/components/meld-u-aan/Benefits";
import Hero from "@/components/layout/Hero";
import SamwekenForm from "@/components/Sermenweken/SamenWekenForm";
import ContactAside from "@/components/contact/ContactAside";
import { Button } from "@/components/ui/button";
export default function samenwerken() {
  const testimonials = [
    {
      text: "MyFunus biedt mij als uitvaartverzorger een prachtig platform om direct in contact te komen met mijn doelgroep. Bovendien genereer ik via aanvullende producten extra inkomsten, naast de bestaande uitvaarten die ik doe. Een waardevol platform voor mij!",
      author: "Erik Sepp",
      title: "Uitvaartondernemer",
      image: "/img/profile.png"
    },
    {
      text: "Fijn en betrouwbaar bedrijf. Eerlijke uitvaartverzorger. Prima verzorgd",
      author: "Zeer professioneel",
      title: "",
      image: "/img/ludovic-migneault-EZ4TYgXPNWk-unsplash.jpg"
    },
    {
      text: "Zeer professioneel en betrokken. Een aanrader voor iedereen",
      author: "Een aanrader",
      title: "",
      image: "/img/person.png"
    },
    {
      text: "Zeer betrouwbaar en professioneel bedrijf. Altijd goed verzorgd",
      author: "Betrouwbaar bedrijf",
      title: "",
      image: "/img/ali-morshedlou-WMD64tMfc4k-unsplash.jpg"
    }
  ];
  const featuresDefault = [

    {
      title: "Een gedreven team",
      description: "Een professioneel en gedreven team dat met onze klanten meedenkt om onze gezamenlijke doelen te bereiken. Samen staan we sterk!",
      icon: "/icons/features-4.svg",
    },
    {
      title: "Oog voor de doelgroep",
      description: "Alles rondom het overlijden geniet de grootste aandacht en zorg. Vanuit myFunus zorgen we dat consumenten daarbij ontzorgt worden op een mooie en passende manier.",
      icon: "/icons/features-1.svg",
    },
    {
      title: "Een missie met veel voldoening",
      description: "Onze missie: bedrijven rondom uitvaarten in contact brengen met potentiële klanten en deze helpen in hun lastige zoektocht bij het vinden van de uitvaartverzorger die bij hun past. Hoe mooi is dat!",
      icon: "/icons/features-2.svg",
    },
  ];
  
  return (
    <>
      <HeroSec
        title="Samenwerken"
        description="Wij zijn een jong en ambitieus bedrijf en altijd op zoek naar
mooie partnerships die onze doelgroep verrijken en verder
helpen. [n]
Heb jij als bedrijf affiniteit met zaken rondom overlijden,
uitvaarten, etc. en ben jij op zoek naar een miljoenen publiek,
dan zouden we graag samen kijken hoe we daar een mooie
propositie voor kunnen opzetten."
      />

      <TestimonialCarousel testimonials={testimonials}/>
      <Benefits benefits={featuresDefault} title="Wat kan je bij ons verwachten"/>

     <div className="text-center bg-secondary bg-opacity-30 py-8">
          <h1 className="text-2xl font-bold text-dark text-center mb-2">
            Neem contact op
          </h1>
          <p>Benieuwd op welke manieren we kunnen samenwerken met uw bedrijf?
          </p>
          <Button className="h-12 w-1/6 mb-20 mt-4 uppercase font-semibold">
          NEEM CONTACT OP
          </Button>

      </div>
      <Hero backgroundImg="/img/contact.jpg" />
      <section className="container w-full">
        <div className="w-full ml-10 grid md:grid-cols-[1fr_320px] gap-6 py-6">
          <div className="w-full -mt-32 bg-white md:p-16 shadow-xl border ">
            <h1 className="text-[40px] font-bold text-teal-600 font-sans">
            Samenwerken
            </h1>

            <p className="mb-6 text-dimgray text-[16px]">
            Bij myFunus zijn we altijd op zoek naar partnerships die onze doelgroep verrijken en
            verder helpen. Neem contact met ons op zodat we samen kunnen kijken hoe we daar
            een mooie propositie voor kunnen opzetten. 
            </p>
            <SamwekenForm/>
          </div>

          <div className="w-full">
            <ContactAside />
          </div>
        </div>
      </section>









    </>
  );
}










