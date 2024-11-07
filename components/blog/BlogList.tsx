import { BlogPost } from "@/lib/wordpress/types";
import { format } from "date-fns";
import { get } from "lodash";
import Link from "next/link";
import React from "react";

export default function BlogList({
  posts = [],
  showReadMore,
}: {
  posts: BlogPost[];
  showReadMore: boolean;
}) {
  return (
    <div className="container w-full py-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((i) => (
          <BlogPostCard
            key={i.slug}
            title={i.title.rendered}
            slug={i.slug}
            date={i.date}
            category={
              i.tags && i.tags.length > 0
                ? get(i, "_embedded.wp:term[1][0]")
                : ""
            }
            img={get(i, "_embedded.wp:featuredmedia[0].link")}
            author={get(i, "_embedded.author[0]")}
            excerpt={get(i, "excerpt.rendered")}
          />
        ))}
      </div>

      {showReadMore && (
        <div className="mt-12 text-center">
          <Link
            className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            href="/articles"
          >
            Read more
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}

const BlogPostCard = ({
  title,
  author,
  date,
  excerpt,
  img,
  slug,
  category,
}: {
  title: string;
  author: any;
  date: string;
  excerpt: string | undefined;
  img: string | undefined;
  slug: string;
  category: any;
}) => {
  return (
    <Link
      className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl"
      href={`/blog/${slug}`}
    >
      <div className="aspect-w-16 aspect-h-11">
        <img
          className="w-full h-[200px] object-cover rounded-xl rounded-b-none"
          src={img}
          alt={title}
        />
      </div>
      <div className="my-6 px-5">
        <h3
          className="text-xl font-semibold text-gray-800"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="mt-5 flex gap-4 items-center">
          {category && (
            <span className="text-black block p-2 px-4 border rounded-full text-sm font-semibold">
              #{category.name}
            </span>
          )}
          <span className="text-gray-600">
            {format(new Date(date), "do LLL yyy")}
          </span>
        </div>
        <article
          className="mt-5 text-gray-600"
          dangerouslySetInnerHTML={{ __html: excerpt || "" }}
        />
      </div>
      <div className="mt-auto flex items-center gap-x-3 p-5">
        <img
          className="size-8 rounded-full"
          src={author.avatar_urls["96"]}
          alt={author.name}
        />
        <div>
          <h5 className="text-sm text-gray-800">By {author.name}</h5>
        </div>
      </div>
    </Link>
  );
};
