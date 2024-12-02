"use client";
import MainCTA from "@/components/widgets/MainCTA";
import { getAllServices } from "@/lib/wordpress/services";
import React, { useState, useEffect } from "react";

export default function ServicesListPage() {
  const [services, setServices] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<number | null>(null);

  useEffect(() => {
    async function fetchServices() {
      const fetchedServices = await getAllServices();
      setServices(fetchedServices);
      if (fetchedServices.length > 0) {
        setActiveTab(fetchedServices[0].id); 
      }
    }
    fetchServices();
  }, []);

  return (
    <div className="container w-full pt-16  px-0 ">
      <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-2xl mb-8 text-center md:text-left mx-auto md:mx-0">
            With an intimate understanding of your industry and business-specific
            needs, we work together to deliver a co-designed solution that solves
            real problems.
          </p>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 w-full md:mb-0 mb-6  shadow-[0px_8px_16px_0px_rgba(0,0,0,0.3)] px-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`w-full text-left px-4 py-3 font-medium rounded-lg mb-2 ${
                activeTab === service.id
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } shadow-sm`}
            >
              {service.title}
            </button>
          ))}

          {services.length === 0 && (
            <div className="text-gray-500 px-4 py-3 rounded-lg bg-gray-100">
              No services available at the moment.
            </div>
          )}
        </div>

        <div className="md:w-3/4 w-full bg-white  rounded-lg p-6">
          {services.map((service) =>
            activeTab === service.id ? (
              <div key={service.id}>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                {service.excerpt ? (
                  <article
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{ __html: service.excerpt }}
                  ></article>
                ) : (
                  <p className="text-gray-500">
                    Placeholder: Content for this service is not yet available.
                  </p>
                )}
              </div>
            ) : null
          )}

          {services.length > 0 && activeTab === null && (
            <p className="text-gray-500">
              Select a service from the left to view its details.
            </p>
          )}
        </div>
      </div>
      <MainCTA />
    </div>
  );
}
