import { CMS_API_KEY } from "$env/static/private";
import { ProfileResponseSchema } from "$lib/schema";

const CMS_ENDPOINT = "https://mrozin.microcms.io/api/v1/";

const apiKey = CMS_API_KEY ?? "";

export const fetchProfile = async () => {
  const url = new URL("profile", CMS_ENDPOINT);
  const response = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch profile: ${response.status} ${response.statusText}`,
    );
  }
  const json = await response.json();

  const parsed = ProfileResponseSchema.parse(json);

  return parsed;
};
