import BlogList from "@/components/blog/BlogList";
import HeaderSection from "@/components/widgets/HeaderSection";
import MainCTA from "@/components/widgets/MainCTA";
import { getAllBlogPosts } from "@/lib/wordpress/blog";
import React from "react";

export default async function BlogListPage() {
  const allBlogs = await getAllBlogPosts(10);

  return (
    <>
      <HeaderSection
        title="Blog"
        subTitle="All the best tech musings and articles"
        img="/img/header-bg.jpg"
      />
      <BlogList posts={allBlogs} showReadMore />
      <MainCTA />
    </>
  );
}
