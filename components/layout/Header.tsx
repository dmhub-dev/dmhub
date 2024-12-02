"use client";

import Link from "next/link";
import React, { useState, useEffect, ReactNode } from "react";
import DropdownLink from "../widgets/DropdownLink";
import { companyLinks, industryLinks, servicesLinks } from "./constants";
import CustomLink from "./CustomLink";
import MenuIcon from "../widgets/MenuIcon";
import Modal from "./Modal";

export type LinkItem = {
  description: ReactNode;
  title: string;
  link: string;
  image: string;
};

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setIsSticky(currentScrollY > 0);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full h-[100px] flex items-center transition-transform duration-300 ${
        isSticky
          ? "fixed top-0 z-[100] bg-white shadow-md"
          : "bg-white relative z-[100]"
      } ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="container w-full flex justify-between items-center">
        <Link href="/" className="text-2xl uppercase">
          <img src="/dm-logo.png" className="h-32 w-auto text-primary" />
        </Link>
        <button
          onClick={() => setMenuActive(!menuActive)}
          className="block md:hidden"
        >
          <MenuIcon active={menuActive} />
        </button>
        <div className="hidden md:flex items-center gap-2">
          <DropdownLink
            title="Services"
            link="/services"
            links={servicesLinks}
          />
          <DropdownLink
            title="Industries"
            link="/industries"
            links={industryLinks}
          />
          <CustomLink href="/blog" title="Insights" />
          <DropdownLink title="Company" link="/about-us" links={companyLinks} />
          <div>
            <Modal />
          </div>
        </div>
      </div>

      {menuActive && (
        <div className="fixed top-0 right-0 w-full h-screen bg-white z-50 p-6 md:hidden">
          <button
            onClick={() => setMenuActive(false)}
            className="text-2xl self-end"
          >
            ×
          </button>
          <nav className="flex flex-col gap-4 mt-6">
            <DropdownLink
              title="Services"
              link="/services"
              links={servicesLinks}
            />
            <DropdownLink
              title="Industries"
              link="/industries"
              links={industryLinks}
            />
            <CustomLink href="/blog" title="Insights" />
            <DropdownLink
              title="Company"
              link="/about-us"
              links={companyLinks}
            />
          </nav>
        </div>
      )}
    </header>
  );
}
