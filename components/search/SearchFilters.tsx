"use client";

import React, { useCallback } from "react";
import { Checkbox } from "../ui/checkbox";
import { Slider } from "../ui/slider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { includes } from "lodash";

export default function SearchFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const address = searchParams.get("address") || "All locations";
  const minPrice = parseInt(searchParams.get("min_price") || "0");
  const maxPrice = parseInt(searchParams.get("max_price") || "3000");
  const _sm = searchParams.get("sm") || "";

  const sm = [..._sm.split("~")];

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleFilterCheck = (
    checked: boolean | string,
    value: string,
    filterName: string,
    filter: any[]
  ) => {
    if (checked && !includes(filter, value)) {
      router.push(
        `${pathname}?${createQueryString(
          filterName,
          [...filter, value].join("~")
        )}`
      );
    } else {
      router.push(
        `${pathname}?${createQueryString(
          filterName,
          filter.filter((s) => s !== value).join("~")
        )}`
      );
    }
  };

  return (
    <section>
      <section className="mb-8">
        <h4 className="font-bold">Specialismen</h4>
        <hr className="my-3 w-full" />
        <div>
          <label className="flex items-center mb-3 text-gray-600">
            <span className="flex-grow">Begrafenissen</span>
            <span className="inline-block mr-3 text-sm">(0)</span>
            <Checkbox
              checked={includes(sm, "Begrafenissen")}
              onCheckedChange={(v) =>
                handleFilterCheck(v, "Begrafenissen", "sm", sm)
              }
            />
          </label>
          <label className="flex items-center mb-3 text-gray-600">
            <span className="flex-grow">Crematies</span>
            <span className="inline-block mr-3 text-sm">(0)</span>
            <Checkbox
              checked={includes(sm, "Crematies")}
              onCheckedChange={(v) =>
                handleFilterCheck(v, "Crematies", "sm", sm)
              }
            />
          </label>
          <label className="flex items-center mb-3 text-gray-600">
            <span className="flex-grow">Geloof</span>
            <span className="inline-block mr-3 text-sm">(0)</span>
            <Checkbox />
          </label>
          <label className="flex items-center mb-3 text-gray-600">
            <span className="flex-grow">Budget uitvaart</span>
            <span className="inline-block mr-3 text-sm">(0)</span>
            <Checkbox />
          </label>
        </div>
      </section>
      <section className="mb-8">
        <h4 className="font-bold">Geslacht</h4>
        <hr className="my-3 w-full" />
        <div>
          <label className="flex items-center mb-3 text-gray-600">
            <span className="flex-grow">Man</span>
            <span className="inline-block mr-3 text-sm">(0)</span>
            <Checkbox />
          </label>
          <label className="flex items-center mb-3 text-gray-600">
            <span className="flex-grow">Vrouw</span>
            <span className="inline-block mr-3 text-sm">(0)</span>
            <Checkbox />
          </label>
        </div>
      </section>
      <section className="mb-8">
        <h4 className="font-bold">Aannametarief</h4>
        <hr className="my-3 w-full" />
        <div className="mt-4">
          <Slider
            onValueChange={(v) => {
              //check changed value
              if (v[0] !== minPrice) {
                router.push(
                  `${pathname}?${createQueryString(
                    "min_price",
                    v[0].toString()
                  )}`
                );
              } else {
                router.push(
                  `${pathname}?${createQueryString(
                    "max_price",
                    v[1].toString()
                  )}`
                );
              }
            }}
            defaultValue={[minPrice, maxPrice]}
            max={3000}
            min={0}
            step={10}
            minStepsBetweenThumbs={20}
          />
          <div className="flex items-center justify-between mt-2 text-gray-600">
            <span>€ {minPrice}</span>
            <span>€ {maxPrice}</span>
          </div>
        </div>
      </section>
    </section>
  );
}
