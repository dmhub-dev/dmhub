import React from "react";
import Hero from "@/components/layout/Hero";
import Link from "next/link";
import { getListOfInfoPages, getPostContent } from "@/lib/infoContentHelpers";

export const generateStaticParams = async () => {
  const posts = getListOfInfoPages();

  return posts.map((slug) => ({
    slug,
  }));
};

export interface InfoPageProps {
  title: string;
  content: string;
  links: Array<{
    title: string;
    slug: string;
  }>;
}

const InfoPage = ({ params }: { params: { slug: string } }) => {
  const content = getPostContent(params.slug);
  console.log(content);

  return (
    <>
      <Hero backgroundImg="/img/zonshorizontal-1024x323.jpg" />
      <section className="container max-w-5xl w-full">
        <div className="bg-white shadow-lg p-10 md:p-16 w-full -mt-20 mb-16">
          <h1 className="text-2xl md:text-4xl font-bold text-secondary mb-6 md:mb-8">
            {content.data.title}
          </h1>

          <article className="prose prose-base text-black max-w-none pl-4 md:pl-6 border-l-2 border-l-primary">
            {content.content}
          </article>
          <article className="prose prose-base text-black max-w-none pl-4 pt-10 md:pl-6 border-l-2 border-l-primary">
            <p className="mb-0">Lees ook de voldegen Onderwerpen</p>
            <ul className="list-none p-0 mt-0">
              {content.data.links.map(
                (link: { title: string; slug: string }) => (
                  <li key={link.title} className="p-0">
                    <Link
                      href={link.slug}
                      className="text-blue-600 hover:text-primary-dark"
                    >
                      {link.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default InfoPage;
