
import React, { SetStateAction, useState } from 'react';


export default function Ervaring() {
  const [voordelen, setVoordelen] = useState<string[]>(['']);
  const [value, setValue] = useState<number>(1.500);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };
  const addVoordeel = () => {
    setVoordelen([...voordelen, '']);
  };
  // Handle input change for voordeel fields
  const handleVoordeelChange = (index: number, value: string) => {
    const updatedVoordelen = [...voordelen];
    updatedVoordelen[index] = value;
    setVoordelen(updatedVoordelen);
  };

  // Remove a voordeel, but not the first one
  const removeVoordeel = (index: number) => {
    if (index > 0) {
      const updatedVoordelen = voordelen.filter((_, i) => i !== index);
      setVoordelen(updatedVoordelen);
    }
  };

  return (
    <div className="max-w-2xl ">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">Ervaring</h1>
      <section>
        <h2 className="text-blue-900 font-bold">Ervaring als uitvaartverzorger</h2>
        <p className="text-gray-700 mt-2">
            Geef hieronder aan welke ervaring u als uitvaartverzorger in de uitvaartbranche heeft opgedaan. U kunt elke keer
            een extra ervaring toevoegen.         
        </p>
        
        <div className="mt-4 space-y-3">
          {voordelen.map((voordeel, index) => (
            <div key={index} className="flex items-center space-x-3">
              <input
                type="text"
                value={voordeel}
                onChange={(e) => handleVoordeelChange(index, e.target.value)}
                className="w-2/3 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2b998a] focus:border-transparent"
              />
              {index > 0 && (
                <button
                  onClick={() => removeVoordeel(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          ))}

          <button
            onClick={addVoordeel}
            className="flex items-center text-[#2b998a] text-sm font-semibold hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            extra ervaring toevoegen
          </button>
        </div>
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
      </section>

      <div className="mt-6 fixed bottom-4 ">
        <button className="bg-[#2b998a] hover:bg-[#2b997a] text-white font-bold py-2 px-4 rounded">
          OPSLAAN
        </button>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-4 right-4   flex items-center space-x-2">
        <button className="px-2 py-1 rounded-[5px] text-md bg-[#2b998a]  bg-opacity-30 ">
        Vragen? Chat met ons!  <span className='text-xl ml-4'>^</span>
        </button>
      </div>
    </div>
  );
}
