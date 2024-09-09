"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LandscapeLayout from "../icons/LandscapeLayout";
import GridLayout from "../icons/GridLayout";
import { Edit3 } from "lucide-react";
import LocationsSearchModal from "./LocationsSearchModal";

export default function SearchHeader({
  resultsCount = 0,
}: {
  resultsCount: number;
}) {
  const [showLocationSearch, setShowLocationSearch] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const address = searchParams.get("address") || "All locations";
  const layout = searchParams.get("layout") || "grid";

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <section className="w-full container max-w-7xl flex justify-between py-4">
      <div className="text-gray-600">
        <p className="mb-2">{resultsCount} uitvaartverzorger gevonden</p>
        <LocationsSearchModal>
          <div className="hover:underline">
            <b className="inline-flex items-center gap-2 hover:underline">
              {address}
              <Edit3 className="size-4 text-primary" />
            </b>
          </div>
        </LocationsSearchModal>
      </div>

      <div>
        <div className="flex justify-end gap-4">
          <button
            className={`cursor-pointer ${
              layout === "landscape" ? "text-secondary" : "text-[#3599c1]"
            }`}
            onClick={() =>
              router.push(
                pathname + "?" + createQueryString("layout", "landscape")
              )
            }
          >
            <LandscapeLayout />
          </button>
          <button
            className={`cursor-pointer ${
              layout === "grid" ? "text-secondary" : "text-[#3599c1]"
            }`}
            onClick={() =>
              router.push(pathname + "?" + createQueryString("layout", "grid"))
            }
          >
            <GridLayout />
          </button>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <span className="text-sm text-gray-500">Sorteren op:</span>
          <Select
            onValueChange={(v) =>
              router.push(pathname + "?" + createQueryString("sort", v))
            }
          >
            <SelectTrigger className="w-auto border-none">
              <SelectValue placeholder="prijs" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="prijs">prijs</SelectItem>
                <SelectItem value="afstand">afstand</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}
