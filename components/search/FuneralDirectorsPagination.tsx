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
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`${pathname}?${createQueryString(
              "page",
              currentPage !== 1 ? `${currentPage - 1}` : `${currentPage}`
            )}`}
          />
        </PaginationItem>

        {totalPages !== 1 && (
          <>
            {[
              ...pages.slice(
                currentPage < 3 ? 0 : currentPage - 2,
                currentPage + 5
              ),
            ].map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href={`${pathname}?${createQueryString(
                    "page",
                    page.toString()
                  )}`}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
          </>
        )}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href={`${pathname}?${
              currentPage !== totalPages ? currentPage + 1 : currentPage
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
