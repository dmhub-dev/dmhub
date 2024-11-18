import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PageHero from "@/components/widgets/PageHero";
import React from "react";

export default function TeamPage() {
  return (
    <>
      <Breadcrumbs
        title="Team"
        breadcrumbs={[
          {
            title: "About Us",
            link: "/about-us",
          },
        ]}
      />
      <PageHero
        title="Our Team"
        description="A dynamic group of seasoned professionals with unmatched expertise and years of experience across diverse industries. Driven by innovation and collaboration, our team is dedicated to delivering exceptional results and turning your vision into reality."
        img="/img/programmers.jpg"
      />
    </>
  );
}
