import React from "react";


export const Welkom = () => (
    <div className="h-[50px] flex flex-col justify-center w-[350px]">
      <h2 className="text-[18px] font-bold mb-4">Welkom</h2>
    </div>
  );
  
  // Profile Publish Component
 export const ProfilePublish = () => (
    <div className="w-[535px] flex flex-col ">
      <div className="bg-white shadow-md rounded-lg p-4 h-[100px] flex flex-col justify-center w-[350px] text-center">
        <h2 className="text-[14px] mb-4 text-center">
          Uw profiel is nog{" "}
          <a href="#" className="underline">
            niet
          </a>{" "}
          gepubliceerd
        </h2>
        <button className="bg-red-200 text-white mx-auto px-4 w-[150px] rounded">
          Publiceer
        </button>
      </div>
    </div>
  );