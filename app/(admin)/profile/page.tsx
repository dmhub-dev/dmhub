'use client';

import React, { useState } from 'react';

type DropdownState = {
  personal: boolean;
  company: boolean;
  finance: boolean;
};

// Main Profile Component
function Profile() {
  const [activeSection, setActiveSection] = useState('personalInfo');
  
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
    personal: true,
    company: false,
    finance: false,
  });

  const handleDropdown = (section: keyof DropdownState) => {
    setDropdownOpen((prev: DropdownState) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-100 overflow-hidden">
      <ProfileSidebar
        dropdownOpen={dropdownOpen}
        handleDropdown={handleDropdown}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <MainContent activeSection={activeSection} />
    </div>
  );
}

// Sidebar Component
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
    <div className="w-1/4 bg-white p-4 border-r h-screen flex flex-col justify-evenly">
      <div className="space-y-4 overflow-auto">
        {/* Personal profile section */}
        <div>
          <button
            onClick={() => handleDropdown('personal')}
            className="flex justify-between w-full text-left"
          >
            <span className="text-[#2b998a] font-semibold text-[15px]">Persoonlijk profiel</span>
            <span className="text-2xl">{dropdownOpen.personal ? '-' : '+'}</span>
          </button>
          {dropdownOpen.personal && (
            <ul className="mt-2 space-y-2">
              <li
                onClick={() => setActiveSection('personalInfo')}
                className={`cursor-pointer ${
                  activeSection === 'personalInfo' ? 'text-[#2b998a]' : 'text-gray-700 text-[15px]'
                }`}
              >
                Persoonlijke gegevens
              </li>
              <li
                onClick={() => setActiveSection('password')}
                className={`cursor-pointer ${
                  activeSection === 'password' ? 'text-[#2b998a]' : 'text-gray-700 text-[15px]'
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
            onClick={() => handleDropdown('company')}
            className="flex justify-between w-full text-left"
          >
            <span className="text-[#2b998a] font-semibold text-[15px]">Bedrijfsprofiel</span>
            <span className="text-2xl">{dropdownOpen.company ? '-' : '+'}</span>
          </button>
          {dropdownOpen.company && (
            <ul className="mt-2 space-y-2">
              <li
                onClick={() => setActiveSection('companyProfile')}
                className={`cursor-pointer ${
                  activeSection === 'companyProfile' ? 'text-[#2b998a]' : 'text-gray-700 text-[15px]'
                }`}
              >
                Bedrijfsprofiel
              </li>
            </ul>
          )}
        </div>

        {/* Financial profile section */}
        <div>
          <button
            onClick={() => handleDropdown('finance')}
            className="flex justify-between w-full text-left"
          >
            <span className="text-[#2b998a] font-semibold text-[15px]">Financiële gegevens</span>
            <span className="text-2xl">{dropdownOpen.finance ? '-' : '+'}</span>
          </button>
          {dropdownOpen.finance && (
            <ul className="mt-2 space-y-2">
              <li
                onClick={() => setActiveSection('financialInfo')}
                className={`cursor-pointer ${
                  activeSection === 'financialInfo' ? 'text-[#2b998a]' : 'text-gray-700 text-[15px]'
                }`}
              >
                Financiële gegevens
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Fixed red alert box */}
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

// Main Content Component
function MainContent({ activeSection }: { activeSection: string }) {
  return (
    <div className="w-3/4 bg-gray-100 px-6 py-2 overflow-hidden h-screen">
      {activeSection === 'personalInfo' && <PersonalInfo />}
      {activeSection === 'password' && <PasswordChange />}
      {activeSection === 'companyProfile' && <CompanyProfile />}
      {activeSection === 'financialInfo' && <FinancialInfo />}
    </div>
  );
}

// Personal Info Component
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
        // onClick={() => setActiveSection('password')}
        >OPSLAAN</button>
      </form>
    </div>
  );
}

// Password Change Component
function PasswordChange() {
  return (
    <div>
       <p className="border-2 border-red-300 mb-2 p-2 text-[14px]">
        Consumenten kiezen voor de uitvaartverzorger die het beste bij ze past op basis van een zo uitgebreid mogelijk profiel.
        Vul uw profiel en overige gegevens volledig in. Nadat alles is ingevuld kan uw profiel gepubliceerd worden via de button linksonder.
      </p>
      <h2 className="text-[#2b998a]  font-semibold mb-2 text-[14px] underline">Uw persoonlijke profiel</h2>
      <h2 className="font-semibold mb-4 text-[16px]">Wachtwoord </h2>
      <form className="space-y-4">
        <div className="grid grid-rows-2 w-full h-[60px]">
          <label className="w-full text-[12px] font-semibold ">Wachtwoord aanmaken</label>
          <input className="border p-2 w-2/3" type="password"  />
        </div>
        <div className="grid grid-rows-2 w-full h-[60px]">
          <label className="w-full text-[12px] font-semibold ">Herhaal wachtwoord</label>
          <input className="border p-2 w-2/3" type="password"  />
        </div>
        <h6 className="text-[#2b998a]  mb-4 text-[12px]">Voorwaarden</h6>
        <ul className='text-[12px]'>
          <li>- Minimaal 8 tekens zonder spaties</li>
          <li>- Minimaal 1 letter</li>
          <li>- Minimaal 1 cijfer of leesteken</li>
        </ul>
        
        <button className="bg-[#2b998a] text-white px-4 py-2 mt-6 rounded text-[12px] "                 
        // onClick={() => setActiveSection('password')}
        >OPSALAAN</button>     
       </form>
    </div>
  );
}

// Company Profile Component
function CompanyProfile() {
  return (
    <div>
      <h2 className="text-[#2b998a] font-semibold mb-4">Bedrijfsprofiel</h2>
      <p>Bedrijfsprofiel informatie komt hier...</p>
    </div>
  );
}

// Financial Info Component
function FinancialInfo() {
  return (
    <div>
      <h2 className="text-[#2b998a] font-semibold mb-4">Financiële gegevens</h2>
      <p>Financiële informatie komt hier...</p>
    </div>
  );
}

export default Profile;
