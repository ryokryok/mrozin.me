import { CMS_API_KEY } from "$env/static/private";
import { ProfileResponseSchema } from "$lib/schema";

const CMS_ENDPOINT = "https://mrozin.microcms.io/api/v1/";

import type { ProjectsResponse, SNSResponse } from "$lib/types";

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

export const fetchSNS = async (): Promise<SNSResponse> => {
  const url = new URL("sns", CMS_ENDPOINT);
  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
  });

  return await res.json();
};

export const fetchProjects = async (): Promise<ProjectsResponse> => {
  const url = new URL("projects", CMS_ENDPOINT);
  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
  });

  return await res.json();
};
