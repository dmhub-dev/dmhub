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
    <div className="bg-white shadow-custom z-10  flex flex-col">
      <div className="bg-[#96ccc5] w-full h-[80px]"></div>
      <img
        src={director?.image?.url || "/img/person.png"}
        alt={director.naam}
        className="size-[100px] object-cover rounded-full mx-auto -mt-14"
      />
      <div className="p-2 flex-grow">
        <div className="w-full flex justify-end">
          <div className="size-10 rounded-full flex items-center justify-center text-white bg-secondary text-sm -mt-8">
            {director.rating || "4.5"}
          </div>
        </div>
        <h3 className="font-bold text-[18px] text-center">{director.naam}</h3>
        <p className=" text-base leading-[19px] mt-2 text-center">
          {director.werk}
        </p>
        <p className="mt-4 text-center text-sm text-secondary">
          <b>Aannametarief:</b> {director.price_range || "-"}
        </p>
      </div>
      <div className="bg-secondary p-2 text-center mt-4">
        <span className="font-bold text-base text-white">
          Zwolle {director.distance ? `${director.distance} km` : ""}
        </span>
      </div>
    </div>
  );
};

export default FuneralDirectorCard;
