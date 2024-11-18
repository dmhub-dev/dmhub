import React from "react";

export default function PageHero({
  title,
  description,
  img,
}: {
  title: string;
  description?: string;
  img: string;
}) {
  return (
    <section className="w-full relative h-[400px]">
      <img src={img} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/30 text-white flex items-center">
        <div className="container max-w-4xl py-16 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-white text-lg max-w-3xl">{description}</p>
        </div>
      </div>
    </section>
  );
}
