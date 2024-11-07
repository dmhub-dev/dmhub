import FuneralDirectorsList from "@/components/search/FuneralDirectorsList";
import FuneralDirectorsPagination from "@/components/search/FuneralDirectorsPagination";
import SearchFilters from "@/components/search/SearchFilters";
import SearchHeader from "@/components/search/SearchHeader";
import { getPaginatedDirectors, getSearchResults } from "@/lib/strapi";
import { get } from "lodash";
import React, { Suspense } from "react";

export default async function SearchPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const city = params.slug[0];
  const postcode = params.slug?.[1];

  const resSearch = await getSearchResults({
    verzorger: "",
    postcode: {
      postcode: postcode,
      city: city,
    },
  });

  const directorsCount = get(resSearch, "count", 0);
  const directors: any[] | undefined = get(resSearch, "verzorgers");

  const filters = get(resSearch, "options");
  console.log(filters);

  return (
    <Suspense>
      <SearchHeader resultsCount={directorsCount} />
      <section className="w-full container max-w-7xl grid md:grid-cols-[240px_1fr] gap-8 mt-4 mb-16">
        <SearchFilters filters={filters} />
        <section className="w-full">
          <FuneralDirectorsList directors={directors} />

          <FuneralDirectorsPagination pageSize={21} total={directorsCount} />
        </section>
      </section>
    </Suspense>
  );
}
