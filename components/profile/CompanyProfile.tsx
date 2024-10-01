import React, { useState } from "react";

// Company Profile Component
function CompanyProfile() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div >
      {!isDropdownOpen ? (
        <>
          <p className="border-2 border-red-300 mb-2 p-2 text-[14px]">
            Consumenten kiezen voor de uitvaartverzorger die het beste bij ze past op basis van een zo uitgebreid mogelijk profiel.
            Vul uw profiel en overige gegevens volledig in. Nadat alles is ingevuld kan uw profiel gepubliceerd worden via de button linksonder.
          </p>
          <h2 className="text-[#2b998a] font-semibold mb-2 text-[14px] underline">Uw persoonlijke profiel</h2>
          <form className="space-y-2">
            <h4 className="text-black-600 font-semibold text-[16px]">Over uw bedrijf</h4>
            <div className="flex gap-4">
              <div className="grid grid-rows-2 w-1/2 h-[70px]">
                <label className="w-full text-[12px]">Bedrijfsnaam</label>
                <input className="border border-gray-700 rounded p-2 w-full" type="text" />
              </div>
              <div className="grid grid-rows-2 w-1/9 h-[70px]">
                <label className="w-full text-[12px]">KvK-nummer</label>
                <input className="border border-gray-700 rounded p-2 w-full" type="text" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="grid grid-rows-2 w-1/2 h-[70px]">
                <label className="w-full text-[12px]">E-mailadres</label>
                <input className="border border-gray-700 rounded p-2 w-full" type="email" />
              </div>
              <div className="grid grid-rows-2 w-1/9 h-[70px]">
                <label className="w-full text-[12px]">Telefoonnummer</label>
                <input className="border border-gray-700 rounded p-2 w-full" type="text" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="grid grid-rows-2 w-1/3 h-[70px]">
                <label className="text-[12px]">Straat</label>
                <input className="border border-gray-300 rounded p-2 w-full" type="text" />
              </div>
              <div className="grid grid-rows-2 w-1/6 h-[70px]">
                <label className="text-[12px]">Huisnummer</label>
                <input className="border border-gray-300 rounded p-2 w-full" type="text" />
              </div>
              <div className="grid grid-rows-2 w-1/6 h-[70px]">
                <label className="text-[12px]">Postcode</label>
                <input className="border border-gray-300 rounded p-2 w-full" type="text" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="grid grid-rows-2 w-3/4 h-[70px]">
                <label className="text-[12px]">Website</label>
                <input className="border border-gray-300 rounded p-2 w-full" type="text" />
              </div>
            </div>
            <div className="flex gap-4">
                <div className="grid grid-rows-2 w-1/2 h-[70px]">
                    <label className="text-[12px]">Oprichtingsdatum (dd-mm-jjjj)</label>
                    <input className="border border-gray-300 rounded p-2 w-full" type="date" />
                </div>
                <div className="grid grid-rows-2 w-1/4 h-[70px]">
                <label className="text-[12px]">Aantal werknemers</label>
                <input className="border border-gray-300 rounded p-2 w-full" type="number" />
                </div>
            </div>

            <button
              type="button"
              className="text-[#2b998a] text-[16px] underline"
              onClick={toggleDropdown}
            >
              {isDropdownOpen ? "- nodig andere collega’s uit om ook deel te nemen" : "+ nodig andere collega’s uit om ook deel te nemen"}
            </button>
          </form>
        </>
      ) : (
        <div className="mt-4">
          <button
            type="button"
            className="text-[#2b998a] text-[16px] underline"
            onClick={toggleDropdown}
          >
            {isDropdownOpen ? "- nodig andere collega’s uit om ook deel te nemen" : "+ nodig andere collega’s uit om ook deel te nemen"}
          </button>
          <h4 className="text-black font-semibold text-[16px] mb-2">Over uw bedrijf</h4>
          <p className="text-[12px] mb-2">
            Vertel hieronder iets over uw bedrijf, hoe u in aanraking bent gekomen met de uitvaartbranche, waar u voor staat, etc.
          </p>
          <textarea
            className="border border-gray-300 rounded p-2 w-full h-40"
            maxLength={3000}
            ></textarea>
            <p className="text-[12px] text-gray-500 mt-1">
             0/3000 tekens            
            </p>


          <button
            type="button"
            className="text-[#2b998a] text-[14px] underline mt-4"
            onClick={toggleDropdown}
          >
            Terug naar bedrijfsinformatie
          </button>
        </div>
      )}
      <button className="bg-[#2b998a] text-white px-6 py-2 mt-4 rounded text-[14px]">
        OPSLAAN
      </button>
    </div>
  );
}

export default CompanyProfile;
