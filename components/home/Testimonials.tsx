import React from "react";
import Quote from "../icons/Quote";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-16 pb-20 max-w-6xl container w-full flex items-center">
      <TestimonialCard
        name="Zeer professioneel"
        description="Fijn en betrouwbaar bedrijf. Eerlijke uitvaartverzorger. Prima verzorgd"
        standout={false}
        img="/img/ludovic-migneault-EZ4TYgXPNWk-unsplash.jpg"
      />
      <TestimonialCard
        name="Een aanrader"
        description="Zeer professioneel en betrokken. Een aanrader voor iedereen"
        standout={true}
        img="/img/person.png"
      />
      <TestimonialCard
        name="Betrouwbaar bedrijf"
        description="Zeer betrouwbaar en professioneel bedrijf. Altijd goed verzorgd"
        standout={false}
        img="/img/ali-morshedlou-WMD64tMfc4k-unsplash.jpg"
      />
    </section>
  );
}

const TestimonialCard = ({
  name,
  description,
  standout,
  img,
}: {
  name: string;
  description: string;
  standout: boolean;
  img?: string;
}) => {
  return (
    <div
      className={`p-8 text-center w-1/3 relative ${
        standout ? "bg-secondary text-white -mx-8 -mt-20 z-10" : "bg-gray-200"
      }`}
    >
      <Quote className="inline-block h-16 w-auto" />

      <h4 className="font-bold text-lg mb-1">{name}</h4>
      <p className="text-graytext">{description}</p>

      <img
        src={img}
        width={100}
        height={100}
        alt={name}
        className="inline-block -mb-20 size-16 rounded-full"
      />
    </div>
  );
};