import axios from "axios";
import https from "https";

export const createStrapiClient = () => {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
    httpAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
    headers: {
      Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
  });

  return client;
};
