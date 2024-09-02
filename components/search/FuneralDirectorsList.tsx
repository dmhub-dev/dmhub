import React from "react";
import FuneralDirectorCard from "./FuneralDirectorCard";

export default async function FuneralDirectorsList({ directors }: any) {
  return (
    <section className="w-full grid md:grid-cols-3 gap-6">
      {directors.map((director: any) => (
        <FuneralDirectorCard key={director.id} director={director.attributes} />
      ))}
    </section>
  );
}
