import ServiceHero from "@/components/services/ServiceHero";
import MainCTA from "@/components/widgets/MainCTA";
import { getAllServices, getServiceBySlug } from "@/lib/wordpress/services";
import React from "react";

export const generateStaticParams = async () => {
  const services = await getAllServices();

  return services.map((post: any) => ({
    slug: post.slug,
  }));
};

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getServiceBySlug(slug);

  return (
    <>
      <hr />
      <ServiceHero
        title={data.title}
        img={data.hero_image}
        description={data.about_service}
      />
      <MainCTA />
    </>
  );
}
