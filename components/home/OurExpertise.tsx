"use client";

import React, { useState } from "react";
import {
  backendStacks,
  cloudStacks,
  cmsStacks,
  commerceStacks,
  frontendStacks,
  TeckStackItem,
} from "./constants";

const options = ["Frontend", "Backend", "CMS", "E-Commerce", "Cloud"];

export default function OurExpertise() {
  const [activeTab, setActiveTab] = useState("Frontend");
  return (
    <section className="w-full py-16">
      <h2
        className="text-4xl font-bold text-center mb-12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Our Expertise
      </h2>

      <div className="container max-w-5xl mx-auto flex flex-wrap justify-between mb-12">
        {options.map((i, index) => (
          <button
            onClick={() => setActiveTab(i)}
            key={i}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className={`p-2 px-6 mt-4 font-semibold md:text-xl border-b-2  ${
              activeTab === i
                ? "text-primary border-primary"
                : "text-gray-600 border-transparent"
            }`}
          >
            {i}
          </button>
        ))}
      </div>

      <div className="mb-12 max-w-5xl mx-auto container">
        {activeTab === "Frontend" && <TechStackList stacks={frontendStacks} />}
        {activeTab === "Backend" && <TechStackList stacks={backendStacks} />}
        {activeTab === "CMS" && <TechStackList stacks={cmsStacks} />}
        {activeTab === "E-Commerce" && (
          <TechStackList stacks={commerceStacks} />
        )}
        {activeTab === "Cloud" && <TechStackList stacks={cloudStacks} />}
      </div>
    </section>
  );
}

const TechStackList = ({ stacks }: { stacks: TeckStackItem[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {stacks.map((i, index) => (
        <img
          data-aos="fade-up"
          data-aos-delay={index * 100}
          data-aos-duration="500"
          key={i.title}
          src={i.img}
          alt={i.title}
        />
      ))}
    </div>
  );
};
