"use client";

import React, { useState } from "react";

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
    </section>
  );
}
