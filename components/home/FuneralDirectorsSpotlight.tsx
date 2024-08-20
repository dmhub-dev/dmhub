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
      <div className="bg-cover w-full h-[180px] bg-[url(/img/hero-bg.jpg)]"></div>
      <section className="container max-w-6xl grid grid-cols-4 gap-6  mb-16 -my-16">
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
  };
}) => {
  return (
    <div className="bg-white shadow-lg z-10">
      <div className="bg-secondary/20 w-full h-[100px]"></div>
      <img
        src={director?.image?.url}
        alt={director.naam}
        className="w-full h-[200px] object-cover rounded-lg"
      />
      <h3 className="font-bold text-xl mt-4">{director.naam}</h3>
      <p className="text-muted-foreground mt-2">{director.werk}</p>
    </div>
  );
};
