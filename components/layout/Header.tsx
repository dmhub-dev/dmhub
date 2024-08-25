import Link from "next/link";
import React from "react";
import DropDownMenu from "./DropDownMenu";
import CountrySelector from "./CountrySelector";

export default function Header() {
  return (
    <>
      <nav className="bg-white w-full h-16 flex items-center border-b sticky top-0 left-0 z-[100]">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <img
              src="/myfunus-logo.png"
              alt="myfunus logo"
              className="h-[35px] w-auto"
            />
          </Link>

          {/* Menus */}
          <div className="flex items-center gap-4">
            <DropDownMenu title="Voor uitvaartverzorgers">
              <div className="container flex gap-16 py-6">
                <div>
                  <h3 className="font-bold text-gray-600 mb-3 text-sm">
                    Meer informatie
                  </h3>
                  <ul>
                    <li className="mb-2">
                      <Link
                        href="/"
                        className="text-sm text-gray-800 hover:text-primary"
                      >
                        Meld je aan als uitvaartverzorger
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href="/"
                        className="text-sm text-gray-800 hover:text-primary"
                      >
                        Vragen en antwoorden
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href="/"
                        className="text-sm text-gray-800 hover:text-primary"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              
                <div>
                  <h3 className="font-bold text-gray-600 mb-3 text-sm">
                    Mijn account
                  </h3>
                  <ul>
                    <li className="mb-2">
                      <Link
                        href="/login"
                        className="text-sm text-gray-800 hover:text-primary"
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </DropDownMenu>

            <DropDownMenu title="Voor consumenten">
              <div className="p-4">
    <ul>
      <li className="mb-2">
        <Link
          href="/about" 
          className="text-sm text-gray-800 hover:text-primary"
        >
          Over Ons
        </Link>
      </li>
    </ul>
  </div>
            </DropDownMenu>

            <CountrySelector />
          </div>
        </div>
      </nav>
    </>
  );
}
