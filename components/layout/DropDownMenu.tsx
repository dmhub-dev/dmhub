"use client";

import { ChevronDown } from "lucide-react";
import React, { ReactNode } from "react";

type DropDownMenuProps = {
  title: string;
  children: ReactNode;
};

export default function DropDownMenu({ title, children }: DropDownMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className={`flex gap-1.5 items-center ${isOpen ? "text-primary" : ""}`}
      >
        <span className="text-sm font-bold">{title}</span>

        <ChevronDown
          className={`size-6 transition-all stroke-[1.5] ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 w-full bg-white top-[64px] border-b">
          {children}
        </div>
      )}
    </div>
  );
}
