import React from "react";
import FlipCard from "../widgets/FlipCard";
import { industries } from "./constants";

export default function HomeIndustries() {
  return (
    <section className="w-full py-24">
      <div className="container w-full">
        <h2 className="text-4xl font-bold mb-8">
          <span
            data-aos="fade-up"
            data-aos-duration="500"
            className="block text-primary mb-3"
          >
            Innovation without boundaries
          </span>
          <span
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500"
            className="block"
          >
            Software Solutions for every industry
          </span>
        </h2>

        <div className="w-full grid gap-4 md:grid-cols-5">
          {industries.map((i, index) => (
            <FlipCard
              position={index}
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
