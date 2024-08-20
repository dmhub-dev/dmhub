import Link from "next/link";
import React from "react";

export default function AboutUs() {
  return (
    <section className="w-full py-16 bg-secondary text-white">
      <div className="container max-w-xl w-full">
        <h2 className="font-bold mb-4 text-3xl md:text-4xl">Over myFunus</h2>
        <article className="space-y-4 mb-4">
          <p>
            Bij het regelen van een uitvaart is één van de eerste stappen het
            vinden van de juiste uitvaartverzorger. Dit is niet altijd even
            gemakkelijk. In geval van een overlijden moet er op korte termijn
            contact worden gelegd met een uitvaartverzorger, maar hoe kiest u nu
            een goede uitvaartverzorger die u ook nog eens aanspreekt?
          </p>
          <p>
            Via myFunus kunt u gemakkelijk en snel uitvaartverzorgers
            vergelijken en heeft u een overzicht van alle uitvaartverzorgers die
            bij u in de buurt werkzaam zijn. Op basis van competenties, prijs en
            kwaliteit vindt u de uitvaartverzorger die bij u past en die u in
            moeilijke tijden helpt bij het organiseren van een perfecte
            uitvaart.
          </p>
        </article>
        <Link
          href="/over-ons"
          className="border-b inline-block pb-1 border-white hover:opacity-90"
        >
          Lees er meer over
        </Link>
      </div>
    </section>
  );
}
