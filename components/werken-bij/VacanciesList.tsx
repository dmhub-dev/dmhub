import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type VacancyItem = {
  title: string;
  vacancyType: string;
  location: string;
  id: string;
};

export default function VacanciesList({
  vacancies = [],
}: {
  vacancies: VacancyItem[];
}) {
  return (
    <section id="vacancies-list" className="w-ful py-8 bg-secondary/30">
      <h2 className="font-bold text-3xl text-center mb-6">
        Bekijk onze vacatures
      </h2>
      <div className="container w-full max-w-3xl">
        {vacancies.map((i) => (
          <Link
            href={`/vacatures/${i.id}`}
            key={i.id}
            className="p-4 bg-white/20 hover:bg-white/40 border-b border-gray-500 grid md:grid-cols-[1fr_30px] items-center"
          >
            <div>
              <h3 className="font-bold text-xl text-darktext mb-2">
                {i.title}
              </h3>
              <div className="flex items-center gap-3 text-lg">
                <span className="text-gray-600 text-base">{i.vacancyType}</span>
                <span className="block size-2 bg-gray-600 rounded-full"></span>
                <span className="text-gray-600 text-base">{i.location}</span>
              </div>
            </div>
            <ChevronRight />
          </Link>
        ))}
      </div>
    </section>
  );
}
