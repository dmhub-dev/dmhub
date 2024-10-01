import React, { SetStateAction, useState } from 'react';

export default function Aannametarief() {
  const [value, setValue] = useState<number>(1.500);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className="w-full  rounded-lg">
      <h1 className="text-[15px] font-bold mb-4">Aannametarief</h1>
      <p className="text-blue-900 font-bold">
        Geef hieronder het aannametarief aan dat u rekent voor het verzorgen van de uitvaart.
      </p>
      <p className="text-gray-700 mt-4">
        De minimale werkzaamheden die binnen het aannametarief vallen zijn:
      </p>
      <ul className="list-none space-y-2 mt-1">
        {[
          'Het telefonisch aannemen van de uitvaart;',
          'Regelen dat de overledene wordt opgehaald en naar uitvaartlocatie wordt gebracht (niet de fysieke handeling);',
          'Regelgesprek bij nabestaanden thuis;',
          'Uitzoeken van evt. verzekeringen;',
          'Regelen van de formaliteiten en dus bijvoorbeeld aangifte doen bij gemeente;',
          'Uitwerken en regelen van de complete uitvaart;',
          'Gedurende de dagen van de uitvaart beschikbaar zijn, zowel telefonisch als fysiek;',
          'Tijdens dag uitvaart aanwezig zijn (4 uur);',
          'Nazorg',
        ].map((item, index) => (
          <li key={index} className="flex items-start text-[14px]">
            <span className="text-green-500 mr-2 text-[15px]">✓</span> {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 relative w-1/3">
        <div className="h-2 bg-gray-300 rounded-lg">
          <div
            className="h-full bg-[#2b998a] rounded-lg"
            style={{ width: `${(value / 3000) * 100}%` }} 
          />
        </div>
        <input
          type="range"
          min="0"
          max="3000"
          value={value}
          onChange={handleSliderChange}
          className="absolute top-0 w-full h-2 appearance: none bg-gray-600 cursor-pointer"
        />
        <div className="flex justify-between mt-2 text-gray-600">
          <span>0</span>
          <span>{value}</span>
          <span>3.000</span>
        </div>
      </div>

      <div className="mt-1">
        <button className="bg-[#2b998a] text-white px-6 py-2 mt-4 rounded text-[14px]">
            OPSLAAN
        </button>
      </div>

      {/* <div className="fixed bottom-4 right-4 bg-gray-100 shadow-lg p-3 rounded-full flex items-center space-x-2">
        <span>Vragen? Chat met ons!</span>
        <button className="bg-green-600 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 4v-2a2 2 0 00-2-2H7a2 2 0 00-2 2v2m4-2h4"
            />
          </svg>
        </button>
      </div> */}
    </div>
  );
}
