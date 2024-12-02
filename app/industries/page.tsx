"use client";
import MainCTA from "@/components/widgets/MainCTA";
import { getAllIndustries } from "@/lib/wordpress/industries";
import React, { useState, useEffect } from "react";

export default function IndustriesListPage() {
  const title = "Our Industries";
  const [industries, setIndustries] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<number | null>(null);

  useEffect(() => {
    async function fetchIndustries() {
      try {
        const fetchedIndustries = await getAllIndustries();
        console.log(fetchedIndustries);

        const sanitizedIndustries = fetchedIndustries.map((industry: any) => ({
          id: industry?.id || Math.random(),
          title: industry?.title || "Untitled Industry",
          description: industry?.summary || null,
          featuredImage: industry?.featuredImage || null,
        }));

        setIndustries(sanitizedIndustries);

        if (sanitizedIndustries.length > 0) {
          setActiveTab(sanitizedIndustries[0].id);
        }
      } catch (error) {
        console.error("Failed to fetch industries:", error);
        setIndustries([]);
      }
    }

    fetchIndustries();
  }, []);

  return (
    <div className=" w-full pt-16  ">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
          {title}
        </h1>
        <p className="text-gray-600 max-w-2xl mb-8 text-center md:text-left mx-auto md:mx-0">
          We specialize in providing tailored solutions across a wide range of
          industries, helping businesses thrive with innovative strategies and
          expert execution.
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 w-full md:mb-0 mb-6 px-4">
          {industries.length > 0 ? (
            industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`w-full text-left px-4 py-3 font-medium rounded-lg mb-2 ${
                  activeTab === industry.id
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } shadow-sm`}
              >
                {industry.title}
              </button>
            ))
          ) : (
            <div className="text-gray-500 px-4 py-3 rounded-lg bg-gray-100">
              No industries available at the moment.
            </div>
          )}
        </div>

        <div className="md:w-3/4 w-full bg-white shadow-lg rounded-lg ">
          {industries.length > 0 && activeTab !== null ? (
            industries.map((industry) =>
              activeTab === industry.id ? (
                <div key={industry.id}>
                  <h3 className="text-2xl font-bold mb-4">
                    {industry.title || title}
                  </h3>

                  {industry.featuredImage ? (
                    <img
                      src={industry.featuredImage}
                      alt={industry.title || "Industry Image"}
                      className="w-full block object-cover h-[240px] bg-blue-800 mb-4"
                    />
                  ) : (
                    <div className="h-[240px]  mb-4"></div>
                  )}

                  {industry.summary ? (
                    <article
                      className="text-gray-600"
                      dangerouslySetInnerHTML={{ __html: industry.summary }}
                    ></article>
                  ) : (
                    <p className="text-gray-500">
                      No additional information is available for this industry.
                    </p>
                  )}
                </div>
              ) : null
            )
          ) : (
            <p className="text-gray-500">
              Select an industry from the left to view its details.
            </p>
          )}
        </div>
      </div>

      <MainCTA />
    </div>
  );
}
