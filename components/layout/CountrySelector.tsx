'use client';
import React, { useState } from 'react';
import Select from 'react-select';
import { countries } from './countries'; // Import country data

interface CountrySelectorProps {
  onChange: (country: string) => void;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({ onChange }) => {
  const [selectedCountry, setSelectedCountry] = useState<{ value: string; label: string } | null>(null);

  const handleCountryChange = (selectedOption: { value: string; label: string } | null) => {
    setSelectedCountry(selectedOption);
    onChange(selectedOption ? selectedOption.value : ''); // Pass selected country value to parent component
  };

  return (
    <Select
      value={selectedCountry} // Current selected country
      onChange={handleCountryChange} // Handler for selection change
      options={countries} // List of country options
      isClearable // Allows clearing the selection
      placeholder="Select a country..." // Placeholder text
      classNamePrefix="react-select" // Optional prefix for classNames
    />
  );
};

export default CountrySelector;
