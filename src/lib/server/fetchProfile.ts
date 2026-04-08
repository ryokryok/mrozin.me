import { CMS_ENDPOINT } from "../constants";
import { ProfileResponseSchema } from "../schema";

const apiKey = import.meta.env.CMS_API_KEY ?? "";

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
