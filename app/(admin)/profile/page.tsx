'use client';

import React, { useState } from 'react';
import ProfileSidebar from '@/components/profile/Sidebar';
import MainContent from '@/components/profile/MainContent';

type DropdownState = {
  personal: boolean;
  company: boolean;
  finance: boolean;
};

function Profile() {
  const [activeSection, setActiveSection] = useState('personalInfo');
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
    personal: true,
    company: false,
    finance: false,
  });

  const handleDropdown = (section: keyof DropdownState) => {
    setDropdownOpen({
      personal: section === "personal" ? !dropdownOpen.personal : false,
      company: section === "company" ? !dropdownOpen.company : false,
      finance: section === "finance" ? !dropdownOpen.finance : false,
    });
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

export default Profile;