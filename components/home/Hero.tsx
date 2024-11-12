import { robotoCondensed } from "@/lib/fonts";
import React from "react";
import HeroBg from "./HeroBg";

export default function Hero({
  title = "Bespoke software development solutions for your business growth",
  secondaryCopy = "Tap global expertise to take unlock business growth with out bespoke software services",
}: {
  title?: string;
  secondaryCopy?: string;
}) {
  return (
    <section className="w-full h-[calc(100%-100px)] relative">
      {/* <img src={img} alt={imgAltText} className="h-full w-full object-cover" /> */}
      <HeroBg />
      <div className="absolute inset-0 bg-blue-500/20 flex items-center">
        <div className="container w-full">
          <h1 className="font-bold font-sans md:leading-[1.2] mb-6 max-w-3xl text-4xl md:text-6xl text-white">
            {title}
          </h1>
          <p className="mb-6 text-white max-w-[400px]">{secondaryCopy}</p>
          <button
            className={`inline-block font-condensed rounded px-6 py-4 bg-primary text-white uppercase text-xl ${robotoCondensed.className}`}
          >
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
}
