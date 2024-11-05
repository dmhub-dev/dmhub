import { robotoCondensed } from "@/lib/fonts";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NotFoundPage() {
  return (
    <main className=" bg-gray-100 py-28">
      <div className="container max-w-3xl">
        <h1
          className={`text-5xl md:text-8xl font-bold mb-6 ${robotoCondensed.className}`}
        >
          404
        </h1>
        <p className="text-gray-600 mb-6">Page not found</p>

        <Link
          className="border-2 px-6 py-4 hover:bg-black hover:text-white rounded inline-flex items-center gap-4 border-black"
          href="/"
        >
          Go to home
          <ArrowUpRight />
        </Link>
      </div>
    </main>
  );
}
