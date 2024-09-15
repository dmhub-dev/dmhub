import { title } from "process";
import React from "react";

const featuresDefault = [
  {
    title: "Overzicht",
    description: "Alle uitvaartverzorgers in Nederland",
    icon: "/icons/features-1.svg",
  },
  {
    title: "Onafhankelijk",
    description: "Vergelijken op basis van competenties",
    icon: "/icons/features-2.svg",
  },
  {
    title: "Laagdrempelig",
    description: "Gemakkelijk, snel en zonder verplichtingen",
    icon: "/icons/features-3.svg",
  },
  {
    title: "Persoonlijk",
    description:
      "Pas criteria toe en vind de uitvaartverzorgers die u het meest aanspreekt",
    icon: "/icons/features-4.svg",
  },
  {
    title: "Gratis",
    description: "Vind zonder kosten de uitvaartverzorger die bij u past",
    icon: "/icons/features-5.svg",
  },
  {
    title: "Direct contact",
    description: "U heeft direct toegang tot de persoonlijke gegevens",
    icon: "/icons/features-6.svg",
  },
];

export default function FeaturesList({ features = featuresDefault }) {
  return (
    <section className="w-full my-20 container max-w-[960px]">
      <h2 className="mb-6 font-bold text-4xl text-center text-darktext">
        De voordelen van myFunus
      </h2>

      <div className="mt-8 w-full grid md:grid-cols-3 gap-[15px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-start text-darktext p-2"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="h-[45px] w-auto"
            />
            <div>
              <h3 className="text-base font-bold text-darktext leading-[19px] mb-[3px]">
                {feature.title}
              </h3>
              <p className="text-base text-darktext leading-[19px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
