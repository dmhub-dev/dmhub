import React from "react";
import Hero from "@/components/layout/Hero";
import ContactForm from "@/components/contact/ContactForm";
import ContactAside from "@/components/contact/ContactAside";

const Contact = () => {
  return (
    <>
      <Hero backgroundImg="/img/contact.jpg" />
      <section className="container w-full">
        <div className="w-full grid md:grid-cols-[1fr_320px] gap-6 py-6">
          <div className="w-full -mt-32 bg-white md:p-16 shadow-xl border">
            <h1 className="text-[40px] font-bold text-teal-600 font-sans">
              Vraggen of suggesties?
            </h1>

            <p className="mb-6 text-dimgray text-[16px]">
              Bij myFunus stellen we alle informatie zorgvuldig samen en
              verbeteren we continu. We krijgen dan ook graag feedback van u als
              consument of als uitvaartverzorger. Wij stellen uw mening enorm op
              prijs!
            </p>

            <ContactForm />
          </div>

          <div className="w-full">
            <ContactAside />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
