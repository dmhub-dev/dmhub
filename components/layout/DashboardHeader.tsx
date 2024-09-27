"use client"; 

import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation"; 

function DashboardHeader() {
  const pathname = usePathname(); 
  const baseLinkClass = "text-gray-700 font-medium hover:text-gray-900 px-10 py-4 h-16 text-center flex items-center justify-center";
  const activeLinkClass = "bg-gray-200 font-bold";
  
  return (
    <>
      <nav className="bg-white w-full h-16 flex items-center justify-between border-b border-gray-200 sticky top-0 z-[100] px-4">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/">
            <img
              src="/myfunus-logo.png"
              alt="myfunus logo"
              className="h-[35px]"
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center">
          <Link href="/dashboard" className={`${baseLinkClass} ${pathname === "/dashboard" ? activeLinkClass : ""}`}>
            Dashboard
          </Link>
          <Link href="/profile" className={`${baseLinkClass} ${pathname === "/profile" ? activeLinkClass : ""}`}>
            Profiel
          </Link>
          <Link href="/requests" className={`${baseLinkClass} ${pathname === "/requests" ? activeLinkClass : ""}`}>
            Aanvragen
          </Link>
          <Link href="/messages" className={`${baseLinkClass} ${pathname === "/messages" ? activeLinkClass : ""}`}>
            Berichten
          </Link>
          <Link href="/financials" className={`${baseLinkClass} ${pathname === "/financials" ? activeLinkClass : ""}`}>
            Financieel
          </Link>
          <Link href="/premium" className={`${baseLinkClass} ${pathname === "/premium" ? activeLinkClass : ""} text-red-500`}>
            Premium
          </Link>
          <Link href="/statistics" className={`${baseLinkClass} ${pathname === "/statistics" ? activeLinkClass : ""}`}>
            Statistieken
          </Link>
          <Link href="/help" className={`${baseLinkClass} ${pathname === "/help" ? activeLinkClass : ""}`}>
            Help
          </Link>
        </div>
      </nav>
    </>
  );
}

export default DashboardHeader;
