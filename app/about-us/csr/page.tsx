import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PageHero from "@/components/widgets/PageHero";
import React from "react";

export default function CSRPage() {
  return (
    <>
      <Breadcrumbs
        title="Our Mission"
        breadcrumbs={[
          {
            title: "About Us",
            link: "/about-us",
          },
        ]}
      />
      <PageHero
        title="Social Responsibility"
        description="Our mission goes beyond business; it's about empowering the next generation. Through our social responsibility initiatives, we create meaningful employment opportunities for talented young individuals who lack the training or access to thrive professionally. By bridging this gap, we're nurturing potential, building careers, and transforming lives."
        img="/img/young-developers-at-work-in-office.jpg"
      />
    </>
  );
}
