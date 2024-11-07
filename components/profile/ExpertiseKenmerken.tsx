import { useState } from 'react';

type SpecialismenType = 
  | 'budget' 
  | 'traditioneel' 
  | 'protocollair' 
  | 'ouderen' 
  | 'kinderen' 
  | 'geloof' 
  | 'Islamitisch' 
  | 'multicultureel' 
  | 'begrafenissen' 
  | 'crematies' 
  | 'grote uitvaarten' 
  | 'natuur';

type FaciliteitenType = 
  | 'uitvaartcentrum' 
  | 'Opbaar gelegenheid' 
  | 'crematorium' 
  | 'aula' 
  | 'condoleance ruimte' 
  | '...';

export default function ExpertiseKenmerken() {
  const [selectedSpecialismen, setSelectedSpecialismen] = useState<SpecialismenType[]>([]);
  const [selectedFaciliteiten, setSelectedFaciliteiten] = useState<FaciliteitenType[]>([]);

  const specialismen: SpecialismenType[] = [
    'budget', 'traditioneel', 'protocollair', 'ouderen', 'kinderen',
    'geloof', 'Islamitisch', 'multicultureel', 'begrafenissen',
    'crematies', 'grote uitvaarten', 'natuur'
  ];

  const faciliteiten: FaciliteitenType[] = [
    'uitvaartcentrum', 'Opbaar gelegenheid', 'crematorium', 'aula',
    'condoleance ruimte', '...', '...', '...'
  ];

  const handleSpecialismenClick = (item: SpecialismenType): void => {
    if (selectedSpecialismen.includes(item)) {
      setSelectedSpecialismen(selectedSpecialismen.filter(i => i !== item));
    } else if (selectedSpecialismen.length < 6) {
      setSelectedSpecialismen([...selectedSpecialismen, item]);
    }
  };

  const handleFaciliteitenClick = (item: FaciliteitenType): void => {
    if (selectedFaciliteiten.includes(item)) {
      setSelectedFaciliteiten(selectedFaciliteiten.filter(i => i !== item));
    } else {
      setSelectedFaciliteiten([...selectedFaciliteiten, item]);
    }
  };

  return (
    <div className="max-w-3xl rounded-lg">
      {/* Title */}
      <h1 className="text-[18px] font-bold ">Expertise/kenmerken</h1>

      {/* Specialismen Section */}
      <section>
        <h2 className="text-blue-900 font-bold">Specialismen</h2>
        <p className="text-gray-700 mt-1 text-sm">
          Klik hieronder aan in welke soorten uitvaarten u als uitvaartverzorger gespecialiseerd bent. U kunt daarbij maximaal 6 specialismen aanklikken.
        </p>
        <div className="grid grid-cols-3 gap-3 mt-4">
          {specialismen.map((item) => (
            <button
              key={item}
              onClick={() => handleSpecialismenClick(item)}
              className={`border border-[#2b998a] px-4 py-2 rounded-[5px] text-center text-sm ${
                selectedSpecialismen.includes(item) ? 'bg-[#2b998a] text-white' : 'text-[#000000]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Faciliteiten Section */}
      <section className="mt-8">
        <h2 className="text-blue-900 font-bold">Eigen faciliteiten</h2>
        <p className="text-gray-700 mt-2">
          Een uitvaartverzorger kan naast het verzorgen van uitvaarten ook de beschikking hebben over eigen faciliteiten. Klik hieronder aan over welke eigen faciliteiten u beschikt.
        </p>
        <div className="grid grid-cols-3 gap-3 mt-4">
          {faciliteiten.map((item) => (
            <button
              key={item}
              onClick={() => handleFaciliteitenClick(item)}
              className={`border border-[#2b998a] px-4 py-2 rounded-[5px] text-center text-sm ${
                selectedFaciliteiten.includes(item) ? 'bg-[#2b998a] text-white' : 'text-[#000000]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Save Button */}
      <div className="mt-6">
      <button className="bg-[#2b998a] text-white px-6 py-2 mt-4 rounded text-[14px]">
            OPSLAAN
        </button>
      </div>
    </div>
  );
}
