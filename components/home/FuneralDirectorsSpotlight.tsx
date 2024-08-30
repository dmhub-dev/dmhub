import { getFeaturedDirectors } from "@/lib/strapi";
import React from "react";
import get from "lodash/get";

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
          <DirectorCard key={director.id} director={director.attributes} />
        ))}
      </section>
    </>
  );
}

const DirectorCard = ({
  director,
}: {
  director: {
    image: { url: string };
    naam: string;
    bio: string;
    tags: string[];
    address: string;
    distance: number;
    price_range: string;
    werk: string;
    rating: number;
  };
}) => {
  return (
    <div className="bg-white shadow-lg z-10  flex flex-col">
      <div className="bg-secondary/30 w-full h-[100px]"></div>
      <img
        src={director?.image?.url || "/img/person.png"}
        alt={director.naam}
        className="size-[160px] object-cover rounded-full mx-auto -mt-20 border-4 border-white"
      />
      <div className="p-4 flex-grow">
        <div className="w-full flex justify-end">
          <div className="size-10 rounded-full flex items-center justify-center text-white bg-secondary text-sm -mt-16">
            {director.rating || "4.5"}
          </div>
        </div>
        <h3 className="font-bold text-lg">{director.naam}</h3>
        <p className="text-muted-foreground text-sm mt-2">{director.werk}</p>
        <p className="mt-4 text-center text-sm text-secondary">
          <b>Aannametarief:</b> {director.price_range || "€ 1000 - € 2000"}
        </p>
      </div>
      <div className="bg-secondary p-4 text-center">
        <span className="font-bold text-base text-white">
          Zwolle {director.distance || "8"} km
        </span>
      </div>
    </div>
  );
};
