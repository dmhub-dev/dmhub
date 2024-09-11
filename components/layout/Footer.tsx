import Link from "next/link";
import React from "react";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "Over ons", href: "/over-ons" },
  { title: "meld je aan", href: "/meld-je-aan" },
  { title: "Contact", href: "/contact" },
  { title: "voorwaarden", href: "/voorwaarden" },
];

const plaasten = [
  { title: "apeldoorn", href: "/apeldoorn" },
  { title: "amersfoort", href: "/amersfoort" },
  { title: "rotterdam", href: "/rotterdam" },
  { title: "zwolle", href: "/zwolle" },
  { title: "epe", href: "/epe" },
];

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] w-full py-[80px]">
      <div className="container w-full flex justify-between flex-wrap sm:flex-nowrap">
        <div className="mb-10 md:mb-0">
          <img
            src="/myfunus-logo.png"
            alt="myfunus logo"
            className="h-8 w-auto mb-2"
          />
          <p className="font-bold text-secondary text-sm mb-6">
            vind de uitvaartverzorger die bij u past
          </p>

          <h4 className="font-bold text-sm mb-1.5">myFunus</h4>
          <p className="text-sm mb-1.5">Molenstraat-centerum 481</p>
          <p className="text-sm mb-1.5">info@myFunus.nl</p>
        </div>

        <div className="flex gap-4 md:gap-6 justify-center mb-10 md:mb-0">
          <div>
            <h3 className="font-bold uppercase text-base mb-[6px]">Funus</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm mb-[6px] inline-block hover:text-blue-500"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase text-base mb-[6px]">plaatsen</h3>
            <ul>
              {plaasten.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm mb-[6px] inline-block hover:text-blue-500"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
        <p className="md:text-center text-sm">
          <Link href="/privacy" className="hover:text-secondary">
            Algemene voorwaarden
          </Link>
          <span className="mx-[6px]">|</span>
          <Link href="/privacy" className="hover:text-secondary">
            Privacy
          </Link>
          <span className="mx-[6px]">|</span>
          <Link href="/cookies-policy" className="hover:text-secondary">
            Cookies
          </Link>
        </p>
      </div>

      <div className="container mt-[30px]">
        <p className="md:text-center text-sm">
          Copyright © {new Date().getFullYear()} myFunus, alle rechten
          voorbehouden.
        </p>
      </div>
    </footer>
  );
}
