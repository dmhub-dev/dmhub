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
    <section className="w-full py-16 bg-secondary text-white">
      <div className="container max-w-xl w-full">
        <h2 className="font-bold mb-4 text-3xl md:text-4xl">{title}</h2>
        <article className="space-y-4 mb-4">
          <p>{description}</p>
        </article>
        <Link
          href={link}
          className="border-b inline-flex gap-2 pb-1 border-white hover:opacity-90"
        >
          {linkText}
          <ChevronRight className="stroke-2" />
        </Link>
      </div>
    </section>
  );
}
