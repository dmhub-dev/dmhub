import { WP_ENDPOINT } from "./constants";

export const getBlogPostBySlug = async (slug: string) => {
  const res = await fetch(`${WP_ENDPOINT}posts?slug=${slug}&_embed`);

  const posts = await res.json();

  if (posts.length < 1) {
    return null;
  }

  const post = posts[0];

  return post;
};

export const getAllBlogPosts = async (limit = 100) => {
  const res = await fetch(`${WP_ENDPOINT}posts?per_page=${limit}&_embed`);

  const posts = await res.json();

  return posts;
};

export const getBlogPostByID = async (id: string) => {
  const res = await fetch(`${WP_ENDPOINT}posts/${id}`);

  const post = await res.json();

  return post;
};

export const getTagBySlug = async (tag: string) => {
  const res = await fetch(`${WP_ENDPOINT}tags?slug=${tag}`);

  const tags = await res.json();

  if (tags.length < 1) {
    return null;
  }

  return tags[0];
};

export const getBlogPostsByTagID = async (tagID: string) => {
  if (!tagID) return [];

  const res = await fetch(
    `${WP_ENDPOINT}posts?tags=${tagID}&per_page=100&_embed`
  );

  const posts = await res.json();

  return posts;
};

export const getAuthorBySlug = async (author: string) => {
  const res = await fetch(`${WP_ENDPOINT}users?slug=${author}`);

  const authors = await res.json();

  if (authors.length < 1) {
    return null;
  }

  return authors[0];
};

export const getBlogPostsByAuthorID = async (authorID: string) => {
  const res = await fetch(
    `${WP_ENDPOINT}posts?author=${authorID}&per_page=100&_embed`
  );

  const posts = await res.json();

  return posts;
};
