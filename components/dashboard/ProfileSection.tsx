import React from "react";
// Profile Section
const ProfileSection = () => (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col h-[300px] w-[350px]">
      <div className="flex flex-col items-left">
        <div className="flex  ">
          <img
          src="img/s.webp"
          alt="Profile"
          className="rounded-full h-24 w-24 object-cover"
          />
          <div className="flex flex-col justify-center ">
            <h3 className="text-xl font-semibold text-[22px] text-center justify-center align-middle">
              Sepp Uitvaartzorg
            </h3>
          </div>
        </div>
  
        <div className="w-full py-2">
          <hr className="size-2 bg-grey-600 w-full" />
          <p className="text-gray-600">
            Uw profiel is voor <span className="font-bold">50%</span> compleet
          </p>
        </div>
      </div>
  
      {/* Progress Bar */}
      <div className="w-full bg-red-600 rounded-full h-4 mb-2 relative">
        <div className="bg-[#2b998a] h-4 rounded-full" style={{ width: "50%" }}></div>
      </div>
  
      <p className="text-gray-600 mb-4 flex-grow">
        Werk uw profiel bij om gepubliceerd te worden en zichtbaar te zijn.
      </p>
  
      <button className="bg-[#2b998a] text-white py-2 px-4 rounded w-[200px]">
        Profiel bijwerken
      </button>
    </div>
  );

export default ProfileSection;