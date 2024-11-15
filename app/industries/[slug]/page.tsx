import HomeIndustries from "@/components/home/HomeIndustries";
import IndustryHeader from "@/components/industries/IndustryHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import MainCTA from "@/components/widgets/MainCTA";
import { getIndustryBySlug } from "@/lib/wordpress/industries";
import React from "react";

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug.replaceAll("-", " ");

  const data = await getIndustryBySlug(slug);

  return (
    <>
      <Breadcrumbs
        title={data.title}
        breadcrumbs={[{ title: "Industries", link: "/industries" }]}
      />
      <IndustryHeader
        title={data.title || title}
        icon={data?.icon}
        description={data?.summary}
      />
      <HomeIndustries />
      <MainCTA />
    </>
  );
}
