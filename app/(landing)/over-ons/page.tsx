import React from "react";
import Hero from "@/components/layout/Hero";

const About = () => {
  return (
    <>
      <Hero />
      <section className="container max-w-6xl w-full flex justify-end">
        <div className="bg-white shadow-lg p-10 md:p-16 md:w-2/3 -mt-20">
          <h1 className="text-2xl md:text-4xl font-bold text-secondary mb-6">
            De kracht van MyFunus
          </h1>

          <article className="prose prose-base">
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
        </div>
      </section>

      <section className="container max-w-6xl mt-20 w-full">
        {/* Columns Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="p-6 border-l-4 border-secondary">
            <h2 className="font-bold text-gray-700 text-2xl mb-4">Missie</h2>
            <p className="text-gray-600">
              De missie van Funus is om consumenten te helpen in de zoektocht
              naar de uitvaartverzorger die bij hun past op basis van
              persoonlijke voorkeuren. Dit komt ook terug in de slogan van
              Funus: “Vind de uitvaartverzorger die bij u past”.
            </p>
          </div>

          {/* Column 2 */}
          <div className="p-6 border-l-4 border-secondary">
            <h2 className="font-bold text-gray-700 text-2xl mb-4">Visie</h2>
            <p className="text-gray-600">
              Funus wil ervoor zorgen dat consumenten (mogelijke opdrachtgevers)
              op basis van zo volledig mogelijke informatie een keuze kunnen
              maken voor een uitvaartverzorger. Het doel is het creëren van een
              optimale match tussen beiden zodat er een perfecte uitvaart
              geregeld wordt in de ogen van de klant.
            </p>
          </div>

          {/* Column 3 */}
          <div className="p-6 border-l-4 border-secondary">
            <h2 className="font-bold text-gray-700 text-2xl mb-4">
              Persoonlijke betrokkenheid
            </h2>
            <p className="text-gray-600">
              Het persoonlijke aspect speelt een steeds grotere rol bij het
              regelen van een uitvaart. Consumenten willen een uitvaartverzorger
              kiezen die bij hun past. Vanuit onze werkervaring in de
              uitvaartbranche merken wij dit ook. We weten hierdoor wat er
              speelt in deze markt en spelen daar met Funus op in.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-28 text-white mt-16">
        <div className="container max-w-4xl w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Waarom de naam myFunus?
          </h2>
          <p className="text-white/90">
            De naam myFunus komt uit het Latijns en betekent
            &apos;begrafenis&apos; or &apos;uitvaart&apos;. Funus helpt
            consumenten in de zoektocht naar de uitvaartverzorger die bij hun
            past.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;