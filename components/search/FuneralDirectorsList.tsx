"use client";

import React from "react";
import FuneralDirectorCard from "./FuneralDirectorCard";

export default async function FuneralDirectorsList({
  directors,
}: {
  directors?: any[];
}) {
  console.log(directors);

  return (
    <section className="w-full grid md:grid-cols-4 gap-6">
      {directors &&
        directors.map((director: any) => (
          <FuneralDirectorCard
            key={director.id}
            director={{
              naam: director.naam,
              werk: director.werk,
              address: director.locatie.city.name,
              bio: "",
              distance: director.afstand,
              image: director.foto,
              price_range: director.tarief
                ? `${director.tarief.min} - ${director.tarief.max}`
                : "",
              rating: 4.5,
              tags: director.specialismen,
            }}
          />
        ))}
    </section>
  );
}
