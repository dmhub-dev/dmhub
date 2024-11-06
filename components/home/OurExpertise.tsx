"use client";

import React, { useState } from "react";
import { backendStacks, frontendStacks, TeckStackItem } from "./constants";

const options = ["Frontend", "Backend", "CMS", "E-Commerce", "Cloud"];

export default function OurExpertise() {
  const [activeTab, setActiveTab] = useState("Frontend");
  return (
    <section className="w-full py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Our Expertise</h2>

      <div className="container max-w-5xl mx-auto flex flex-wrap justify-between mb-12">
        {options.map((i) => (
          <button
            onClick={() => setActiveTab(i)}
            key={i}
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
      </div>
    </section>
  );
}

const TechStackList = ({ stacks }: { stacks: TeckStackItem[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {stacks.map((i) => (
        <img key={i.title} src={i.img} alt={i.title} />
      ))}
    </div>
  );
};
