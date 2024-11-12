import React from "react";

export default function Testimonials() {
  return (
    <section className="py-10 bg-white sm:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            Trusted by <span className="text-blue-600">30+</span> world class
            companies, founders & development teams
          </h2>
        </div>

        <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
          <TestimonialCard
            name="Dajo Rodrigo"
            jobTitle="Brand New Day, Netherlands"
            quote="Working with DM Hub has been a game-changer for our marketing website at Brand New Day. Their expertise in maintenance and development has helped us streamline our digital tools, ensuring everything runs smoothly and efficiently."
          />
          <TestimonialCard
            name="Robert Fox"
            jobTitle="Founder at Reply Cart Inc"
            quote="Choosing DM Hub to handle our web platform at ReplyCart was one of the best decisions we made. Their technical know-how and dedication to detail have greatly improved our website's performance, helping us deliver a better experience for our clients."
          />
          <TestimonialCard
            name="Jeff Watson"
            jobTitle="Senior Developer at Gozee Content"
            quote="We were understaffed on developers for a critical project, and they stepped in seamlessly, bringing both technical expertise and efficiency to the table."
          />
        </div>
      </div>
    </section>
  );
}

const QuoteIcon = () => (
  <svg
    className="w-14 h-14 text-primary mx-auto"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
  </svg>
);

const TestimonialCard = ({
  quote,
  name,
  jobTitle,
}: {
  quote: string;
  name: string;
  jobTitle: string;
}) => (
  <div className="overflow-hidden bg-white rounded-md shadow hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
    <div className="px-6 py-12">
      <QuoteIcon />
      <blockquote className="mt-7">
        <p className="text-lg text-black">“{quote}”</p>
      </blockquote>
      <p className="text-base font-semibold tex-tblack mt-9">{name}</p>
      <p className="mt-1 text-base text-gray-600">{jobTitle}</p>
    </div>
  </div>
);
