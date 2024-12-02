import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PageHero from "@/components/widgets/PageHero";
import React from "react";
const principles = [
  {
    title: "Pride in our work",
    description:
      "At DUDOS, we take pride in what we do, driven by passion and dedication. This commitment ensures our signature quality.",
  },
  {
    title: "Building long-term relationships",
    description:
      "We value the growth of our clients and prioritize long-term relationships that benefit both their business and ours.",
  },
  {
    title: "Embracing innovation",
    description:
      "At DUDOS, we focus on true innovation that delivers value, steering clear of fleeting trends to achieve impactful results.",
  },
  {
    title: "Client satisfaction",
    description:
      "Client satisfaction is about more than delivering great services; it’s about being a reliable partner for your business’s success.",
  },
  {
    title: "Delivering the best",
    description:
      "We are committed to excellence. At DUDOS, delivering the best is not just a goal—it’s a commitment each team member upholds.",
  },
  {
    title: "Solutions",
    description:
      "Using creativity, technical expertise, and experience, DUDOS delivers innovative solutions that drive meaningful results for our clients.",
  },
];

const points = [
  'Contribute to open-source projects.',
  'Mentor aspiring developers.',
  'Engage in tech communities.',
  'Build software for social good.',
];

const initiatives = [
  {
    title: "Innovation Programs",
    description:
      "At dmhub, we continuously invest in innovation to ensure our clients receive cutting-edge software solutions that drive growth and efficiency. Our innovation programs are designed to explore new technologies and deliver impactful results.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2v20m8-10H4" />
      </svg>
    ),
  },
  {
    title: "Social Responsibility",
    description:
      "dmhub is dedicated to giving back to society. We actively support local communities through tech workshops, mentorship programs, and donations, empowering individuals and businesses to embrace technology for a brighter future.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 4.5v15m0-15L8 9m4-4.5L16 9m-8 6v4m4-4v4m4-4v4" />
      </svg>
    ),
  },
  {
    title: "Hackathons & Tech Challenges",
    description:
      "We organize regular hackathons and tech challenges, fostering innovation and teamwork within our company and the wider tech community. These events are a hub of creativity and technological breakthroughs.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M15 9l-6 6m0-6l6 6" />
      </svg>
    ),
  },
  {
    title: "Employee Well-being",
    description:
      "We believe our team is our greatest asset. dmhub prioritizes the health and well-being of our employees through flexible work policies, wellness programs, and opportunities for professional growth.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2l3 7h6l-4.5 5 3 7-6-4.5L6 21l3-7L4.5 9h6L12 2z" />
      </svg>
    ),
  },
];
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

      
      <section className="flex flex-col items-center justify-center text-center py-8 px-4 bg-white">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Who Are We</h1>
        <p className="text-gray-700 max-w-2xl">
          dmhub is a software development company dedicated to building innovative, reliable, and scalable solutions. With a team of experienced professionals across the globe, we collaborate with businesses to deliver top-notch services that address real-world challenges. From startups to enterprises, we help transform visions into reality.
        </p>
      </section>

      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Our Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 p-6 ${
                index % 2 === 1
                  ? "border-blue-300 border-b border-l"
                  : "border-blue-300 border-b border-r"
              }`}
            >
              <div>{initiative.icon}</div>
              <h3 className="text-lg font-semibold text-black">
                {initiative.title}
              </h3>
              <p className="text-sm text-gray-600">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  );

}


type Feature = {
  icon?: string;
  title: string; 
  description: string; 
};

type FeaturesSectionProps = {
  features: Feature[]; 
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
          >
            {feature.icon && (
              <div className="text-4xl mb-4">{feature.icon}</div>
            )}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



