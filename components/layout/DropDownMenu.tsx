"use client";

import { ChevronDown } from "lucide-react";
import React, { ReactNode, useEffect, useRef } from "react";

type DropDownMenuProps = {
  title: string;
  children: ReactNode;
};

export default function DropDownMenu({ title, children }: DropDownMenuProps) {
  return (
    <div className="group">
      <button className="flex h-16 gap-1.5 items-center group-hover:text-secondary">
        <span className="text-sm font-bold">{title}</span>

        <ChevronDown className="size-6 transition-all stroke-[1.5] group-hover:transform group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 w-full bg-white top-[64px] min-h-[200px] border-b hidden group-hover:block">
        {children}
      </div>
    </div>
  );
}
