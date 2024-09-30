"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Plus } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function FuneralDirectorsPagination({
  total,
  pageSize,
}: {
  total: number;
  pageSize: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = parseInt(searchParams.get("page") || "1");
  let pages: number[] = [];
  const totalPages = Math.ceil(total / pageSize);

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  for (let index = 1; index < totalPages + 1; index++) {
    pages = [...pages, index];
  }

  return (
    <div className="mt-12 flex justify-center">
      <button className="text-center">
        <span className="block text-darktext">Toon meer uitvaartverzorger</span>
        <Plus className="size-7 text-secondary inline-block" />
      </button>
    </div>
  );
}
