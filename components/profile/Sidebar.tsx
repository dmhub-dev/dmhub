import React from "react";

type DropdownState = {
  personal: boolean;
  company: boolean;
  finance: boolean;
};

function ProfileSidebar({
  dropdownOpen,
  handleDropdown,
  activeSection,
  setActiveSection,
}: {
  dropdownOpen: DropdownState;
  handleDropdown: (section: keyof DropdownState) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}) {
  return (
    <div className="w-1/4 bg-white p-4 border-r h-[100vh] overflow-auto flex flex-col justify-evenly relative ">
      <div className="space-y-4">
        {/* Personal profile section */}
        <div>
          <button
            onClick={() => handleDropdown("personal")}
            className="flex justify-between w-full text-left"
          >
            <span className="text-[#2b998a] font-semibold text-[15px]">
              Persoonlijk profiel
            </span>
            <span className="text-2xl">
              {dropdownOpen.personal ? "-" : "+"}
            </span>
          </button>
          {dropdownOpen.personal && (
            <ul className="mt-2 space-y-2">
              <li
                onClick={() => setActiveSection("personalInfo")}
                className={`cursor-pointer ${
                  activeSection === "personalInfo"
                  ? "text-[#000000] font-bold"
                  : "text-gray-700 text-[15px]"
                }`}
              >
                Persoonlijke gegevens
              </li>
              <li
                onClick={() => setActiveSection("password")}
                className={`cursor-pointer ${
                  activeSection === "password"
                    ? "text-[#000000] font-bold"
                    : "text-gray-700 text-[15px]"
                }`}
              >
                Wachtwoord
              </li>
            </ul>
          )}
        </div>

        {/* Company profile section */}
        <div>
          <button
            onClick={() => handleDropdown("company")}
            className="flex justify-between w-full text-left"
          >
            <span className="text-[#2b998a] font-semibold text-[15px]">
              Bedrijfsprofiel
            </span>
            <span className="text-2xl">
              {dropdownOpen.company ? "-" : "+"}
            </span>
          </button>
          {dropdownOpen.company && (
            <ul className="mt-2 space-y-2">
              {[
                "companyProfile",
                "aannametarief",
                "expertiseKenmerken",
                "voordelen",
                "ervaring",
                "opleidingenCertificaten",
                "media",
                "keurmerken",
                "verzorgingsgebied",
              ].map((section) => (
                <li
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`cursor-pointer ${
                    activeSection === section
                      ? "text-[#000000] font-bold"
                      : "text-gray-700 text-[15px]"
                  }`}
                >
                  {section === "companyProfile"
                    ? "Over jouw bedrijf"
                    : section === "aannametarief"
                    ? "Aannametarief"
                    : section === "expertiseKenmerken"
                    ? "Expertise/kenmerken"
                    : section === "voordelen"
                    ? "Voordelen"
                    : section === "ervaring"
                    ? "Ervaring"
                    : section === "opleidingenCertificaten"
                    ? "Opleiding & Certificaten"
                    : section === "media"
                    ? "Media"
                    : section === "keurmerken"
                    ? "Keurmerken"
                    : "Verzorgingsgebied"}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Financial profile section */}
        <div>
          <button
            onClick={() => handleDropdown("finance")}
            className="flex justify-between w-full text-left"
          >
            <span className="text-[#2b998a] font-semibold text-[15px]">
              Financiële gegevens
            </span>
            <span className="text-2xl">
              {dropdownOpen.finance ? "-" : "+"}
            </span>
          </button>
          {dropdownOpen.finance && (
            <ul className="mt-2 space-y-2">
              <li
                onClick={() => setActiveSection("financialInfo")}
                className={`cursor-pointer ${
                  activeSection === "financialInfo"
                  ? "text-[#000000] font-bold"
                  : "text-gray-700 text-[15px]"
                }`}
              >
                Financiële gegevens
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Alert section */}
      <div className="bg-gray-100 p-2 border rounded-lg text-center ">
        <p className="text-[14px]">
          Uw profiel is nog <span className="font-bold">niet</span> gepubliceerd
        </p>
        <button className="bg-red-200 text-white text-[14px] px-4 py-2 rounded mt-2">
          Publiceer
        </button>
      </div>
    </div>
  );
}

export default ProfileSidebar;
