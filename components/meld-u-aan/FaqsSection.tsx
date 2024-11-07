import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Markdown from "react-markdown";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Sta ik als uitvaartverzorger standaard op myFunus?",
    answer:
      "Ja, als uitvaartverzorger sta je standaard op myFunus als je ingeschreven bent bij de Kamer van Koophandel. Je profiel is zichtbaar voor gebruikers die op zoek zijn naar uitvaartverzorgers in jouw regio.",
  },
  {
    question: "Hoe kan ik mijn pakket aanpassen?",
    answer:
      "Je kunt je pakket aanpassen door in te loggen op je myFunus-account en naar de instellingen of het dashboard te navigeren. Daar vind je opties om je diensten en pakketten te beheren en aan te passen aan jouw voorkeuren.",
  },
  {
    question: "Welke verplichtingen heb ik?",
    answer:
      "Als uitvaartverzorger ben je verplicht om te voldoen aan de wettelijke eisen en richtlijnen in Nederland. Daarnaast dien je ervoor te zorgen dat jouw profiel op myFunus up-to-date is en dat je op een professionele manier communiceert met potentiële klanten.",
  },
  {
    question: "Hoe kan ik zien welke aanvragen ik heb ontvangen?",
    answer:
      "Je kunt je ontvangen aanvragen bekijken door in te loggen op je myFunus-account. Ga naar het gedeelte 'Aanvragen' of 'Dashboard' om een overzicht te krijgen van alle aanvragen die je hebt ontvangen.",
  },
];


export default function FaqsSection() {
  const faqsData = faqs

  return (
    <>
      <section className=" w-full flex justify-center align-center flex-col mb-8">
          <div className="text-center bg-secondary bg-opacity-30 py-8">
            <h1 className="text-2xl font-bold text-dark text-center mb-2">
              Heeft u nog vragen? <br/>Wij helpen u graag verder
            </h1>
          </div>
          <div className=" py-6  justify-center flex align-middle ">
            <Accordion type="single" collapsible className="w-2/3">
              {faqsData.map(
                (faq: { question: string; answer: string }, index: number) => (
                  <AccordionItem value={`item-${index}`} key={faq.question}>
                    <AccordionTrigger className="mb-6" >{faq.question}</AccordionTrigger>
                    <AccordionContent className="prose prose-sm max-w-none ">
                      <Markdown>{faq.answer}</Markdown>
                    </AccordionContent>
                  </AccordionItem>
                )
              )}
            </Accordion>
        </div>
      </section>
    </>
  );
}

