"use client"; 

import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation"; 

function DashboardHeader() {
  const pathname = usePathname(); 

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
        <div className="flex gap-10">
          <Link href="/dashboard" className={`${pathname === "/dashboard" ? "bg-gray-200 font-bold" : ""} text-gray-700 font-medium hover:text-gray-900 px-3 py-2`}>
            Dashboard
          </Link>
          <Link href="/profile" className={`${pathname === "/profile" ? "bg-gray-200 font-bold" : ""} text-gray-700 font-medium hover:text-gray-900 px-3 py-2`}>
            Profiel
          </Link>
          <Link href="/requests" className={`${pathname === "/requests" ? "bg-gray-200 font-bold" : ""} text-gray-700 font-medium hover:text-gray-900 px-3 py-2`}>
            Aanvragen
          </Link>
          <Link href="/messages" className={`${pathname === "/messages" ? "bg-gray-200 font-bold" : ""} text-gray-700 font-medium hover:text-gray-900 px-3 py-2`}>
            Berichten
          </Link>
          <Link href="/financials" className={`${pathname === "/financials" ? "bg-gray-200 font-bold" : ""} text-gray-700 font-medium hover:text-gray-900 px-3 py-2`}>
            Financieel
          </Link>
          <Link href="/premium" className={`${pathname === "/premium" ? "bg-gray-200 font-bold" : ""} text-red-500 font-medium hover:text-red-700 px-3 py-2`}>
            Premium
          </Link>
          <Link href="/statistics" className={`${pathname === "/statistics" ? "bg-gray-200 font-bold" : ""} text-gray-700 font-medium hover:text-gray-900 px-3 py-2`}>
            Statistieken
          </Link>
          <Link href="/help" className={`${pathname === "/help" ? "bg-gray-200 font-bold" : ""} text-gray-700 font-medium hover:text-gray-900 px-3 py-2`}>
            Help
          </Link>
        </div>
      </nav>
    </>
  );
}

export default DashboardHeader;
