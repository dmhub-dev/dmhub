import Breadcrumbs from "@/components/layout/Breadcrumbs";
import MainCTA from "@/components/widgets/MainCTA";
import PageHero from "@/components/widgets/PageHero";
import React from "react";
import Modal from "@/components/layout/Modal";
import {skillsData, featuresData, principles , steps} from '@/components/layout/constants'
import FeaturesSection from "@/components/layout/FeaturesSection";
export default function AboutUsPage() {
  return (
    <>
      <Breadcrumbs title="About Us" breadcrumbs={[]} />
      <PageHero
        title="About Us"
        description="At dmhub, we are a global leader in software development and technology solutions. With a passion for innovation and excellence, we empower businesses worldwide to thrive in the digital era through custom-tailored software solutions and dedicated support."
        img="/img/dm-hero-bg.jpg"
      />



    <div className="flex flex-col items-center justify-center text-center bg-white py-16 px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-relaxed">
          A web design company that provides a service that <br /> reflects the quality of our work
        </h1>
        <p className="mt-6 text-base md:text-lg text-gray-700 max-w-2xl">
          <strong>DM HUB</strong> was set up to not only provide high-end websites but to deliver a service of the highest standards. 
          We know how critical your investment is to the success of your business. We make it our core principle to deliver 
          the service you&apos;d expect from a professional web design and development company.
        </p>

        <div className="flex space-x-6 mt-8 text-gray-800">
          <i className="fas fa-phone-alt text-2xl cursor-pointer hover:text-gray-500 transition"></i>
          <i className="fab fa-facebook text-2xl cursor-pointer hover:text-gray-500 transition"></i>
          <i className="fas fa-thumbs-up text-2xl cursor-pointer hover:text-gray-500 transition"></i>
          <i className="fas fa-lock text-2xl cursor-pointer hover:text-gray-500 transition"></i>
        </div>

        <Modal/>
    </div>
    <FeaturesSection features={featuresData} />
    <div className="bg-white py-16 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <div className="text-left mb-12 ">
        <h2 className="text-4xl font-bold text-black mb-4">
          Skills to help your business grow
        </h2>
        <p className="text-gray-600 text-lg">
          We specialise in a variety of key skills. Combining these specialities
          we provide a complete digital service. We bring next-generation
          technology to develop innovative solutions to today&apos;s challenges.
        </p>
      </div>

      <div className="flex justify-start items-center space-x-8 mb-8">
        <span className="text-4xl text-black">JS</span>
        <span className="text-4xl text-black">CSS</span>
        <span className="text-4xl text-black">Xd</span>
        <span className="text-4xl text-black">📊</span>
      </div>

      <Modal/>
    </div>

    <div>
      <FeaturesSection features={skillsData} />
    </div>
    </div>
  </div>
  
    <div className="text-left mb-12 flex flex-col justify-center items-center w-full mx-auto text-center bg-gray-100 p-20 gap-3">
          <h2 className="text-4xl font-bold text-black mb-4">
          Some information you may need about DM Hub
          </h2>
          <p className="text-gray-600 text-lg w-2/3">
          Established in 2023 DM Hub has been providing front-web development, web design and digital marketing services across the UK.
          </p>
          <Modal/>
    </div>
    <div className="text-left mb-12 ">
         <div  className="flex flex-col justify-center items-center w-2/3 mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-4 text-center">
            Our core principles
            </h2>
            <p className="text-gray-600 text-lg text-center ">
            DUDOS Online Ltd was created so we could choose to work with the technology, design and marketing principles we believe in. DUDOS Online is more than just a business. It&apos;s a web design company that let us provide a digital service we are passionate about.
            </p>
          </div>
          <FeaturesSection features={principles}/>

    </div>

    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">
            6 Steps we take to delivering a successful project
          </h1>
          <p className="text-lg mb-8">
            Every project needs a process, and after many years of experience, we have crafted a process that enables us to identify your goals, communicate your message, and deliver on the quality we promise.
          </p>
          <Modal/>
        </div>

      <div>
          <div className="relative pl-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 mb-10 last:mb-0 relative"
              >
                {index < steps.length - 1 && (
                  <div className="absolute left-4 top-8 h-full w-px bg-primary"></div>
                )}

                <div className="w-14 h-8 rounded-full border-2 border-primary text-center flex items-center justify-center font-bold text-sm bg-black">
                  {step.number}
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">{step.title}</h2>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <MainCTA />
    </>
  );
}










