import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PageHero from "@/components/widgets/PageHero";
import React from "react";

export default function LocationsPage() {
  return (
    <>
      <Breadcrumbs
        title="Locations"
        breadcrumbs={[
          {
            title: "About Us",
            link: "/about-us",
          },
        ]}
      />
      <PageHero
        title="Our Locations"
        description="With a global presence spanning multiple countries, our offices are strategically located to serve clients around the world. Whether you're in Africa, Europe, or beyond, our team is ready to provide seamless support and innovative solutions tailored to your region's unique needs. Collaboration knows no borders, and neither do we."
        img="/img/locations.jpg"
      />
    </>
  );
}
