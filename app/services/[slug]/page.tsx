import HomeIndustries from "@/components/home/HomeIndustries";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
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
      <Breadcrumbs
        title={data.title}
        breadcrumbs={[{ title: "Services", link: "/services" }]}
      />
      <ServiceHero title={data.title} img={data.hero_image} />
      <section className="w-full bg-gray-100 py-24">
        <div className="container text-center max-w-4xl">
          <article
            className="mb-4 text-gray-600 text-lg leading-[1.6]"
            dangerouslySetInnerHTML={{ __html: data.about_service || "" }}
          />
        </div>
      </section>
      <HomeIndustries />
      <MainCTA />
    </>
  );
}
