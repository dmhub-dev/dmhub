import Link from "next/link";
import React from "react";
import { footerLinks } from "./constants";
import { robotoCondensed } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer
      className={`py-16 bg-slate-900 text-white ${robotoCondensed.className}`}
    >
      <div className="container grid md:grid-cols-4 gap-6 mb-16">
        <div>
          <Link href="/" className="text-5xl">
            DM Hub
          </Link>
        </div>
      </div>
      <div className="container flex gap-6 items-center">
        <span className="text-white/80">&copy; Copyright 2024</span>
        {footerLinks.map((i) => (
          <Link
            className="text-white/80 hover:text-white"
            href={i.link}
            key={i.link}
          >
            {i.title}
          </Link>
        ))}
      </div>
    </footer>
  );
}
