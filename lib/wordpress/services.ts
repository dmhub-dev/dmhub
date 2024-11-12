import { get } from "lodash";
import { WP_ENDPOINT } from "./constants";
import { getMediaByID } from "./media";

export const getAllServices = async (limit = 100) => {
  const res = await fetch(`${WP_ENDPOINT}services?per_page=${limit}&_embed`);

  const posts = await res.json();

  return posts.map((i: any) => flattenPostData(i));
};

export const getServiceByID = async (id: string) => {
  const res = await fetch(`${WP_ENDPOINT}services/${id}`);

  const post = await res.json();

  return flattenPostData(post);
};

export const getServiceBySlug = async (slug: string) => {
  const res = await fetch(`${WP_ENDPOINT}services?slug=${slug}&_embed`);

  const posts = await res.json();

  if (posts.length < 1) {
    return null;
  }

  const post = flattenPostData(posts[0]);

  // get acf image
  const hero_image = await getMediaByID(post.hero_image);

  return { ...post, hero_image };
};

const flattenPostData = (data: any) => {
  const featuredImage = get(data, "_embedded.wp:featuredmedia[0]");

  const flattenedData = {
    ...data.acf,
    featured_image: featuredImage,
    excerpt: data.excerpt.rendered,
    title: data.title.rendered,
    content: data.content.rendered,
    status: data.status,
    type: data.type,
    slug: data.slug,
    id: data.id,
    date: data.date,
  };

  return flattenedData;
};
