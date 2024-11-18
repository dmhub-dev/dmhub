"use client";

import Link from "next/link";
import React, { useState } from "react";
import DropdownLink from "../widgets/DropdownLink";
import { companyLinks, industryLinks, servicesLinks } from "./constants";
import { ChevronDown } from "lucide-react";
import CustomLink from "./CustomLink";
import MenuIcon from "../widgets/MenuIcon";

export type LinkItem = {
  title: string;
  link: string;
};

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="w-full bg-white h-[100px] flex items-center">
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
            <button className="px-4 flex items-center rounded bg-primary text-white uppercase">
              <span className="block py-2.5 border-r border-white/30 pr-4 mr-3">
                Start a Project
              </span>
              <ChevronDown />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
