import Link from "next/link";
import React from "react";
import { companyLinks, footerLinks, servicesLinks } from "./constants";
import { robotoCondensed } from "@/lib/fonts";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Logo from "../widgets/Logo";
import FooterNewsletterForm from "./FooterNewsletterForm";

export default function Footer() {
  return (
    <footer
      className={`py-16 bg-slate-900 text-white ${robotoCondensed.className}`}
    >
      <div className="container grid md:grid-cols-4 gap-6 md:gap-0 mb-16">
        <div>
          <Link href="/" className="text-5xl">
            <Logo className="h-14 w-auto fill-white" />
          </Link>

          <div className="mt-8">
            <h4 className="text-white mb-5">Socials</h4>

            <ul>
              <li>
                <a
                  href="https://linkedin.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white mb-4"
                >
                  <Linkedin className="h-4 w-auto" />
                  <span>Linkedin</span>
                </a>
                <a
                  href="https://instagram.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white mb-4"
                >
                  <Instagram className="h-4 w-auto" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://facebook.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white mb-4"
                >
                  <Facebook className="h-4 w-auto" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://twitter.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white mb-4"
                >
                  <Twitter className="h-4 w-auto" />
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Column 2 */}
        <div>
          <div className="mb-6">
            <h4 className="text-white mb-5">Company</h4>

            <ul>
              {companyLinks.map((i) => (
                <li key={i.title}>
                  <Link
                    href={i.link}
                    className="flex items-center gap-3 text-white/70 hover:text-white mb-4"
                  >
                    {i.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Column 3 */}
        <div>
          <div className="mb-6">
            <h4 className="text-white mb-5">Services</h4>

            <ul>
              {servicesLinks.map((i) => (
                <li key={i.title}>
                  <Link
                    href={i.link}
                    className="flex items-center gap-3 text-white/70 hover:text-white mb-4"
                  >
                    {i.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Column 4 */}
        <div>
          <div>
            <h4 className="text-white mb-5">Stay Informed</h4>
            <p className="text-white/70 mb-5">
              The latest DM Hub news, articles and resources sent straight to
              your inbox every week.
            </p>
            <FooterNewsletterForm />
          </div>
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
