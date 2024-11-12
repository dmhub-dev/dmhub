import { robotoCondensed } from "@/lib/fonts";
import Link from "next/link";
import React from "react";

export default function ServiceHero({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="w-full relative">
      <div className="w-full md:w-1/2 md:ml-[50%]">
        <img
          src={img}
          alt=""
          className="w-full h-[calc(100vh-100px)] object-cover"
        />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="container w-full">
          <div className="md:w-1/2 md:pr-8">
            <div
              className={`flex items-center text-center gap-3 text-gray-600 mb-6 uppercase text-sm ${robotoCondensed.className}`}
            >
              <Link className="hover:text-primary" href="/">
                Home
              </Link>
              <span>/</span>
              <Link className="hover:text-primary" href="/services">
                Services
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <article
              className="mb-4 text-gray-600 text-base"
              dangerouslySetInnerHTML={{ __html: description || "" }}
            ></article>
            <div className="flex">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-6 py-4 mt-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border-2 border-black rounded-md hover:bg-black focus:bg-black hover:text-white focus:text-white"
                role="button"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
