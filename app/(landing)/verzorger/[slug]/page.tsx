import { getVerzorger } from "@/lib/strapi";
import React from "react";

export default async function FuneralDirectorDetails({
  params,
}: {
  params: { slug: string };
}) {
  const verzorger = await getVerzorger({ slug: params.slug });

  console.log(verzorger);

  return <div>FuneralDirectorDetails</div>;
}
