import { getFeaturedDirectors } from "@/lib/strapi";
import React from "react";
import get from "lodash/get";
import FuneralDirectorCard from "../search/FuneralDirectorCard";

export default async function FuneralDirectorsSpotlight() {
  const res = await getFeaturedDirectors(4);

  const directorsCount = get(res, "meta.pagination.total");
  const directors = get(res, "data");

  return (
    <>
      <section className="w-full my-16">
        <div className="container max-w-xl text-center">
          <h2 className="font-bold text-4xl mb-4">
            {directorsCount} uitvaart verzorgers
          </h2>
          <p className="text-darktext">
            {directorsCount} uitvaartverzorgers zijn aangesloten bij myFunus
          </p>
        </div>
      </section>
      <div className="bg-cover w-full h-[280px] md:h-[240px] bg-[url(/img/hero-bg.jpg)]">
        <div className="container py-20">
          <h2 className="text-4xl font-bold text-center">
            Deze week in de spotlight
          </h2>
        </div>
      </div>
      <section className="container max-w-7xl grid md:grid-cols-4 gap-6  mb-16 -my-16">
        {directors.map((director: any) => (
          <FuneralDirectorCard
            key={director.id}
            director={director.attributes}
          />
        ))}
      </section>
    </>
  );
}
