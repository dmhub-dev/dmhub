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
        className="px-4 flex items-center rounded bg-primary text-white uppercase shadow-[4px_8px_0px_0px_rgba(0,112,255,0.5)] hover:shadow-none transition-shadow duration-300"
      >
        <span className="block py-2.5 pr-4 mr-3">
          Start a Project
        </span>
        <ChevronDown />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900 flex items-center justify-center z-[1000] w-full h-[100vh]"
          onClick={handleOverlayClick}
        >
          <div className="relative w-full h-full flex items-center justify-center flex-col px-10 py-8">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-semibold text-white mb-2">
              Let’s Get Started
              </h2>
              <p className="text-lg text-white">
              How you would like to start?
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
              <Link href="/start-project?query=website-management" onClick={toggleModal}>
                <div className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-[250px]">
                  <img
                    src="/img/website.jpg"
                    alt="Website Management"
                    className="lg:w-full rounded-md lg:h-full sm:h-[4rem] sm:w-full"
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
