"use client";

import Link from "next/link";
import React from "react";
import { LinkItem } from "../layout/Header";
import { usePathname } from "next/navigation";
import { includes } from "lodash";

export default function DropdownLink({
  links,
  title,
  link,
}: {
  links: LinkItem[];
  title: string;
  link: string;
}) {
  const pathName = usePathname();

  return (
    <div className="group">
      <Link
        href={link}
        className={`uppercase text-base h-[100px] flex items-center px-3 group-hover:text-primary ${
          includes(pathName, link) ? "text-primary" : ""
        }`}
      >
        {title}
      </Link>
      <div className="hidden gradient-bw group-hover:grid grid-cols-[2fr_1fr] gap-6 absolute border-t top-[100px] left-0 w-screen bg-white min-h-[60%] z-50 p-4">
        <div>
          <h3 className="uppercase text-gray-500 text-sm mb-6">{title}</h3>
          <ul className="grid grid-cols-2">
            {links.map((i) => (
              <li
                key={i.title}
                className={`block py-4 px-6 border-l hover:text-primary hover:border-primary ${
                  pathName === i.link ? "text-primary border-primary" : ""
                }`}
              >
                <Link href={i.link}>{i.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6">
          <div
            className="rounded-xl w-full h-full bg-cover"
            style={{ backgroundImage: "url(/img/dm-hero-bg.jpg)" }}
          >
            <div className="w-full h-full bg-black/30 rounded-xl text-white flex items-end">
              <div className="p-4">
                <h4 className="font-bold text-base mb-2">Book a call</h4>
                <p className="mb-4 text-white/80 text-sm">
                  Find out how we can unlock your business growth with out
                  bespoke software development services
                </p>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center w-full px-4 py-4 mt-4 text-base font-semibold text-white transition-all duration-200 bg-transparent border-2 border-white rounded-md hover:bg-black focus:bg-black hover:text-white focus:text-white"
                  role="button"
                >
                  Let&apos;s chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
