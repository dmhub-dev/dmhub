"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation"; 

function DashboardHeader() {
  const pathname = usePathname(); 
  const baseLinkClass = "text-gray-700 text-[15px] font-medium hover:text-gray-900 px-6 py-4 h-16 text-center flex items-center justify-center text-base"; 
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
        <div className="flex items-center w-[85%]"> {/* Set width to 80% of container */}
          <div className="flex w-full">
            <Link href="/dashboard" className={`${baseLinkClass} ${pathname === "/dashboard" ? activeLinkClass : ""} w-full`}>
              Dashboard
            </Link>
            <Link href="/profile" className={`${baseLinkClass} ${pathname === "/profile" ? activeLinkClass : ""} w-full`}>
              Profiel
            </Link>
            <Link href="/requests" className={`${baseLinkClass} ${pathname === "/requests" ? activeLinkClass : ""} w-full`}>
              Aanvragen
            </Link>
            <Link href="/messages" className={`${baseLinkClass} ${pathname === "/messages" ? activeLinkClass : ""} w-full`}>
              Berichten
            </Link>
            <Link href="/financials" className={`${baseLinkClass} ${pathname === "/financials" ? activeLinkClass : ""} w-full`}>
              Financieel
            </Link>
            <Link href="/premium" className={`${baseLinkClass} ${pathname === "/premium" ? activeLinkClass : ""} w-full text-red-500`}>
              Premium
            </Link>
            <Link href="/statistics" className={`${baseLinkClass} ${pathname === "/statistics" ? activeLinkClass : ""} w-full`}>
              Statistieken
            </Link>
            <Link href="/help" className={`${baseLinkClass} ${pathname === "/help" ? activeLinkClass : ""} w-full`}>
              Help
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default DashboardHeader;
