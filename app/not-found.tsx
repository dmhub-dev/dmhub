import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const consumentenLinks = [
  { title: "Over ons", href: "/over-ons" },
  { title: "Veelgestelde vragen", href: "/veelgestelde-vragen" },
  { title: "Contact", href: "/contact" },
];

const informationLinks = [
  { title: "Informatie over uitvaarten", href: "/info/over-uitvaarten" },
  { title: "Een komend overlijden", href: "/info/komend-overlijden" },
  {
    title: "Wat doet een uitvaartverzorger",
    href: "/info/wat-doet-een-uitvartverzorger",
  },
  { title: "Een uitvaart regelen", href: "/info/een-uitvaart-regelen" },
  {
    title: "Rouw en rouwverwerking",
    href: "/info/rouw-en-rouwverwerkerking",
  },
];

const uitvaartverzorgerLinks = [
  { title: "Meld u aan", href: "/meld-u-aan" },
  {
    title: "Veelgestelde vragen",
    href: "/veelgestelde-vragen?ql=uitvartverzorger",
  },
  { title: "Contact", href: "/contact?userType=uitvaartverzorger" },
];

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="w-full min-h-[500px] flex items-center">
        <div className="container py-16">
          <span className="text-secondary font-bold block mb-8 text-4xl md:text-5xl">
            Oeps!
          </span>
          <h1 className=" text-4xl text-darktext mb-6">
            We hebben ons best gedaan, maar het lijkt erop dat deze pagina niet
            meer bestaat.
          </h1>
          <div className="w-full flex gap-6 justify-center mb-16">
            <Button className="bg-secondary hover:bg-secondary text-xl p-5 border-2 border-secondary">
              Ga terug
            </Button>
            <Link href="/">
              <Button className="bg-transparent hover:bg-transparent box-border border-2 border-secondary text-secondary text-xl p-5">
                Home
              </Button>
            </Link>
          </div>
          <h3 className="text-2xl text-darktext mb-5">
            Misschien bent u op zoek naar een van de volgende onderwerpen:
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h4 className="font-bold mb- text-darktext">Meer informatie</h4>
              <ul>
                {informationLinks.map((i) => (
                  <li key={i.title} className="block">
                    <Link className="text-secondary " href={i.href}>
                      {i.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-1 text-darktext">Consumenten</h4>
              <ul>
                {consumentenLinks.map((i) => (
                  <li key={i.title} className="block">
                    <Link className="text-secondary " href={i.href}>
                      {i.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-1 text-darktext">
                Vitvaartverzorgers
              </h4>
              <ul>
                {uitvaartverzorgerLinks.map((i) => (
                  <li key={i.title} className="block">
                    <Link className="text-secondary " href={i.href}>
                      {i.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
