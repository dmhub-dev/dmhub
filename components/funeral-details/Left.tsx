/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from "react";
import Carousel from "./Carousel";
import { PiCircleHalfFill, PiFlowArrowBold } from "react-icons/pi";
import { RiGraduationCapLine } from "react-icons/ri";
import { CiShare2 } from "react-icons/ci";
import OtherEmployees from "./OtherEmployees";

interface Verzorger {
  name?: string;
  company?: string;
  priceRange?: string;
  expertise?: string[];
  experience?: {
    totalYears?: number;
    selfEmployedYears?: number;
  };
  certifications?: string[];
  media?: { id: string; url: string; alt: string }[];
}

interface DummyData {
  name: string;
  company: string;
  priceRange: string;
  expertise: string[];
  experience: {
    totalYears: number;
    selfEmployedYears: number;
  };
  certifications: string[];
  media: { id: number; url: string; alt: string }[];
  features: string[]
}

interface LeftContentProps {
  verzorger: Verzorger;
  dummyData: DummyData;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const imageArray = [
  { src: '/img/contact.jpg', alt: 'Carousel Image 1' },
  { src: '/img/hero-bg.jpg', alt: 'Carousel Image 2' },
  { src: '/img/contact.jpg', alt: 'Carousel Image 3' },
  { src: '/img/hero-bg.jpg', alt: 'Carousel Image 2' },
  { src: '/img/hero-bg.jpg', alt: 'Carousel Image 1' },
  { src: '/img/contact.jpg', alt: 'Carousel Image 2' },
  { src: '/img/hero-bg.jpg', alt: 'Carousel Image 3' },
  { src: '/img/contact.jpg', alt: 'Carousel Image 4' },
]; 

export const Left: React.FC<LeftContentProps> = ({
  verzorger,
  dummyData,
  activeTab,
  setActiveTab,
}) => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const overOnsRef = useRef<HTMLDivElement>(null);
  const ervaringRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const keurmerkenRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const tabs: string[] = ["Over ons", "Ervaring", "Media", "Keurmerken", "Reviews"];
  const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
    "Over ons": overOnsRef,
    "Ervaring": ervaringRef,
    "Media": mediaRef,
    "Keurmerken": keurmerkenRef,
    "Reviews": reviewsRef,
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderFixed(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -100px 0px", 
      threshold: [0.25, 0.5, 0.75], 
    };
  
    const debounce = (func: Function, delay: number) => {
      let timeoutId: number;
      return (...args: any) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
          func(...args);
        }, delay);
      };
    };
  
    const handleIntersect = debounce((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute("data-section");
          if (sectionName) {
            setActiveTab(sectionName);
          }
        }
      });
    }, 50);
  
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
  
    Object.keys(sectionRefs).forEach((key) => {
      const ref = sectionRefs[key].current;
      if (ref) {
        observer.observe(ref);
      }
    });
  
    return () => {
      observer.disconnect();
    };
  }, [setActiveTab, sectionRefs]);
  

  return (
    <div className="w-full lg:w-2/3">
      {/* Sticky tabs */}
      <div
          className={`${
            isHeaderFixed
              ? "fixed top-[64px] left-0 pl-[2rem] w-full z-20 flex justify-between pr-[1rem]"
              : "sticky top-0 z-10 pl-[2rem] left-0 flex justify-between w-full"
          }`}
        >
          <ul        
          className={`flex mb-4 bg-white w-full ${
        isHeaderFixed ? "border-b" : ""
      }`}>
            {tabs.map((tab) => (
              <li
                key={tab}
                onClick={() => scrollToSection(sectionRefs[tab])}
                className={`cursor-pointer px-4 py-2 relative ${
                  activeTab === tab
                    ? "text-[#2b998a] text-[14px] font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-[#e5534b]"
                    : "text-gray-600  text-[14px] "
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>
          <CiShare2 className="text-xl absolute right-5" />
          </div>

      {/* Profile Information */}
      <div className="flex items-start mb-1 w-3/4 pl-[2rem]">
        <div className="w-1/3">
          {/* Profile image */}
          <img
            src="/img/profile.png"
            alt="Profile"
            className="w-full h-auto  object-cover rounded-full"
          />
        </div>
        <div className="w-2/3 pl-4">
          <h1 className="text-md font-bold mb-1">
            {verzorger.name || dummyData.name}
          </h1>
          <p className="text-md  text-[#2b998a]">
            {verzorger.company || dummyData.company}
          </p>
          <p className="mt-2 text-md font-bold  text-[#2b998a]">
            aannametarief: {verzorger.priceRange || dummyData.priceRange}
          </p>
          <div className=" grid grid-cols-3 w-full gap-2">
            {(verzorger.expertise || dummyData.expertise).map(
              (exp: string, index: number) => (
                <span
                  key={index}
                  className="border border-2 border-[#2b998a] rounded-[10px] p-[2px] text-[12px] text-center"
                >
                  {exp}
                </span>
              )
            )}
          </div>
        </div>
        <div className=" flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full bg-[#2b998a] text-white text-md font-bold">
          9.4
        </div>

      </div>

      {/* Sections */}
      <div ref={overOnsRef} data-section="Over ons" className="mb-4 pl-[2rem]">
        <h2 className="text-[14px] font-bold  text-[#2b998a] mb-2">
          Over {verzorger.company || dummyData.company}
        </h2>
        <p className="w-full pr-20  text-[14px]">
          Een vertrouwd gezicht, een bekende naam. Bij ons staan uw wensen
          centraal. Samen geven wij vorm aan de uitvaart, ongeacht waar u
          verzekerd bent. Kiest u voor {verzorger.company || dummyData.company}? Dan sta ik,{" "}
          {verzorger.name || dummyData.name}, u volledig ter zijde. U kunt
          vertrouwen op mijn begeleiding. <a href="#" className="text-[#2b998a] ml-2 underline">Lees meer</a>
        </p>
        <div className="mt-4">
          <h3 className="text-[16px] font-semibold text-[#2b998a]">Expertise</h3>
          <div className=" mt-2 grid grid-cols-3 w-1/2 gap-2">
            {(verzorger.expertise || dummyData.expertise).map(
              (exp: string, index: number) => (
                <span
                  key={index}
                  className="border border-2 border-[#2b998a] rounded-[10px] p-[2px] text-[12px] text-center"
                >
                  {exp}
                </span>
              )
            )}
          </div>
        </div>
      </div>
      <div className="mb-4 pl-[2rem]">
        <h2 className="text-[#2b998a] text-[16px] font-semibold">Waarom kiezen voor {dummyData.company}?</h2>
        <ul>
          {dummyData.features.map((feature, index) => (
            <li key={index} className="text-[14px]">
              <span className="text-[#2b998a]">✓</span> {feature}
            </li>
          ))}
        </ul>
      </div>


      <div ref={ervaringRef} data-section="Ervaring" className="mb-4 pl-[2rem]">
        <h2 className="text-[16px] font-semibold mb-2 text-[#2b998a]">Ervaring</h2>
        
        <p className="text-[14px] flex">
        <PiCircleHalfFill className="mr-1 text-[22px]" /> Ruim {verzorger.experience?.totalYears || dummyData.experience.totalYears} jaar ervaring in de
          uitvaartbranche.
        </p>
        <p className="text-[14px] flex">
          <PiFlowArrowBold className="mr-1 text-[22px]"/>
          Ruim {verzorger.experience?.selfEmployedYears || dummyData.experience.selfEmployedYears} jaar ervaring als
          zelfstandig uitvaartverzorger.
        </p>
        <div className="mt-4">
          <h3 className="text-[16px] font-semibold text-[#2b998a]">
            Opleidingen & certificaten
          </h3>
          <p className="text-[14px] flex">
            <RiGraduationCapLine  className="mr-1 text-[22px]"/>
            {verzorger.certifications?.[0] || dummyData.certifications[0]}</p>
        </div>
      </div>

      <div ref={mediaRef} data-section="Media" className="mb-4 pl-[2rem]">
        <h2 className="text-[16px] font-semibold mb-2 text-[#2b998a]">Media</h2>
        <div className="relative">
          <Carousel images={imageArray}/>
        </div>

      </div>

      <div ref={keurmerkenRef} data-section="Keurmerken" className="mb-8 pl-[2rem]">
        <h2 className="text-[16px] font-semibold mb-2 text-[#2b998a]">Keurmerken</h2>
        <div className="flex ">
          <img src='/img/log2.png'  className="w-12 h-12 object-cover" />
          <p className="text-[14px] ml-3 pt-3">Keurmerk Persoonlijke Uitvaart</p>
        </div>
        <div className="flex">
          <img src='/img/log1.png'  className="w-14 h-14" />
          <p className="text-[14px] ml-1 pt-3">Keurmerk Uitvaartzorg</p>
        </div>
      </div>

      <div ref={reviewsRef} data-section="Reviews" className="mb-[10rem] pl-8">
        <h2 className="text-[16px] font-semibold mb-2 text-[#2b998a]">Reviews</h2>
        
        <div className="review mb-4">
          <div className="flex">
            <p className="font-bold text-[14px]">Familie Weggemans</p>
            <div className=" ml-8 text-[#2b998a] text-[18px]">★★★★★</div>
          </div>
          <p className="w-3/4 pr-20 text-[14px]">
            Erik Sepp heeft ons in een moeilijke tijd heel goed geholpen. Zijn dienstverlening is nauw betrokken en professioneel. Dankzij hem 
            <a href="#" className="text-[#2b998a] ml-5 underline">Lees meer</a>
          </p>
        </div>
        
        <hr className="border-t border-gray-300 my-4" />

        <div className="review mb-4">
          <div className="flex">
            <p className="font-bold text-[14px]">Niek en Hans van Bezooijen</p>
            <div className='ml-8 text-[#2b998a] text-[18px]'>★★★★★</div>
          </div>
          <p className="w-3/4 pr-20 text-[14px]">
            Erik Sepp had in 2009 de uitvaart van mijn vader verzorgd. Mijn moeder was daar zo over te spreken dat zijn in haar codicil had opgenomen dat 
            <a href="#" className="text-[#2b998a] ml-5 underline">Lees meer</a>
          </p>
        </div>
      </div>
      <div className="flex justify-between">
          <OtherEmployees/>
      </div>

    </div>
  );
};


















