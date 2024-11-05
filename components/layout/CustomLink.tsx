"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { includes } from "lodash";

export default function CustomLink({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`uppercase text-base h-[100px] flex items-center px-3 hover:text-primary ${
        includes(href, pathName) ? "text-primary" : ""
      }`}
    >
      {title}
    </Link>
  );
}
