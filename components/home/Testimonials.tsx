import React from "react";
import Quote from "../icons/Quote";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-16 pb-20 max-w-[1200px] container w-full grid gap-14 md:gap-0 md:flex items-center">
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
      className={`px-[30px] pb-3 pt-4 text-center md:w-1/3 relative ${
        standout
          ? "bg-secondary text-white md:-mx-8 md:-mt-20 z-10"
          : "bg-gray-200 text-darktext"
      }`}
    >
      <Quote className="inline-block h-[60px] w-auto" />

      <h4 className="font-bold text-base mb-0 leading-[19px]">{name}</h4>
      <p className="text-graytext leading-[19px]">{description}</p>

      <img
        src={img}
        width={100}
        height={100}
        alt={name}
        className="inline-block -mb-12 size-[60px] rounded-full"
      />
    </div>
  );
};
