import React from "react";
import Hero from "@/components/layout/Hero";
import SideBar from "@/components/layout/SideBar";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col lg:flex-row justify-between items-start mt-12 mb-[5rem]">
        <div className="border border-gray-300 p-6 min-h-[100px] lg:w-[70%] mx-60 -mt-40 shadow-[0_0_5px_1px_rgb(209,209,209)] bg-white">
          <h1 className="text-[40px] font-bold text-teal-600 font-sans">
            Vraggen of suggesties?
          </h1>

          <p className="mb-2.5 text-dimgray text-[16px]">
            Bij myFunus stellen we alle informatie zorgvuldig samen en
            verbeteren we continu. We krijgen dan ook graag feedback van u als
            consument of als uitvaartverzorger. Wij stellen uw mening enorm op
            prijs!
          </p>

          <ContactForm />
        </div>

        <div className="lg:w-[25%] mt-12 lg:mt-0 lg:ml-4">
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default Contact;
