import React from "react";
import Hero from "@/components/layout/Hero";
import Link from "next/link";

interface InfoPageProps {
  title: string;
  description: string;
  body: string;
}

const InfoPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <Hero backgroundImg="/img/zonshorizontal-1024x323.jpg" />
      <section className="container max-w-5xl w-full">
        <div className="bg-white shadow-lg p-10 md:p-16 w-full -mt-20 mb-16">
          <h1 className="text-2xl md:text-4xl font-bold text-secondary mb-6 md:mb-8">
            De kracht van MyFunus
          </h1>

          <article className="prose prose-base text-black max-w-none pl-4 md:pl-6 border-l-2 border-l-primary">
            <p>
              Een slecht geregelde uitvaart of een onvolledig afscheid: een
              nachtmerrie voor iedere nabestaande. Een uitvaart vindt maar één
              keer plaats en maakt een belangrijk deel uit van het rouwproces
              van de nabestaanden, het is dus van immens belang dat een uitvaart
              perfect geregeld wordt.
            </p>

            <p>
              De nummer één reden voor een slechte uitvaart is de mismatch
              tussen nabestaanden en de uitvaartverzorger. Om deze reden heeft
              Funus zich tot doel gesteld om opdrachtgevers in staat te stellen
              om de uitvaartverzorger te vinden die bij hun past zodat
              uitvaarten met een nare bijsmaak voor de nabestaanden tot het
              verleden gaan behoren.
            </p>

            <p>
              Door vooraf uitvaartverzorgers te vergelijken op basis van
              verschillende onderdelen en gemakkelijk en snel contact te leggen
              met de gekozen uitvaartverzorger wordt de kans vergroot dat
              nabestaanden en de uitvaartverzorger een klik hebben en samen voor
              een perfecte uitvaart kunnen zorgen. Door middel van het bieden
              van een optimale service aan zowel opdrachtgevers als
              uitvaartverzorgers wil Funus haar missie nastreven: opdrachtgevers
              vinden de uitvaartverzorger die bij hun past.taanden tot het
              verleden gaan behoren.
            </p>
          </article>
          <article className="prose prose-base text-black max-w-none pl-4 pt-10 md:pl-6 border-l-2 border-l-primary">
            <p className="mb-0">Lees ook de voldegen Onderwerpen</p>
            <ul className="list-none p-0 mt-0">
              {[
                {
                  title: "Informatie over uitvaarten",
                  href: "/info/over-uitvaarten",
                },
                {
                  title: "Een komend overlijden",
                  href: "/info/komend-overlijden",
                },
                {
                  title: "Wat doet een uitvaartverzorger",
                  href: "/info/wat-doet-een-uitvartverzorger",
                },
                {
                  title: "Een uitvaart regelen",
                  href: "/info/een-uitvaart-regelen",
                },
                {
                  title: "Rouw en rouwverwerking",
                  href: "/info/rouw-en-rouwverwerkerking",
                },
              ].map((link) => (
                <li key={link.title} className="p-0">
                  <Link
                    href={link.href}
                    className="text-blue-600 hover:text-primary-dark"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default InfoPage;
