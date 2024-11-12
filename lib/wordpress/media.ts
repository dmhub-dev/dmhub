import { WP_ENDPOINT } from "./constants";

export const getMediaByID = async (id: string) => {
  const res = await fetch(`${WP_ENDPOINT}media/${id}`);

  const data = await res.json();

  return data.source_url;
};
