"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { searchPostcodes, searchVerzorgers } from "@/lib/strapi";
import { useRouter } from "next/navigation";

const initialSearchState = {
  postcode: "",
  name: "",
};

export default function Search() {
  const router = useRouter();

  const [postcode, setPostcode] = useState("");
  const [name, setName] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPostcode, setSelectedPostcode] = useState("");

  const [postcodeOptions, setPostcodeOptions] = useState<any[]>([]);
  const [directorsOptions, setDirectorsOptions] = useState<any[]>([]);
  const [postCodeLoading, setPostCodeLoading] = useState(false);
  const [directorsLoading, setDirectorsLoading] = useState(false);

  useEffect(() => {
    const fetchPostcodeOptions = async () => {
      try {
        setPostCodeLoading(true);
        let res = await searchPostcodes(postcode);

        setPostcodeOptions(res.postcodes);
        setPostCodeLoading(false);
      } catch (err) {
        console.log(err);
        setPostCodeLoading(false);
      }
    };

    if (postcode.length > 1 && postcode.length < 6) {
      fetchPostcodeOptions();
    }

    return () => {};
  }, [postcode]);

  useEffect(() => {
    const fetchDirectorsOptions = async () => {
      try {
        setDirectorsLoading(true);
        let res = await searchVerzorgers(name);

        setDirectorsOptions(res.verzorgers);
        setDirectorsLoading(false);
      } catch (err) {
        console.log(err);
        setDirectorsLoading(false);
      }
    };

    if (name.length > 1) {
      fetchDirectorsOptions();
    }

    return () => {};
  }, [name]);

  const handleSearch = () => {
    if (selectedCity) {
      router.push(`/zoeken/${selectedCity}/${selectedPostcode}`);
    } else {
      router.push(`/zoeken`);
    }
  };

  return (
    <section className="w-full container">
      <div className="max-w-[520px] w-full -mt-[80px] mx-auto bg-white p-6 md:p-8 md:px-[27px] shadow-xl space-y-[6px]">
        <h2 className="font-bold text-[22px] leading-[1.1] mb-[30px] text-darktext">
          Vind de uw uitvaartverzorger die bij u past
        </h2>
        <div className="relative block w-full group">
          <Input
            placeholder="Postcode of plaatsnaam"
            className="placeholder-darktext"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
          {postcode && postcode.length > 1 && (
            <button
              onClick={() => setPostcode("")}
              className="absolute top-3 right-2"
            >
              <X className="size-4 text-[#dbdbd7] stroke-2" />
            </button>
          )}
          {postcode && postcode.length > 1 && (
            <div className="w-full hidden group-focus-within:block absolute top-10 shadow-custom bg-white z-50">
              <div className="py-[9px] px-4">
                <h4 className="text-sm font-bold text-darktext">Postcodes</h4>
              </div>
              <div className="pb-2 w-full">
                {postCodeLoading && (
                  <p className="text-sm text-darktext px-4">Loading...</p>
                )}

                {postcodeOptions.map((i) => (
                  <button
                    type="button"
                    key={i.slug}
                    onClick={() => {
                      setSelectedPostcode(i.slug);
                      setSelectedCity(i.city.slug);

                      setPostcode(`${i.postcode} ${i.city.name}`);
                    }}
                    className="block w-full px-4 text-start leading-[19px] hover:bg-secondary hover:text-white py-[3px]"
                  >
                    {i.postcode} {i.city.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="relative w-full group">
          <Input
            placeholder="Zoek op naam of bedrijfsnaam"
            className="placeholder-darktext"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name && name.length > 1 && (
            <button
              onClick={() => setName("")}
              className="absolute top-3 right-2"
            >
              <X className="size-4 text-[#dbdbd7] stroke-2" />
            </button>
          )}
          {name && name.length > 1 && (
            <div className="w-full absolute hidden group-focus-within:block top-10 shadow-custom bg-white z-50">
              <div className="py-[9px] px-4">
                <h4 className="text-sm font-bold text-darktext">
                  Uitvaartverzorgers
                </h4>
              </div>
              <div className="py-2">
                {directorsLoading && (
                  <p className="text-sm text-darktext px-4">Loading...</p>
                )}

                {directorsOptions.map((i) => (
                  <button
                    type="button"
                    key={i.id}
                    onClick={() => {
                      setName(i.naam);
                    }}
                    className="block w-full px-4 text-start leading-[19px] hover:bg-secondary hover:text-white py-[3px]"
                  >
                    {i.naam}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <Button
          onClick={handleSearch}
          className="w-full h-[35px] font-bold leading-[19px] text-base"
        >
          Zoek uw uitvaartverzorger
        </Button>
      </div>
    </section>
  );
}
