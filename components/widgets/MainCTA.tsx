"use client"
import React, { useEffect, useState, useRef } from "react";

export default function MainCTA({
  title = "Start a project",
  subTitle = "We've helped some of the world-class entrepreneurs & tech companies increase efficiency & reduce development costs.",
}: {
  title?: string;
  subTitle?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the animation is triggered
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-16 lg:py-24 bg-gradient-to-r from-indigo-900 via-black to-blue-900 w-full m-0 "
    >
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
          <div
            className={`${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            } transition-opacity duration-500`}
          >
            <span className="block leading-[1] text-5xl font-bold text-white -mb-4">
              “
            </span>
            <blockquote>
              <p className="mt-6 text-xl leading-relaxed text-white">
                Working with DM Hub has been a game-changer for our marketing
                website at Brand New Day. Their expertise in maintenance and
                development has helped us streamline our digital tools, ensuring
                everything runs smoothly and efficiently.
              </p>
            </blockquote>
            <p className="mt-6 text-base font-semibold text-white">Dajo Rodrigo</p>
            <p className="mt-1 text-base text-gray-300">BrandNewDay</p>
          </div>

          <div
            className={`${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            } transition-opacity duration-500`}
          >
            <div className="overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 lg:px-12 lg:py-10">
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-4 text-base text-gray-300">{subTitle}</p>

                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center w-full px-4 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 bg-primary border-2 border-primary rounded-md hover:bg-transparent"
                  role="button"
                >
                  Book a call
                </a>

                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center w-full px-4 py-4 mt-4 text-base font-semibold text-white transition-all duration-200 bg-transparent border-2 border-white rounded-md hover:bg-white hover:text-black focus:bg-white focus:text-black"
                  role="button"
                >
                  Let&apos;s chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}