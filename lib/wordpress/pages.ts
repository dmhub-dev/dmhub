import { WP_ENDPOINT } from "./constants";

export const getPageBySlug = async (slug: string) => {
  const res = await fetch(`${WP_ENDPOINT}pages?slug=${slug}&_embed`);

  const pages = await res.json();

  if (pages.length < 1) {
    return null;
  }

  const page = pages[0];

  return page;
};

export const getAllPages = async (limit = 100) => {
  const res = await fetch(`${WP_ENDPOINT}pages?per_page=${limit}&_embed`);

  const pages = await res.json();

  return pages;
};

export const getPageByID = async (id: string) => {
  const res = await fetch(`${WP_ENDPOINT}pages/${id}`);

  const page = await res.json();

  return page;
};






