import Link from "next/link";
import React from "react";

type Category = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

const FuneralDirectorCard = ({
  director,
}: {
  director: {
    image: { url: string };
    naam: string;
    bio: string;
    tags: Category[];
    address: string;
    distance: number;
    price_range: string;
    werk: string;
    rating: number;
    slug: string;
  };
}) => {
  return (
    <div className="bg-white shadow-custom z-10  flex flex-col">
      <div className="bg-[#96ccc5] w-full h-[70px]"></div>
      <img
        src={director?.image?.url || "/img/person.png"}
        alt={director.naam}
        className="size-[100px] object-cover rounded-full shadow mx-auto -mt-14"
      />
      <div className="p-2 flex-grow">
        <div className="w-full flex justify-end">
          <div className="size-8 rounded-full flex items-center justify-center text-white bg-secondary text-xs font-bold -mt-10">
            {director.rating || "4.5"}
          </div>
        </div>
        <Link
          href={`/verzorger/${director.slug}`}
          className="hover:text-secondary"
        >
          <h3 className="font-bold text-[16px] text-center">{director.naam}</h3>
          <p className=" text-sm leading-[19px] mt-1 text-center">
            {director.werk}
          </p>
        </Link>
        <div className="flex gap-1 flex-wrap justify-center mt-3">
          {director?.tags &&
            director?.tags.map((i) => (
              <button
                key={i.id}
                className="p-1 px-2 border-[1.5px] text-[11px] rounded-full border-secondary"
              >
                {i.name}
              </button>
            ))}
        </div>
      </div>
      <p className="mt-1 mb-1.5 text-center text-sm text-secondary">
        <b>Aannametarief:</b> {director.price_range || "Onbekend"}
      </p>
      <div className="bg-secondary p-1.5 text-center">
        <span className="font-bold text-base text-white">
          {director.address}{" "}
          {director.distance ? `${director.distance} km` : ""}
        </span>
      </div>
    </div>
  );
};

export default FuneralDirectorCard;
