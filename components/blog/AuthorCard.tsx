import { truncate } from "lodash";
import Link from "next/link";
import React from "react";

export default function AuthorCard({ author }: { author: any }) {
  return (
    <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8">
      <Link
        className="block shrink-0 focus:outline-none"
        href={`/authors/${author.slug}`}
      >
        <img
          className="size-10 rounded-full"
          src={author.avatar_urls["96"]}
          alt="Avatar"
        />
      </Link>

      <Link
        className="group grow block focus:outline-none"
        href={`/authors/${author.slug}`}
      >
        <h5 className="group-hover:text-gray-600 group-focus:text-gray-600 text-sm font-semibold text-gray-800">
          {author.name}
        </h5>
        <p className="text-sm text-gray-500">
          {author.description
            ? truncate(author.description, { length: 60 })
            : "Editor"}
        </p>
      </Link>

      <div className="grow">
        <div className="flex justify-end">
          <button
            type="button"
            className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" x2="19" y1="8" y2="14" />
              <line x1="22" x2="16" y1="11" y2="11" />
            </svg>
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
