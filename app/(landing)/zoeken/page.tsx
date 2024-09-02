import FuneralDirectorsList from "@/components/search/FuneralDirectorsList";
import FuneralDirectorsPagination from "@/components/search/FuneralDirectorsPagination";
import SearchFilters from "@/components/search/SearchFilters";
import SearchHeader from "@/components/search/SearchHeader";
import { getPaginatedDirectors } from "@/lib/strapi";
import { get } from "lodash";
import React, { Suspense } from "react";

export default async function SearchPage() {
  const res = await getPaginatedDirectors(21, 1);

  const directorsCount = get(res, "meta.pagination.total");
  const directors = get(res, "data");

  return (
    <Suspense>
      <SearchHeader resultsCount={directorsCount} />
      <section className="w-full container max-w-7xl grid md:grid-cols-[240px_1fr] gap-8 mt-4 mb-16">
        <SearchFilters />
        <section className="w-full">
          <FuneralDirectorsList directors={directors} />

          <FuneralDirectorsPagination pageSize={21} total={directorsCount} />
        </section>
      </section>
    </Suspense>
  );
}
