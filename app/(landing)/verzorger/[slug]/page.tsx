/* eslint-disable @next/next/no-img-element */
"use client";

import { getVerzorger } from "@/lib/strapi";
import React, { useState, useEffect, useRef } from "react";
import ContactModal from "@/components/funeral-details/ContactModal";
import { Left } from "@/components/funeral-details/Left";
import { FixedRight } from "@/components/funeral-details/FixedRight";

const dummyData = {
  name: "Erik Sepp",
  company: "Sepp Uitvaartzorg",
  rating: 9.4,
  priceRange: "€ 1.200 - 1.800",
  expertise: ["begrafenis", "begrafenis", "begrafenis"],
  contact: {
    address: "De Cloese 118, 7339CR Ugchelen",
    phone: "+31 123 456 789",
    website: "https://sepp-uitvaartzorg.nl",
  },
  experience: {
    totalYears: 21,
    selfEmployedYears: 6,
  },
  certifications: ["Uitvaart in bedrijf"],
  media: [
    { id: 1, url: "https://via.placeholder.com/150", alt: "media1" },
    { id: 2, url: "https://via.placeholder.com/150", alt: "media2" },
    { id: 3, url: "https://via.placeholder.com/150", alt: "media3" },
  ],
  features: [
    "Persoonlijke begeleiding bij afscheid nemen",
    "Wij zijn betrokken, betrouwbaar en bekwaam",
    "Wij bieden service en hebben oog voor detail",
    "U heeft bij ons 1 aanspreekpunt",
    "Wij bieden een passende en persoonlijke uitvaart, voor iedere geloofsovertuiging",
  ],
};

export default function FuneralDirectorDetails({
  params,
}: {
  params: { slug: string };
}) {
  const [verzorger, setVerzorger] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("Over ons");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalLayout, setModalLayout] = useState("default");

  const overOnsRef = useRef<HTMLDivElement>(null);
  const ervaringRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const keurmerkenRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  // Function to open modal and set a specific layout
  const openModalWithLayout = (layoutType: string) => {
    setModalLayout(layoutType);
    setIsModalOpen(true);
  };

  // Fetch the verzorger data
  useEffect(() => {
    async function fetchVerzorger() {
      const data = await getVerzorger({ slug: params.slug });
      setVerzorger(data);
    }
    fetchVerzorger();
  }, [params.slug]);

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { section: overOnsRef.current, tab: "Over ons" },
        { section: ervaringRef.current, tab: "Ervaring" },
        { section: mediaRef.current, tab: "Media" },
        { section: keurmerkenRef.current, tab: "Keurmerken" },
        { section: reviewsRef.current, tab: "Reviews" },
      ];

      let foundTab = "Over ons"; // Default to first tab
      for (let i = 0; i < sections.length; i++) {
        const { section, tab } = sections[i];
        if (section && section.getBoundingClientRect().top < 100) {
          foundTab = tab;
        }
      }
      setActiveTab(foundTab);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Open modal function
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (!verzorger) return <div>Loading...</div>;

  return (
    <div className="flex flex-col lg:flex-row">
      <div>
        <img
          src="/img/hero-bg.jpg"
          alt="Verzorger"
          className="w-[100vw] h-[120px] object-cover"
        />
        <div className="flex flex-col lg:flex-row px-10">
          <Left
            verzorger={verzorger}
            dummyData={dummyData}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <FixedRight
            verzorger={verzorger}
            dummyData={dummyData}
            openModalWithLayout={openModalWithLayout}
            openContactModal={openModal}
          />
        </div>
      </div>

      {/* Render the ContactModal */}
      {isModalOpen && (
        <ContactModal closeModal={closeModal} layout={modalLayout} openModalWithLayout={openModalWithLayout}/>
      )}
    </div>
  );
}
