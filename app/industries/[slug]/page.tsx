import HomeIndustries from "@/components/home/HomeIndustries";
import IndustryHeader from "@/components/industries/IndustryHeader";
import React from "react";

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug.replaceAll("-", " ");
  return (
    <>
      <hr className="w-full" />
      <IndustryHeader title={title} icon="/icons/cloud.png" />
      <HomeIndustries />
    </>
  );
}
