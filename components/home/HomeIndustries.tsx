import React from "react";
import FlipCard from "../widgets/FlipCard";

const industries = [
  {
    title: "E-commerce",
    link: "/industries/e-commerce-website-development",
    icon: "/icons/shopping-cart.png",
    description:
      "E-commerce website development, automations and software solutions",
  },
  {
    title: "Finance",
    link: "/industries/fintech-app-development",
    icon: "/icons/bars.png",
    description:
      "E-commerce website development, automations and software solutions",
  },
  {
    title: "Tech",
    link: "/industries/tech-website-development",
    icon: "/icons/cloud.png",
    description:
      "E-commerce website development, automations and software solutions",
  },
  {
    title: "SaaS",
    link: "/industries/saas-app-development",
    icon: "/icons/software.png",
    description:
      "E-commerce website development, automations and software solutions",
  },
  {
    title: "Government",
    link: "/industries/government-agency-website-development",
    icon: "/icons/government.png",
    description:
      "E-commerce website development, automations and software solutions",
  },
  {
    title: "Construction",
    link: "/industries/construction-website-development",
    icon: "/icons/building.png",
    description:
      "E-commerce website development, automations and software solutions",
  },
  {
    title: "Healthcare",
    link: "/industries/healthcare-website-development",
    icon: "/icons/heart.png",
    description:
      "E-commerce website development, automations and software solutions",
  },
  {
    title: "Hospitality",
    link: "/industries/hotel-website-development",
    icon: "/icons/resort.png",
    description:
      "E-commerce website development, automations and software solutions",
  },
  {
    title: "Automotive",
    link: "/industries/transport-and-automotive",
    icon: "/icons/transportation.png",
    description:
      "E-commerce website development, automations and software solutions",
  },
];

export default function HomeIndustries() {
  return (
    <section className="w-full py-24">
      <div className="container w-full">
        <h2 className="text-4xl font-bold mb-8">
          <span className="block text-primary mb-3">
            Innovation without boundaries
          </span>
          <span className="block">Software Solutions for every industry</span>
        </h2>

        <div className="w-full grid gap-4 md:grid-cols-5">
          {industries.map((i) => (
            <FlipCard
              key={i.title}
              icon={i.icon}
              title={i.title}
              link={i.link}
              description={`${i.title} website development, automations and software solutions`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
