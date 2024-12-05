import Link from "next/link";
import React from "react";
import { VideoIcon } from "../widgets/VideoIcon";

const developmentHoursFeatures = [
  "Front-end & backend development",
  "Development and design work",
  "Business process automation and AI",
  "Internal tools development",
  "Proof of concept project",
  "Dedicated team",
  "Supports multiple projects",
  "QA & Testing",
];

const projectFeatures = [
  "Front-end & backend development",
  "UI/UX Design",
  "Dedicated team",
  "QA & Testing",
  "Project Management",
];

const maintenanceFeatures = [
  "Uptime monitoring",
  "Development and design work",
  "Daily site backup",
  "Daily security check",
  "Search Engine Optimization (SEO)",
  "Page speed optimization",
  "Monthly reports",
];

export default function Packages() {
  return (
    <section className="w-full bg-gray-100 py-16">
      <h2
        data-aos="fade-up"
        data-aos-duration="500"
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Work with us
      </h2>

      <div className="container w-full grid md:grid-cols-3 gap-10">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="500"
          className="bg-white p-8 rounded-md"
        >
          <VideoIcon src="/videos/developer-hours.mp4" />
          <h3 className="font-bold text-3xl mb-5 max-w-[200px]">
            Developer hours
          </h3>
          <p className="mb-5 text-gray-600">
            Grow your business with fixed monthly development hours for any
            project that your have.
          </p>
          <Link
            href="/book-a-call?product=Developer+Hours"
            title=""
            className="flex items-center justify-center w-full px-4 py-4 mb-5 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border-2 border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
            role="button"
          >
            Book a call
          </Link>
          <ul>
            {developmentHoursFeatures.map((i) => (
              <li
                key={i}
                className="text-base underline-offset-4 mb-4 text-black/80 underline decoration-dashed"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
          className="bg-white p-8 rounded-md"
        >
          <VideoIcon src="/videos/maintenance.mp4" />
          <h3 className="font-bold text-3xl mb-5">Website Maintenance</h3>
          <p className="mb-5 text-gray-600">
            Get upto 80 hours of monthly maintenance work to turn your website
            into an invaluable business asset.
          </p>
          <Link
            href="/book-a-call?product=Maintenance"
            title=""
            className="flex items-center justify-center w-full px-4 py-4 mb-5 text-base font-semibold transition-all duration-200 border-2 border-black rounded-md hover:bg-black focus:bg-black hover:text-white"
            role="button"
          >
            Book a call
          </Link>
          <ul>
            {maintenanceFeatures.map((i) => (
              <li
                key={i}
                className="text-base underline-offset-4 mb-4 text-black/80 underline decoration-dashed"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
          className="bg-white p-8 rounded-md"
        >
          <VideoIcon src="/videos/project.mp4" />
          <h3 className="font-bold text-3xl mb-5 max-w-[200px]">
            Start a Project
          </h3>
          <p className="mb-5 text-gray-600">
            We design and develop tailored web applications, mobile apps and
            websites to meet your specific needs.
          </p>
          <Link
            href="/book-a-call?product=Project"
            title=""
            className="flex items-center justify-center w-full px-4 py-4 mb-5 text-base font-semibold transition-all duration-200 border-2 border-black rounded-md hover:bg-black focus:bg-black hover:text-white"
            role="button"
          >
            Book a call
          </Link>
          <ul>
            {projectFeatures.map((i) => (
              <li
                key={i}
                className="text-base underline-offset-4 mb-4 text-black/80 underline decoration-dashed"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
