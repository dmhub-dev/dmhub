import Breadcrumbs from "@/components/layout/Breadcrumbs";
import MainCTA from "@/components/widgets/MainCTA";
import PageHero from "@/components/widgets/PageHero";
import React from "react";

export default function AboutUsPage() {
  return (
    <>
      <Breadcrumbs title="About Us" breadcrumbs={[]} />
      <PageHero
        title="About Us"
        description="With a commitment to delivering top-notch solutions and creating a positive impact, we pride ourselves on being a trusted partner for clients worldwide. Our journey is fueled by a dedication to quality, collaboration, and empowering success at every step."
        img="/img/dm-hero-bg.jpg"
      />
      <MainCTA />
    </>
  );
}
