import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/wordpress/blog";
import { getReadingTime } from "@/lib/utils/getReadingTime";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";
import { get } from "lodash";

export const generateStaticParams = async () => {
  const posts: any[] = await getAllBlogPosts();

  return posts.map(({ slug }) => ({
    slug,
  }));
};

export const revalidate = 0;

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getBlogPostBySlug(slug);
  //   const latestPosts = await getAllBlogPosts(3);

  const author = get(data, "_embedded.author[0]");
  const featuredImage = get(data, "_embedded.wp:featuredmedia[0]");
  const tags =
    data.tags && data.tags.length > 0 ? get(data, "_embedded.wp:term[1]") : [];

  return (
    <>
      <hr />
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="py-8 lg:pe-8">
            <div className="space-y-5 lg:space-y-8">
              <Link
                className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline focus:outline-none focus:underline"
                href="/blog"
              >
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
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Back
              </Link>

              <h2
                className="text-3xl font-bold lg:text-5xl"
                dangerouslySetInnerHTML={{ __html: data.title.rendered }}
              ></h2>

              <div className="flex items-center gap-x-5">
                <Link
                  className="flex gap-2 items-center shrink-0 focus:outline-none"
                  href={`/authors/${author.slug}`}
                >
                  <img
                    className="size-8 rounded-full"
                    src={author.avatar_urls["96"]}
                    alt="Avatar"
                  />
                  <h5 className="group-hover:text-gray-600 group-focus:text-gray-600 text-sm font-semibold text-gray-800">
                    {author.name}
                  </h5>
                </Link>
                {tags.length > 0 && (
                  <Link
                    className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                    href={`/tags/${tags[0].slug}`}
                  >
                    {tags[0].name}
                  </Link>
                )}
                <p className="text-xs sm:text-sm text-gray-800">
                  {format(new Date(data.date), "MMMM dd, yyyy")}
                </p>
                <p className="text-xs sm:text-sm text-gray-800">
                  {getReadingTime(data.content.rendered)} mins read
                </p>
              </div>

              <figure>
                <img
                  className="w-full object-cover rounded-xl"
                  src={featuredImage.link}
                  alt={
                    featuredImage?.caption?.rendered ||
                    featuredImage?.title?.rendered
                  }
                />
                <figcaption className="mt-3 text-sm text-center text-gray-500">
                  {featuredImage?.caption?.rendered ||
                    featuredImage?.title?.rendered}
                </figcaption>
              </figure>

              <article
                className="prose prose-base max-w-none"
                dangerouslySetInnerHTML={{ __html: data.content.rendered }}
              ></article>

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
                <div>
                  {tags.map((i: any) => (
                    <Link
                      key={i.slug}
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                      href={`/tags/${i.slug}`}
                    >
                      {i.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
