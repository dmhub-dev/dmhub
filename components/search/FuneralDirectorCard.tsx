import React from "react";

const FuneralDirectorCard = ({
  director,
}: {
  director: {
    image: { url: string };
    naam: string;
    bio: string;
    tags: string[];
    address: string;
    distance: number;
    price_range: string;
    werk: string;
    rating: number;
  };
}) => {
  return (
    <div className="bg-white shadow-lg z-10  flex flex-col">
      <div className="bg-secondary/30 w-full h-[100px]"></div>
      <img
        src={director?.image?.url || "/img/person.png"}
        alt={director.naam}
        className="size-[160px] object-cover rounded-full mx-auto -mt-20 border-4 border-white"
      />
      <div className="p-4 flex-grow">
        <div className="w-full flex justify-end">
          <div className="size-10 rounded-full flex items-center justify-center text-white bg-secondary text-sm -mt-16">
            {director.rating || "4.5"}
          </div>
        </div>
        <h3 className="font-bold text-lg text-center">{director.naam}</h3>
        <p className="text-muted-foreground text-sm mt-2 text-center">
          {director.werk}
        </p>
        <p className="mt-4 text-center text-sm text-secondary">
          <b>Aannametarief:</b> {director.price_range || "€ 1000 - € 2000"}
        </p>
      </div>
      <div className="bg-secondary p-4 text-center">
        <span className="font-bold text-base text-white">
          Zwolle {director.distance || "8"} km
        </span>
      </div>
    </div>
  );
};

export default FuneralDirectorCard;
