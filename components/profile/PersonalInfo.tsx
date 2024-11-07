import React from "react";

function PersonalInfo() {
    return (
      <div>
        <p className="border-2 border-red-300 mb-2 p-2 text-[14px]">
          Consumenten kiezen voor de uitvaartverzorger die het beste bij ze past op basis van een zo uitgebreid mogelijk profiel.
          Vul uw profiel en overige gegevens volledig in. Nadat alles is ingevuld kan uw profiel gepubliceerd worden via de button linksonder.
        </p>
        <h2 className="text-[#2b998a]  font-semibold mb-2 text-[14px] underline">Uw persoonlijke profiel</h2>
        <form className="space-y-2">
          <h4 className="text-black-600  font-semibold  text-[16px] ">Persoonlijke gegevens</h4>
  
          <label className="w-1/6 text-[12px] ">Geslacht</label>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-4 text-[15px] ">
              <label><input type="radio" name="gender" value="man" /> man</label>
              <label><input type="radio" name="gender" value="vrouw" /> vrouw</label>
              <label><input type="radio" name="gender" value="x" /> x</label>
            </div>
          </div>
  
          <div className="flex gap-4 ">
            <div className="grid grid-rows-2 w-1/3 h-[70px]">
              <label className="w-full text-[12px] ">Voornaam</label>
              <input className="border border-gray-700 rounded p-2 w-full" type="text" />
            </div>
            <div className="grid grid-rows-2 w-1/9 h-[70px]">
              <label className="w-full text-[12px] ">Tussenvoegsel</label>
              <input className="border border-gray-700 rounded p-2 w-full" type="text" />
            </div>
            <div className="grid grid-rows-2 w-1/16 h-[70px]">
              <label className="w-full text-[12px] ">Achternaam</label>
              <input className="border border-gray-700 rounded p-2 w-full" type="text" />
            </div>
          </div>
  
          <div className="flex gap-4">
            <div className="grid grid-rows-2 w-1/2 h-[70px]">
              <label className="w-full text-[12px] ">E-mailadres</label>
              <input className="border border-gray-700 rounded p-2 w-full" type="email" />
            </div>
            <div className="grid grid-rows-2 w-1/9 h-[70px]">
              <label className="w-full text-[12px] ">Telefoonnummer</label>
              <input className="border border-gray-700 rounded p-2 w-full" type="text" />
            </div>
          </div>
  
          <div className="grid grid-rows-2 w-1/4 h-[60px]">
            <label className="w-full text-[12px] ">Geboortedatum</label>
            <input className="border border-gray-700 rounded p-2 w-full" type="date" />
          </div>
          
          <button className="bg-[#2b998a] text-white px-4 py-2 mt-6 rounded text-[12px] "                 
          >OPSLAAN</button>
        </form>
      </div>
    );
  }

  export default PersonalInfo;