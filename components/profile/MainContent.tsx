import React from 'react';
import PersonalInfo from '../profile/PersonalInfo';
import PasswordChange from '../profile/PasswordChange';
import CompanyProfile from '../profile/CompanyProfile';
import FinancialInfo from '../profile/FinancialInfo';
import Aannametarief from '../profile/Aannametarief';
import ExpertiseKenmerken from '../profile/ExpertiseKenmerken';
import Voordelen from '../profile/Voordelen';
import Ervaring from '../profile/Ervaring';
import Opleidingen from '../profile/Opleidingen';
import Media from '../profile/Media';
import Keurmerken from '../profile/Keurmerken';
import Verzorgingsgebied from '../profile/Verzorgingsgebied';

type MainContentProps = {
  activeSection: string;
};

function MainContent({ activeSection }: MainContentProps) {
  return (
    <div className="w-3/4 bg-gray-100 justify-center align-middle px-6 py-2 overflow-y-scroll m-h-screen">
      {activeSection === 'personalInfo' && <PersonalInfo />}
      {activeSection === 'password' && <PasswordChange />}
      {activeSection === 'companyProfile' && <CompanyProfile />}
      {activeSection === 'financialInfo' && <FinancialInfo />}
      {activeSection === 'aannametarief' && <Aannametarief />}
      {activeSection === 'expertiseKenmerken' && <ExpertiseKenmerken />}
      {activeSection === 'voordelen' && <Voordelen />}
      {activeSection === 'ervaring' && <Ervaring />}
      {activeSection === 'opleidingenCertificaten' && <Opleidingen />}
      {activeSection === 'media' && <Media />}
      {activeSection === 'keurmerken' && <Keurmerken />}
      {activeSection === 'verzorgingsgebied' && <Verzorgingsgebied />}
    </div>
  );
}

export default MainContent;
