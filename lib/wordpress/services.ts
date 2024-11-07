import { WP_ENDPOINT } from "./constants";

export const getAllServices = async (limit = 100) => {
  const res = await fetch(`${WP_ENDPOINT}services?per_page=${limit}&_embed`);

  const posts = await res.json();

  return posts;
};
