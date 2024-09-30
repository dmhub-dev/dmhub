

// components/BadgeSelection.tsx
import { useState } from "react";

const badges = [
  { id: 1, name: "Keurmerk Persoonlijke uitvaart", image: "/path-to-badge1.png" },
  { id: 2, name: "Keurmerk Uitvaartzorg", image: "/path-to-badge2.png" },
];

const Keurmerken = () => {
  const [selectedBadge, setSelectedBadge] = useState<number | null>(null);

  const handleBadgeSelect = (id: number) => {
    setSelectedBadge(id);
  };

  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-4">Keurmerken</h2>

      <div className="flex space-x-4">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`w-32 h-32 border ${
              selectedBadge === badge.id
                ? "border-green-500"
                : "border-gray-400"
            } rounded-lg cursor-pointer flex items-center justify-center`}
            onClick={() => handleBadgeSelect(badge.id)}
          >
            <img
              src={badge.image}
              alt={badge.name}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>

      <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg">
        Opslaan
      </button>
    </div>
  );
};

export default Keurmerken;
