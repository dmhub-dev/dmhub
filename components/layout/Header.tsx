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
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Informatie over uitvaarten",
    subLinks: [
      { title: "Informatie over uitvaarten", href: "/over-ons" },
      { title: "Een komend overlijden", href: "/over-ons" },
      { title: "Wat doet een uitvaartverzorger", href: "/over-ons" },
      { title: "Een uitvaart regelen", href: "/over-ons" },
      { title: "Rouw en rouwverwerking", href: "/over-ons" },
    ],
  },
];

const uitvaartverzorgerLinks = [
  {
    title: "Meer informatie",
    subLinks: [
      { title: "Meld u aan als uitvaartverzorger", href: "/over-ons" },
      { title: "Veelgestelde vragen", href: "/over-ons" },
      { title: "Contact", href: "/over-ons" },
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
      { title: "Vragen en Antwoorden", href: "/" },
      { title: "Contact", href: "/" },
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
      <nav className="bg-white w-full h-16 flex items-center border-b sticky top-0 left-0 z-[100]">
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
            <DropDownMenu title="Consumenten">
              <div className="container flex gap-16 py-6">
                {consumentenLinks.map((linkGroup) => (
                  <div key={linkGroup.title}>
                    <h3 className="font-bold text-gray-600 mb-3 text-sm">
                      {linkGroup.title}
                    </h3>
                    <ul>
                      {linkGroup.subLinks.map((subLink) => (
                        <li className="mb-2" key={subLink.title}>
                          <Link
                            href={subLink.href}
                            className="text-sm text-secondary hover:text-primary"
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

            <DropDownMenu title="Uitvaartverzorgers">
              <div className="container flex gap-16 py-6">
                {uitvaartverzorgerLinks.map((linkGroup) => (
                  <div key={linkGroup.title}>
                    <h3 className="font-bold text-gray-600 mb-3 text-sm">
                      {linkGroup.title}
                    </h3>
                    <ul>
                      {linkGroup.subLinks.map((subLink) => (
                        <li className="mb-2" key={subLink.title}>
                          <Link
                            href={subLink.href}
                            className="text-sm text-secondary hover:text-primary"
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
              <div className="container flex gap-16 py-6">
                {productenLinks.map((linkGroup) => (
                  <div key={linkGroup.title}>
                    <h3 className="font-bold text-gray-600 mb-3 text-sm">
                      {linkGroup.title}
                    </h3>
                    <ul>
                      {linkGroup.subLinks.map((subLink) => (
                        <li className="mb-2" key={subLink.title}>
                          <Link
                            href={subLink.href}
                            className="text-sm text-secondary hover:text-primary"
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
