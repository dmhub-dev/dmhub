import { robotoCondensed } from "@/lib/fonts";
import Link from "next/link";
import React from "react";

export default function FlipCard({
  title,
  icon,
  description,
  link,
  position,
}: {
  title: string;
  icon: string;
  description: string;
  link: string;
  position: number;
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={position * 100}
      data-aos-duration="500"
      className="group h-64 w-full [perspective:1000px]"
    >
      <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] border p-4 text-center flex justify-center items-center">
          <div>
            <img src={icon} alt="" className="h-16 w-auto inline-block" />

            <p className="mt-6 text-xl font-bold">{title}</p>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 p-4 md:p-6 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <img src={icon} alt="" className="h-8 w-auto inline-block invert" />

          <h2 className="text-base font-bold mb-2 mt-6">{title}</h2>

          <p className="text-xs text-pretty mb-4">{description}</p>

          <Link
            href={link}
            className={`uppercase text-sm ${robotoCondensed.className}`}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
