"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, CircleX } from "lucide-react";

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="px-4 flex items-center rounded bg-primary text-white uppercase"
      >
        <span className="block py-2.5 border-r border-white/30 pr-4 mr-3">
          Start a Project
        </span>
        <ChevronDown />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 w-full h-full"
          onClick={handleOverlayClick}
        >
          <div className="relative w-full h-full flex items-center justify-center flex-col px-10 py-8">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Banner Appearance
              </h2>
              <p className="text-sm text-gray-500">
                Change how banners appear to visitors.
              </p>
            </div>

            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-100"
              aria-label="Close"
            >
              <CircleX />
            </button>

            <div className="flex gap-8 justify-center items-center flex-wrap w-full px-10">
              <Link href="/website-management" onClick={toggleModal}>
                <div className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-[250px]">
                  <img
                    src="/img/website.jpg"
                    alt="Website Management"
                    className="w-full rounded-md"
                  />
                  <p className="mt-3 text-sm font-medium text-white">
                    Website Management
                  </p>
                </div>
              </Link>
              <Link href="/start-project" onClick={toggleModal}>
                <div className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-[250px]">
                  <img
                    src="/img/project.png"
                    alt="Start a Project"
                    className="w-full rounded-md"
                  />
                  <p className="mt-3 text-sm font-medium text-white">
                    Start a Project
                  </p>
                </div>
              </Link>
              <Link href="/schedule-call" onClick={toggleModal}>
                <div className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-[250px]">
                  <img
                    src="/img/call.jpg"
                    alt="Schedule a Call"
                    className="w-full rounded-md"
                  />
                  <p className="mt-3 text-sm font-medium text-white">
                    Schedule a Call
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
