import Link from "next/link";
import React from "react";
import { LinkItem } from "../layout/Header";

export default function DropdownLink({
  links,
  title,
  link,
}: {
  links: LinkItem[];
  title: string;
  link: string;
}) {
  return (
    <div className="group">
      <Link
        href={link}
        className="uppercase text-base h-[100px] flex items-center px-3 group-hover:text-primary"
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
                className="block py-4 px-6 border-l hover:text-primary hover:border-primary"
              >
                <Link href={i.link}>{i.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
