import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function VacaturesIDPage() {
  return (
    <>
      <section className="container max-w-3xl py-16">
        <Link
          href="/vacatures"
          className="flex gap-2 text-darktext items-center text-sm"
        >
          <ArrowLeft className="h-4 w-auto" /> <span>Terug naar vacatures</span>
        </Link>

        <section className="w-full mt-7">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Account Manager Nederland
          </h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-gray-600 text-lg md:text-xl">Fulltime</span>
            <span className="block size-2 bg-gray-600 rounded-full"></span>
            <span className="text-gray-600 text-lg md:text-xl">Deventer</span>
          </div>

          <Button className="text-lg">Solliciteer direct</Button>

          <article className="prose prose-lg text-darktext mt-4">
            <b>
              Ben jij commercieel ingesteld en help jij lokale
              uitvaartverzorgers graag aan nieuwe klanten? Kom werken in een
              gezellig jong team als account manager bij myFunus!
            </b>
            <p>
              Ben je online wel eens op zoek geweest naar het regelen van een
              uitvaart en het zoeken naar een uitvaartverzorger? Misschien niet,
              maar dat kan al snel een serieuze zoektocht worden op het
              internet. Daarom zijn we in 2024 myFunus gestart. MyFunus is een
              online platform voor lokale uitvaartverzorgers, waar bezoekers
              heel gemakkelijk de uitvaartverzorger kunnen vinden en kiezen die
              het beste bij hun past. Denk aan Booking.com of Tripadvisor, maar
              dan voor lokale uitvaartverzorgers.
            </p>
            <p>
              In Nederland biedt myFunus ca 4.000 lokale uitvaartverzorgers een
              podium om goed vindbaar te zijn voor hun potentiële klanten. Jij
              helpt deze uitvaartverzorgers om het meeste uit dit platform te
              halen! Daarnaast bieden we vanuit myFunus nieuwe businessmodellen.
            </p>
          </article>
        </section>
      </section>
    </>
  );
}
