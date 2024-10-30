import React from "react";
import Benefits from "@/components/meld-u-aan/Benefits";
import SearchCompanies from "@/components/sign-up/SearchCompanies";
import TestimonialCarousel from "@/components/meld-u-aan/TestimonialCarousel";
import { Button } from "@/components/ui/button";
import FaqsSection from "@/components/meld-u-aan/FaqsSection";

export default function SignUpPage() {

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
      title: "Zichtbaarheid",
      description: "Verhoog uw (online) zichtbaarheid! Via myFunus bent u nog prominenter aanwezig via diverse media (radio, TV, online, social, etc.)",
      icon: "/icons/features-1.svg",
    },
    {
      title: "Besparingen",
      description: "Bespaar tijd en geld aan online marketing. Vanuit myFunus kunnen we via onze partners scherper en gezamenlijk inkopen waardoor u daar als uitvaartverzorger direct van profiteert.",
      icon: "/icons/features-5.svg",
    },
    {
      title: "Extra uitvaarten",
      description: "Word beter gevonden en verhoog zodoende uw kans op het verzorgen van meer uitvaarten.",
      icon: "/icons/features-6.svg",
    },
    {
      title: "Inzicht",
      description: "Krijg via ons dashboard direct inzicht in uw prestaties, onderneem actie op aanvragen van consumenten of plan eenvoudig extra promoties in.",
      icon: "/icons/features-4.svg",
    },
    {
      title: "Flexibiliteit",
      description: "myFunus is in eerste instantie gratis voor u als uitvaartverzorger. Wilt u extra opvallen en meer zichtbaarheid genieten, dan kunt u dat eenvoudig aangeven via ons dashboard.",
      icon: "/icons/features-2.svg",
    },
    {
      title: "Nieuwe businessmodellen",
      description: "myFunus biedt u als uitvaartverzorger nieuwe businessmodellen en daarmee extra inkomstenbronnen. Deze kunt u eenvoudig zelf aanzetten en promoten.",
      icon: "/icons/features-3.svg",
    },
  ];
  return (
    <>
      <section className="w-full container">
        <div className="w-full py-10">
          <h1 className="text-3xl font-bold mb-4">
              Kom als uitvaartverzorger direct in contact met uw doelgroep
          </h1>

          <div className="grid md:grid-cols-[1fr_1fr] gap-6">
            <div>
              <p className="text-gray-600 ">
                Nederland telt jaarlijks ongeveer 170.000 overlijdens.
                Consumenten moeten daarbij vaak in korte een lastige keuze
                maken tussen verschillende uitvaartverzorgers in hun regio. Dat is
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
                  nadrukkelijker presenteren aan consumenten die op zoek zijn
                  naar de ideale uitvaartverzorger.
              </p>
            </div>
            <div>
              <img src="/img/dashboard.jpg" alt="" />
            </div>
          </div>

          <SearchCompanies />
        </div>
      </section>
       {/* Testimonial slider here */}
       <section className="w-full">
       <TestimonialCarousel testimonials={testimonials} />
      </section>


      <Benefits benefits={featuresDefault} title="Welke voordelen bieden wij vanuit myFunus"/>

      <section className="bg-gray-100 w-full p-14 m-0">
        <h1 className="text-3xl font-bold text-dark mb-4">
          Nieuwe businessmodellen voor u als uitvaartverzorger
        </h1>
        <p>
          myFunus biedt u als uitvaartverzorger nieuwe inkomstenbronnen, die u eenvoudig kunt promoten vanaf uw eigen dashboard.
          Denk daarbij aan producten en diensten zoals het versturen van gratis condoleance kaarten, een abonnementen opzegdienst, digitaal
          condoleance register, uitvaartwensen vastleggen, etc. Vanuit myFunus ontvangt u voor elke gebruiker daarvan een extra vergoeding,
          deze inkomstenstromen betalen wij u periodiek uit.
        </p>
        <div className="flex justify-center gap-40 mt-8 w-full">
          <div className="grid grid-cols-3 gap-20">
            <img src="/img/1.png" alt="Image 1" className="w-32 h-32 object-cover" />
            <img src="/img/2.png" alt="Image 2" className="w-32 h-32 object-cover" />
            <img src="/img/3.png" alt="Image 3" className="w-32 h-32 object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-20">
            <img src="/img/4.png" alt="Image 4" className="w-32 h-32 object-cover" />
            <img src="/img/5.png" alt="Image 5" className="w-32 h-32 object-cover" />
            <img src="/img/6.png" alt="Image 6" className="w-32 h-32 object-cover" />
          </div>
        </div>
      </section>



      <section className=" w-full p-14 m-0">
        <h1 className="text-3xl font-bold text-dark text mb-4">
        Van gratis tot Pro, kies het pakket dat bij u past
        </h1>
        <p>
          Binnen myFunus wordt u als uitvaartverzorger standaard gratis opgenomen en getoond. Om consumenten over de streep te trekken
          en ze de ideale uitvaartverzorger te laten kiezen die het beste bij ze past, is een persoonlijke pagina daarbij natuurlijk onmisbaar. Dit
          is nog steeds gratis, alleen rekenen we een kleine vergoeding per contactaanvraag. Zo loopt u geen risico en ontvangt u waardevolle
          contactaanvragen die leiden tot nieuwe klanten. <br />
          Voor iedere uitvaartverzorger bieden we een interessant pakket. Of u nu net begint of uw uitvaartonderneming wilt opschalen, onze op
          maat gemaakte pakketten zorgen ervoor dat u altijd de juiste tools hebt om te slagen
        </p>
        <Button className="h-12 w-1/6 mb-20 mt-4 uppercase font-semibold">
           Bekijk onze pakketten
        </Button>
        
      </section>

      <FaqsSection />
      {/* <BusinessModels /> */}
      <section className="bg-gray-100 py-12 text-center text-dark h-[350px]">
        <h3 className="text-3xl text-black font-bold mb-8">
        Staat uw vraag er niet bij
        </h3>
        <p>Neem dan contact met ons op, wij helpen u dan graag verder.
        </p>
        <div className="flex justify-around gap-4 max-w-5xl mx-auto mt-8 mb-6">
          <Button className="h-10 text-white font-semibold">
          Veelgestelde vragen
          </Button>
          <Button className="h-10 text-white font-semibold">
          Neem contact op
          </Button>
        </div>
        <h3 className="text-2xl text-black font-bold mt-4 mb-4">
          Onze pakketten – voor iedere uitvaartverzorger is er een oplossing
        </h3>
      </section>


      <section className="p-12 text-left">
        <p className="mt-4 mb-4">
          Voor iedere uitvaartverzorger bieden we een interessant pakket. Of u nu net begint of uw uitvaartonderneming wilt opschalen, onze op maat gemaakte
          pakketten zorgen ervoor dat u de juiste tools hebt om te slagen.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 space-y-4 md:space-y-0">
          
          {/* Starter Package */}
          <div className="bg-teal-600 bg-opacity-40 p-6 rounded-md shadow-md w-full md:w-1/3 text-center">
            <div className="flex text-center w-full mb-6">
                <img
                    src='icons/features-2.svg'
                    alt='Badge'
                    className="h-[40px] w-auto"
                  />
                <h3 className="text-2xl font-bold text-center ml-14">STARTER</h3>
            </div>
            
            <p className="text-lg mb-4 text-left">De basis voor elke uitvaartverzorger</p>
            <ul className="space-y-2">
              <li className="flex items-left">
                <span className="text-teal-600 mr-2">✔️</span> Vermelding van uw bedrijfsgegevens
              </li>
              <li className="flex items-left">
                <span className="text-teal-600 mr-2">✔️</span> Persoonlijk profiel
              </li>
              <li className="flex items-left">
                <span className="text-teal-600 mr-2">✔️</span> Ontvangen van contactaanvragen
              </li>
            </ul>
            <button className="bg-red-500 text-white px-4 py-2 rounded-full mt-20 mb-4 block mx-auto">Start gratis</button>
            <ul className="space-y-2 text-sm text-gray-800">
              <li className="flex items-left text-left">
                <span className="text-teal-600 mr-2 text-left">✔️</span> Als uitvaartverzorger worden uw bedrijfsgegevens standaard en gratis getoond.
              </li>
              <li className="flex items-left text-left">
                <span className="text-teal-600text-left mr-2">✔️</span> Met een persoonlijk profiel kunt u consumenten die gericht op zoek zijn naar een uitvaartverzorger nóg beter bedienen. Dit is nog steeds gratis, alleen betaalt u per contact aanvraag een geringe vergoeding.
              </li>
            </ul>
          </div>

          {/* Advanced Package */}
          <div className="bg-red-500 bg-opacity-40 p-6 rounded-md shadow-md w-full md:w-1/3 text-center">
            <div className="flex text-center w-full mb-6">
                <img
                    src='icons/features-2.svg'
                    alt='Badge'
                    className="h-[40px] w-auto"
                  />
                  <img
                    src='icons/features-2.svg'
                    alt='Badge'
                    className="h-[40px] w-auto"
                  />
                <h3 className="text-2xl font-bold text-center ml-14">ADVANCED</h3>
            </div>
            <p className="text-lg mb-4 text-left">De perfecte tussenoplossing</p>
            <ul className="space-y-2">
              <li className="flex items-center text-left">
                <span className="text-red-600 mr-2">✔️</span> Alles inbegrepen in het Starter-pakket
              </li>
              <li className="flex items-center text-left">
                <span className="text-red-600 mr-2">✔️</span> Folder/brochure download
              </li>
              <li className="flex items-center text-left">
                <span className="text-red-600 mr-2">✔️</span> Extra promotiemogelijkheden
              </li>
            </ul>
            <button className="bg-red-500 text-white px-4 py-2 rounded-full mb-4 mt-20 block mx-auto">Start gratis</button>
            <ul className="space-y-2 text-sm text-gray-800">
              <li className="flex items-start text-left">
                <span className="text-red-600 mr-2">✔️</span> U ontvangt standaard een aantal contact aanvragen. Boven dat aantal betaalt u een extra vergoeding per aanvraag.
              </li>
            </ul>
          </div>

          {/* Pro Package */}
          <div className="bg-blue-800 bg-opacity-30 p-6 rounded-md shadow-md w-full md:w-1/3 text-center">
            <div className="flex text-center w-full mb-6">
                  <img
                      src='icons/features-2.svg'
                      alt='Badge'
                      className="h-[40px] w-auto"
                    />
                    <img
                    src='icons/features-2.svg'
                    alt='Badge'
                    className="h-[40px] w-auto"
                  />
                  <h3 className="text-2xl font-bold text-center ml-14">PRO</h3>
              </div>
            <p className="text-lg mb-4 text-left">Onbegrensde mogelijkheden</p>
            <ul className="space-y-2">
              <li className="flex items-center text-left">
                <span className="text-blue-600 mr-2">✔️</span> Alles inbegrepen in het Advanced-pakket
              </li>
              <li className="flex items-center text-left">
                <span className="text-blue-600 mr-2">✔️</span> Eigen website bezoek
              </li>
              <li className="flex items-center text-left">
                <span className="text-blue-600 mr-2">✔️</span> Onbeperkte contactaanvragen
              </li>
              <li className="flex items-center text-left">
                <span className="text-blue-600 mr-2">✔️</span> Extra inkomsten genereren met onze tools
              </li>
            </ul>

            <button className="bg-red-500 text-white px-4 py-2 rounded-full mb-4 block mx-auto">Start gratis</button>
            <ul className="space-y-2 text-sm text-gray-800">
              <li className="flex items-start text-left">
                <span className="text-blue-600 mr-2">✔️</span> Extra inkomsten genereren met onze tools.
              </li>
              <li className="flex items-start text-left">
                <span className="text-blue-600 mr-2">✔️</span> Wilt u geen omkijken hebben naar het aantal contactaanvragen dan zit u hier goed. Dit pakket biedt onbegrensde mogelijkheden met een onbeperkt aantal contactaanvragen.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pl-14">
        <h1 className="text-3xl font-bold text-dark text mb-20">
         Dit is waarom uitvaartverzorgers voor ons kiezen
        </h1>
      
        <div className="text-center flex px-40 w-full justify-between items-center space-x-6">
          <div className="flex flex-col items-start w-3/4">
            <p className="text-xl font-medium text-gray-800 italic mb-6 text-left">
              &ldquo;MyFunus biedt mij als uitvaartverzorger een prachtig platform om direct in contact te komen met mijn doelgroep. Bovendien genereer ik via aanvullende producten extra inkomsten, naast de bestaande uitvaarten die ik doe. Een waardevol platform voor mij!&rdquo;
            </p>
            <h3 className="text-gray-900">Erik Sepp</h3>
            <p className="text-sm font-bold ">Uitvaartondernemer</p>
          </div>
          <div className="w-1/4 flex justify-center">
            <img
              src="/img/profile.png"
              alt="Erik Sepp's picture"
              className="w-40 h-40 object-cover rounded-full border-1 border-gray-100 shadow-md shadow-dark"
            />
          </div>
        </div>
      </section>

    </>
  );
}
