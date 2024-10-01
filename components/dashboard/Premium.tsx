import React from "react";

// Premium Section
const PremiumSection = () => (
    <div className="bg-white shadow-md rounded-lg py-2 h-[200px] w-[350px] flex flex-col justify-evenly">
      {[
        "Spotlight - uitgelicht (week/maand)",
        "Direct in contact met consumenten",
        "Uitgebreid profiel",
        "Reviews ontvangen",
        "Verzorgingsgebied bepalen",
        "Uitgebreide promotiemogelijkheden",
      ].map((feature, index) => (
        <div className="flex items-center  " key={index}>
          <div className="rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#2b998a"
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
          <span className="ml-3 text-gray-700">{feature}</span>
        </div>
      ))}
    </div>
  );


export default PremiumSection;