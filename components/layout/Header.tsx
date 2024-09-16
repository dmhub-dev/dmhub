import Link from "next/link";
import React from "react";
import DropDownMenu from "./DropDownMenu";
import CountrySelector from "./CountrySelector";

const consumentenLinks = [
  {
    title: "Over ons",
    subLinks: [
      { title: "Over ons", href: "/over-ons" },
      { title: "Veelgestelde vragen", href: "/veelgestelde-vragen" },
      { title: "Zoek uw uitvaartverzorger", href: "/zoeken" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Informatie over uitvaarten",
    subLinks: [
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
    ],
  },
];

const uitvaartverzorgerLinks = [
  {
    title: "Meer informatie",
    subLinks: [
      { title: "Meld u aan als uitvaartverzorger", href: "/meld-u-aan" },
      {
        title: "Veelgestelde vragen",
        href: "/veelgestelde-vragen?ql=uitvartverzorger",
      },
      { title: "Contact", href: "/contact?userType=uitvartverzorger" },
    ],
  },
  {
    title: "Mijn account",
    subLinks: [{ title: "Login", href: "/login" }],
  },
];

const productenLinks = [
  {
    title: "Condoleancekaarten versturen",
    subLinks: [
      { title: "Kaarten versturen", href: "/" },
      { title: "Vragen en Antwoorden", href: "/veelgestelde-vragen" },
      { title: "Zoek uw uitvaartverzorger", href: "/zoeken" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "In Memoriam",
    subLinks: [],
  },
  {
    title: "Digitale sterrenhemel",
    subLinks: [],
  },
];

export default function Header() {
  return (
    <>
      <nav className="bg-white w-full h-16 flex items-center border-b border-b-black sticky top-0 left-0 z-[100]">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <img
              src="/myfunus-logo.png"
              alt="myfunus logo"
              className="h-[35px] w-auto"
            />
          </Link>

          {/* Menus */}
          <div className="hidden md:flex items-center gap-4">
            <DropDownMenu title="Voor Consumenten">
              <div className="container flex gap-16 py-4">
                {consumentenLinks.map((linkGroup) => (
                  <div key={linkGroup.title}>
                    <h3 className="font-bold text-gray-600 mb-[9px] text-base leading-[19px]">
                      {linkGroup.title}
                    </h3>
                    <ul>
                      {linkGroup.subLinks.map((subLink) => (
                        <li className="mb-0" key={subLink.title}>
                          <Link
                            href={subLink.href}
                            className="text-sm text-black hover:text-primary"
                          >
                            {subLink.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </DropDownMenu>

            <DropDownMenu title="Voor Uitvaartverzorgers">
              <div className="container flex gap-16 py-4">
                {uitvaartverzorgerLinks.map((linkGroup) => (
                  <div key={linkGroup.title}>
                    <h3 className="font-bold text-gray-600 mb-[9px] text-base leading-[19px]">
                      {linkGroup.title}
                    </h3>
                    <ul>
                      {linkGroup.subLinks.map((subLink) => (
                        <li className="mb-0" key={subLink.title}>
                          <Link
                            href={subLink.href}
                            className="text-sm text-black hover:text-primary"
                          >
                            {subLink.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </DropDownMenu>

            <DropDownMenu title="Producten">
              <div className="container flex gap-16 py-4">
                {productenLinks.map((linkGroup) => (
                  <div key={linkGroup.title}>
                    <h3 className="font-bold text-gray-600 mb-[9px] text-base leading-[19px]">
                      {linkGroup.title}
                    </h3>
                    <ul>
                      {linkGroup.subLinks.map((subLink) => (
                        <li className="mb-0" key={subLink.title}>
                          <Link
                            href={subLink.href}
                            className="text-sm text-black hover:text-primary"
                          >
                            {subLink.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </DropDownMenu>

            <CountrySelector />
          </div>
        </div>
      </nav>
    </>
  );
}
