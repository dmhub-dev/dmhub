import qs from "qs";
import { createStrapiClient } from "./createStrapiClient";

const STRAPI_API_URL =
  (process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337") + "/api";

export async function getFeaturedDirectors(limit = 4) {
  const query = qs.stringify(
    {
      pagination: {
        start: 0,
        limit,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const response = await fetch(`${STRAPI_API_URL}/verzorgers?${query}`);

  return response.json();
}

export async function getPaginatedDirectors(limit = 20, page = 1) {
  const query = qs.stringify(
    {
      pagination: {
        pageSize: limit,
        page: page,
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
    },
    {
      encodeValuesOnly: true,
    }
  );

  const response = await fetch(`${STRAPI_API_URL}/verzorgers?${query}`);

  return response.json();
}

/**
 * Get all funeral directorsby the cities and postcodes
 */
export type SearchPostcodes = { postcodes: postcode[]; cities: city[] };

export type GetSearchResultsParams = {
  verzorger?: string;
  postcode?: {
    city: string;
    postcode?: string;
  };
};

export const getSearchResults = async (query: GetSearchResultsParams) => {
  const strapiClient = createStrapiClient();

  const response = await strapiClient.get<SearchPostcodes>(
    "/funus/search/results",
    {
      params: {
        verzorger: query.verzorger,
        city: query.postcode?.city,
        postcode: query.postcode?.postcode,
      },
    }
  );

  return response.data;
};

/**
 * Get a single funeral director by slug
 */
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

/**
 * Get featured funeral directors
 */
export const fetchSpotlight = async () => {
  const strapiClient = createStrapiClient();

  const body = {
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
    "/api/spotlight?" + qs.stringify(body)
  );

  return response.data;
};
