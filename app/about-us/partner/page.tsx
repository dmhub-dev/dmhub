import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PageHero from "@/components/widgets/PageHero";
import React from "react";

export default function PartnerPage() {
  return (
    <>
      <Breadcrumbs
        title="Partner with us"
        breadcrumbs={[
          {
            title: "About Us",
            link: "/about-us",
          },
        ]}
      />
      <PageHero
        title="Partner with Us"
        description="Join forces with us and unlock new opportunities for growth. We partner with development agencies, businesses, sales professionals, and software developers to provide top-tier software development expertise that complements and enhances your services. Together, we can deliver exceptional solutions, expand your capabilities, and achieve greater success."
        img="/img/hand-shake-meeting.jpg"
      />
    </>
  );
}
