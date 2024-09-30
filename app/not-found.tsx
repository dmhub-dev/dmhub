import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Link from "next/link";
import React from "react";

const links = [
  { title: "Home", link: "/" },
  { title: "Contact", link: "/contact" },
  { title: "FAQ", link: "/veelgestelde-vragen" },
];

export default function NotFoundPage() {
  return (
    <>
      <div className="container flex justify-between items-center h-24">
        {/* Logo */}
        <Link href="/">
          <img
            src="/myfunus-logo.png"
            alt="myfunus logo"
            className="h-[35px] w-auto"
          />
        </Link>
      </div>
      <main className="w-full min-h-[500px] flex items-center">
        <div className="container py-20">
          <span className="text-secondary font-bold block mb-4">
            Error: 404
          </span>
          <h1 className=" text-5xl text-black mb-6">
            We kunnen de pagina niet vinden
          </h1>
          <p className="font-bold mb-4">
            Paar handige links wat misschien zal helpen
          </p>
          <ul>
            {links.map((i) => (
              <li key={i.title} className="block mb-2">
                <Link className="text-secondary " href={i.link}>
                  {i.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
