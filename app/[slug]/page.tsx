import { getAllPages, getPageBySlug } from "@/lib/wordpress/pages";
import { format } from "date-fns";
import React from "react";
import { get } from "lodash";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PageNotFound from "../not-found";

interface PageData {
  title?: { rendered: string };
  date?: string;
  content?: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      link?: string;
      caption?: { rendered?: string };
      title?: { rendered?: string };
    }>;
  };
}

export const generateStaticParams = async () => {
  const pages: PageData[] = await getAllPages();

  return pages.map(({ title }: any) => ({
    slug: title?.rendered || "",
  }));
};

export const revalidate = 0;

export default async function WPPages({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data: PageData | null = await getPageBySlug(slug);

  if (!data) {
    return <PageNotFound />;
  }

  const title = data.title?.rendered || "Untitled Page";
  const content = data.content?.rendered || "<p>No content available.</p>";
  const date = data.date
    ? format(new Date(data.date), "MMMM dd, yyyy")
    : "Unknown date";
  const featuredImage = get(data, "_embedded.wp:featuredmedia[0]", null);

  return (
    <>
      <Breadcrumbs
        title={title}
        breadcrumbs={[{ title: "Insights", link: "/blog" }]}
      />
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="py-8 lg:pe-8">
            <div className="space-y-5 lg:space-y-8">
              <h2
                className="text-3xl font-bold lg:text-5xl"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>

              <div className="flex items-center gap-x-5">
                <p className="text-xs sm:text-sm text-gray-800">{date}</p>
              </div>

              {featuredImage?.link && (
                <figure>
                  <img
                    className="w-full object-cover rounded-xl"
                    src={featuredImage.link}
                    alt={
                      featuredImage?.caption?.rendered ||
                      featuredImage?.title?.rendered ||
                      "Featured Image"
                    }
                  />
                  <figcaption className="mt-3 text-sm text-center text-gray-500">
                    {featuredImage?.caption?.rendered ||
                      featuredImage?.title?.rendered}
                  </figcaption>
                </figure>
              )}

              <article
                className="prose prose-base max-w-none"
                dangerouslySetInnerHTML={{ __html: content }}
              ></article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
