import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactAside = () => {
  return (
    <div>
      {/* Bent u uitvaartverzorger Section */}
      <div className="bg-[#4a4a4a] text-white p-6">
        <h2 className="font-bold text-xl mb-2">Bent u uitvaartverzorger</h2>
        <p className="text-base mb-2">
          Check onze pagina met veelgestelde vragen en ontdek hoe u via myFunus
          in contact komt met uw doelgroep
        </p>
        <Link href="/meld-u-aan">
          <button className="text-center text-sm block mx-auto px-4 font-bold p-2 bg-primary">
            Naar pagina
          </button>
        </Link>
      </div>

      {/* Blijf ook op de hoogte Section */}
      <div className="mt-4 bg-secondary text-white p-6 text-center">
        <h2 className="font-bold text-xl mb-2">Blijf ook op de hoogte</h2>

        <div className="mt-4 flex justify-center gap-4 items-center">
          <a
            href="http://fb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="size-10 rounded-full bg-white text-black flex items-center justify-center"
          >
            <FaFacebookF className="h-7 w-auto" />
          </a>
          <a
            href="http://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="size-10 rounded-full bg-white text-black flex items-center justify-center"
          >
            <FaLinkedinIn className="h-7 w-auto" />
          </a>
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="size-10 rounded-full bg-white text-black flex items-center justify-center"
          >
            <FaInstagram className="h-7 w-auto" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactAside;
