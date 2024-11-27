"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { LinkItem } from "../layout/Header";
import { usePathname } from "next/navigation";

export default function DropdownLink({
  links,
  title,
  link,
}: {
  links: LinkItem[];
  title: string;
  link: string;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<LinkItem | null>(null);
  const pathName = usePathname();
  
  useEffect(() => {
    if (pathName.startsWith(link)) {
      setIsDropdownOpen(false);
    }
  }, [pathName, link]);

  const toggleDropdown = (isOpen: boolean) => {
    setIsDropdownOpen(isOpen);
  };

  const handleLinkHover = (link: LinkItem | null) => {
    setHoveredLink(link);
    if (link) {
      console.log(link.image, "hovered image"); 
    }
  };

  return (
    <div
      className="relative group z-[100]"
      onMouseLeave={() => toggleDropdown(false)}
    >
      <Link
        href={link}
        onMouseEnter={() => toggleDropdown(true)}
        className={`uppercase text-base h-[100px] flex items-center px-3 group-hover:text-primary ${
          pathName.includes(link) ? "text-primary" : ""
        }`}
      >
        {title}
      </Link>
      {isDropdownOpen && (
        <div className="grid grid-cols-[2fr_1fr] gap-4 absolute border-[4px] border-b-[4px] border-b-black top-[110%] left-0 w-screen bg-white min-h-[60%] z-[70] shadow-lg">
          <div>
            <h3 className="uppercase text-gray-500 text-sm mb-6">{title}</h3>
            <ul className="grid grid-cols-2">
              {links.map((i) => (
                <li
                  key={i.title}
                  onMouseEnter={() => handleLinkHover(i)}
                  onMouseLeave={() => handleLinkHover(null)}
                  className={`block py-4 px-6 border-l transition-all duration-200 ${
                    pathName === i.link ? "text-primary border-primary" : ""
                  } hover:text-primary hover:border-primary relative`}
                >
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                  <Link href={i.link} onClick={() => toggleDropdown(false)}>
                    {i.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6">
            <div
              className="rounded-xl w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${
                  hoveredLink ? hoveredLink.image : "/img/nairobi.jpg"
                })`,
              }}
            >
              <div className="w-full h-full bg-black/30 rounded-xl text-white flex items-end">
                <div className="p-4">
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
      )}
    </div>
  );
}
