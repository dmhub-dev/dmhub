import Link from "next/link";
import React from "react";

const quickLinks = [
  { title: "Over myFunus", href: "/over-ons" },
  { title: "Werken bij myFunus", href: "/meld-je-aan" },
  { title: "Contact", href: "/contact" },
  { title: "Voorwaarden", href: "/voorwaarden" },
  { title: "Privacy", href: "/privacy" },
  { title: "Cookies", href: "/privacy" },
];

const plaasten = [
  { title: "apeldoorn", href: "/apeldoorn" },
  { title: "amersfoort", href: "/amersfoort" },
  { title: "rotterdam", href: "/rotterdam" },
  { title: "zwolle", href: "/zwolle" },
  { title: "epe", href: "/epe" },
];

const consumerLinks = [
  { title: "Over ons", href: "/over-ons" },
  { title: "Veelgestelde vragen", href: "/veelgestelde-vragen" },
];

const directorsLinks = [
  { title: "Meld u aan", href: "/meld-u-aan" },
  { title: "Veelgestelde vragen", href: "/veelgestelde-vragen" },
  { title: "Partner voorwaarden", href: "/partner-voorwaarden" },
  { title: "Samenwerken", href: "/samenwerken" },
];

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] w-full py-[80px]">
      <div className="container w-full max-w-7xl flex gap-10 md:gap-6 justify-between flex-wrap sm:flex-nowrap">
        <div className="mb-10 md:mb-0">
          <img
            src="/myfunus-logo.png"
            alt="myfunus logo"
            className="h-8 w-auto mb-2"
          />
          <p className="font-bold text-secondary text-sm mb-6">
            Vind de uitvaartverzorger die bij u past
          </p>
        </div>

        <div>
          <h3 className="font-bold uppercase text-sm mb-4">Over myFunus</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="text-sm mb-4 inline-block hover:text-blue-500"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold uppercase text-sm mb-4">Voor Consumenten</h3>
          <ul>
            {consumerLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="text-sm mb-4 inline-block hover:text-blue-500"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold uppercase text-sm mb-4">
            Voor Uitvaartverzorgers
          </h3>
          <ul>
            {directorsLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="text-sm mb-4 inline-block hover:text-blue-500"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:text-end">
          <h4 className="font-bold text-base mb-[21px]">Wil je ons volgen?</h4>
          <ul className="flex gap-4 md:justify-end mb-[21px]">
            <li>
              <a
                href="http://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/linkedin.svg"
                  alt="linkedin"
                  className="size-8"
                />
              </a>
            </li>
            <li>
              <a
                href="http://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/facebook.svg"
                  alt="facebook"
                  className="size-8"
                />
              </a>
            </li>
            <li>
              <a
                href="http://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/twitter.svg"
                  alt="twitter"
                  className="size-8"
                />
              </a>
            </li>
          </ul>

          <p>
            <span className="text-secondary">Meld je aan</span> voor onze
            nieuwsbrief
          </p>
        </div>
      </div>

      <div className="container mt-[30px]">
        <p className=" text-sm">© {new Date().getFullYear()} myFunus</p>
      </div>
    </footer>
  );
}
