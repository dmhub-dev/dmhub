/* eslint-disable @next/next/no-img-element */
import { getVerzorger } from "@/lib/strapi";
import React from "react";
import DetailsPageWrapper from "@/components/funeral-details/DetailsPageWrapper";

export default async function FuneralDirectorDetails({
  params,
}: {
  params: { slug: string };
}) {
  const verzorger = await getVerzorger({ slug: params.slug });

  return <DetailsPageWrapper verzorger={verzorger} />;
}
