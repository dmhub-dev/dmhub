import qs from "qs";

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
    },
    {
      encodeValuesOnly: true,
    }
  );

  const response = await fetch(`${STRAPI_API_URL}/verzorgers?${query}`);

  return response.json();
}
