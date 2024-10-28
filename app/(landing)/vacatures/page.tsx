import Hero from "@/components/werken-bij/Hero";
import Testimonials from "@/components/werken-bij/Testimonials";
import VacanciesList from "@/components/werken-bij/VacanciesList";
import WorkBenefits from "@/components/werken-bij/WorkBenefits";
import React from "react";

export default function samenwerken() {
  return (
    <>
      <Hero
        title="Kom werken bij myFunus"
        description="Wij streven naar het vinden van de perfecte match tussen
lokale uitvaartverzorgers en consumenten. Een missie die veel
voldoening geeft. MyFunus groeit hard en we zijn voortdurend
op zoek naar nieuw talent.[n]
Wil jij deel uitmaken van deze dynamische start-up waar jouw
ideeën het verschil kunnen maken? Bekijk snel onze
openstaande vacatures."
      />
      <Testimonials
        testimonials={[
          {
            name: "Marcel ter Haar",
            quote:
              "Het succes van myFunus wordt mede bepaald door onze mensen. Ik vind het belangrijk dat onze medewerkers zich 100% thuis voelen binnen dit mooie bedrijf. Daarom investeren wij veel in onze bedrijfscultuur. Je besteedt immers meer tijd met je collega’s dan met je vrienden of familie.",
            job_title: "Oprichter",
            img: "/img/werken-bij-image-048.jpg",
          },
        ]}
      />
      <WorkBenefits
        benefits={[
          {
            title: "Een gedreven team",
            img: "/icons/features-4.svg",
            description:
              "Een talentvol team dat voor elkaar door het vuur gaat en daarnaast veel gezelligheid kent. Wil je ook enthousiast raken? Kom dan snel langs!",
          },
          {
            title: "Een leerzame omgeving",
            img: "/icons/features-1.svg",
            description:
              "Elke dag leren we van elkaar en delen al onze expertise in dagelijkse en wekelijkse sessies. Bovendien vinden we talent belangrijk en investeren we daar veel in.",
          },
          {
            title: "Een missie met veel voldoening",
            img: "/icons/features-2.svg",
            description:
              "Onze missie: bedrijven rondom uitvaarten in contact brengen met potentiële klanten en deze helpen in hun lastige zoektocht bij het vinden van de uitvaartverzorger die bij hun past. Hoe mooi is dat!",
          },
        ]}
      />
      <VacanciesList />
    </>
  );
}
