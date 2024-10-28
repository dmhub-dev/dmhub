import React from "react";
import { Button } from "../ui/button";

export default function Hero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="w-full py-14 md:py-20">
      <div className="container w-full grid gap-6 md:gap-12 md:grid-cols-2">
        <div>
          <h1 className="mb-4 font-bold text-3xl mt-4">{title}</h1>
          <div className="text-darktext text-base mb-4">
            {description.split("[n]").map((i, index) => (
              <p className="mb-4" key={index}>
                {i}
              </p>
            ))}
          </div>
          <div className="text-center">
            <Button className="p-6 font-bold">BEKIJK ONZE VACATURES</Button>
          </div>
        </div>
        {/* Images */}
        <div className="grid gap-3">
          <img
            src="/img/werken-bij-image-020.jpg"
            alt=""
            className="w-full object-cover"
          />
          <div className="grid gap-3 grid-cols-[2fr_1.5fr_2fr]">
            <img
              src="/img/werken-bij-image-022.jpg"
              alt=""
              className="w-full h-[160px] object-cover"
            />
            <img
              src="/img/werken-bij-image-026.jpg"
              alt=""
              className="w-full h-[160px] object-cover"
            />
            <img
              src="/img/werken-bij-image-024.jpg"
              alt=""
              className="w-full h-[160px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
