import MainCTA from "@/components/widgets/MainCTA";
import { getAllServices } from "@/lib/wordpress/services";
import React from "react";

export default async function ServicesListPage() {
  const services = await getAllServices();

  return (
    <>
      <hr />

      <div className="container max-w-5xl py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-600 max-w-2xl">
          With an intimate understanding of your industry and business-specific
          needs, we work together to deliver a co-designed solution that solves
          real problems
        </p>
      </div>
      <div className="container max-w-5xl mb-16">
        {services.map((i: any) => (
          <div
            key={i.id}
            className="border rounded flex mb-6 items-center gap-6"
          >
            {/* <img src={i.featured_image} alt="" className="size-16 rounded-full object-cover" /> */}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-4">{i.title}</h3>
              <article
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: i.excerpt }}
              ></article>
            </div>
          </div>
        ))}
      </div>
      <MainCTA />
    </>
  );
}
