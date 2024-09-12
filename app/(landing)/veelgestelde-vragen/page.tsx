import Hero from "@/components/layout/Hero";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Welke uitvaartverzorger staan er op myFunus?",
    answer:
      "Álle uitvaartverzorgers van Nederland staan op Funus, tenzij de uitvaartverzorgers niet online zichtbaar zijn of hebben aangegevenliever niet op Funus zichtbaar te zijn.",
  },
  {
    question: "Hoe kan ik een uit vaartverzorger vinden?",
    answer:
      'Vul op de homepagina uw plaatsnaam of postcode in en druk op "zoek uw uitvaartverzorger". Nu worden alle uitvaartverzorgers getoond die werkzaam zijn in de opgegeven plaatsnaam of postcode. U kunt de uitvaartverzorgers rangschikken op basis van kwaliteit, prijs of afstand. Ook kunt u filters toepassen op onder andere geslacht, specialismes en competenties. Klik op een uitvaartverzorger en kom er op de persoonlijke profielpagina achter of dit de uitvaartverzorger is die bij u past.',
  },
  {
    question: "Hoe worden uitvaartverzorgers gerangschikt?",
    answer:
      "De uitvaartverzorgers worden gerangschikt op basis van kwaliteit (het gemiddelde beoordelingscijfer), prijs en afstand.",
  },
  {
    question:
      "Heb ik contact met myFunus of heb ik direct contact met de uitvaartverzorger?",
    answer:
      "U treed altijd direct in contact met de uitvaartverzorger. In geval van een overlijden is het belang dat er gemakkelijk en snel de juiste uitvaartverzorger gevonden wordt",
  },
  {
    question: "Wat kost get om myFunus te gebruiken?",
    answer: "myFunus kan geheel gratis gebruikt worden.",
  },
];

export default function FAQs() {
  return (
    <>
      <Hero />
      <section className="container max-w-[1280px] w-full flex justify-end mb-8">
        <div className="bg-white shadow-lg px-4 py-6 md:px-[60px] md:w-full max-w-[920px] -mt-20">
          <h1 className="text-2xl md:text-4xl font-bold text-secondary mb-2">
            Vragen & Antwoorden
          </h1>
          <p className="text-gray-600 mb-8">Wij willen u graag helpen.</p>

          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
