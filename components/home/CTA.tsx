import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export interface CTAProps {
  title: string;
  description: string;
  linkText: string;
  link: string;
}

export default function CTA({ title, description, linkText, link }: CTAProps) {
  return (
    <section className="w-full py-[80px] bg-secondary text-white">
      <div className="container max-w-xl w-full mt-[20px]">
        <h2 className="font-bold mb-[20px] text-4xl">{title}</h2>
        <article className="space-y-4 mb-[20px]">
          <p>{description}</p>
        </article>
        <Link
          href={link}
          className="border-b inline-flex gap-0 pb-1 border-white hover:opacity-90"
        >
          {linkText}
          <ChevronRight className="stroke-1" />
        </Link>
      </div>
    </section>
  );
}
