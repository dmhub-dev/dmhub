import qs from "qs";
import { createStrapiClient } from "./createStrapiClient";

export type getVerzorgerParams = {
  slug: string;
};

export const getVerzorger = async ({ slug }: getVerzorgerParams) => {
  const strapiClient = createStrapiClient();

  const body = {
    filters: {
      slug,
    },
    populate: {
      verzorgers: {
        populate: {
          locatie: "*",
          specialismen: "*",
          tarief: "*",
          foto: "*",
        },
        fields: ["slug", "naam", "werk"],
      },
    },
  };

  const response = await strapiClient.get(
    "/api/verzorgers?" + qs.stringify(body)
  );

  if (response.status !== 200) return;

  if (response.data.meta.pagination.total === 0) return;

  const verzorger = response.data.data[0];

  return verzorger;
};
