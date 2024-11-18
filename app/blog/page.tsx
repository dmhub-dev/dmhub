import BlogList from "@/components/blog/BlogList";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import MainCTA from "@/components/widgets/MainCTA";
import PageHero from "@/components/widgets/PageHero";
import { getAllBlogPosts } from "@/lib/wordpress/blog";
import React from "react";

export default async function BlogListPage() {
  const allBlogs = await getAllBlogPosts(10);

  return (
    <>
      <Breadcrumbs title="Insights" breadcrumbs={[]} />
      <PageHero
        title="Blog"
        description="All the best tech musings and articles"
        img="/img/header-bg.jpg"
      />
      <BlogList posts={allBlogs} showReadMore />
      <MainCTA />
    </>
  );
}
