import React from "react";

type WorkBenefitItem = {
  title: string;
  img: string;
  description: string;
};

export default function WorkBenefits({
  benefits,
}: {
  benefits: WorkBenefitItem[];
}) {
  return (
    <section className="container w-full py-16">
      <h2 className="font-bold text-3xl mb-6">Wat kan bij ons je verwachten</h2>
      <div className="grid grid-cols-3 gap-6">
        {benefits.map((i) => (
          <div key={i.title}>
            <img src={i.img} alt={i.title} className="mb-3 h-10 w-auto" />
            <h3 className="font-bold text-lg">{i.title}</h3>
            <p className="text-darktext text-base">{i.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
