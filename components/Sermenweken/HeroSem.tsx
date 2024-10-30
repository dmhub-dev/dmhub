"use client";

import React from "react";
import { Button } from "../ui/button";

export default function HeroSem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="w-full py-14 md:py-20">
      <div className="container w-full grid gap-6 md:gap-12 md:grid-cols-2">
        <div>
          <h1 className="mb-4 font-bold text-3xl mt-4">{title}</h1>
          <div className="text-darktext text-base mb-4">
            {description.split("[n]").map((i, index) => (
              <p className="mb-4" key={index}>
                {i}
              </p>
            ))}
          </div>
          <div className="text-center">
            <Button
              className="p-6 font-bold"
              onClick={() => {
                if (typeof window !== "undefined") {
                  const vacanciesEl = document.getElementById("vacancies-list");

                  vacanciesEl?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              NEEM CONTACT OP
            </Button>
          </div>
        </div>
        {/* Images */}
        <div className="grid gap-3">
            <div className="grid gap-3 grid-cols-[2fr_2fr_2fr] bg-gray-100">
                <img
                src="/img/1.png"
                alt=""
                className="w-50 h-[160px] object-cover"
                />
                <img
                src="/img/2.png"
                alt=""
                className="w-50 h-[160px] object-cover"
                />
                <img
                src="/img/3.png"
                alt=""
                className="w-50 h-[160px] object-cover"
                />
            </div>
            <div className="grid gap-3 grid-cols-[2fr_2fr_2fr] bg-gray-100">
                <img
                src="/img/4.png"
                alt=""
                className="w-50 h-[160px] object-cover"
                />
                <img
                src="/img/5.png"
                alt=""
                className="w-50 h-[160px] object-cover"
                />
                <img
                src="/img/6.png"
                alt=""
                className="w-50 h-[160px] object-cover"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
