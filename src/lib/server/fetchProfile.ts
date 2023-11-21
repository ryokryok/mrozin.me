import { CMS_API_KEY, CMS_DRAFT_KEY, CMS_ENDPOINT } from "$env/static/private";
import { dev } from "$app/environment";
import type {
  ProfileResponse,
  ProjectsResponse,
  SNSResponse,
} from "$lib/types";

const baseURL = CMS_ENDPOINT ?? "";
const apiKey = CMS_API_KEY ?? "";
const draftKey = CMS_DRAFT_KEY ?? "";

export const fetchProfile = async (): Promise<ProfileResponse> => {
  const url = dev
    ? `${baseURL}/profile?draftKey=${draftKey}`
    : `${baseURL}/profile`;
  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
  });

  return await res.json();
};

export const fetchSNS = async (): Promise<SNSResponse> => {
  const url = `${baseURL}/sns`;
  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
  });

  return await res.json();
};

export const fetchProjects = async (): Promise<ProjectsResponse> => {
  const url = `${baseURL}/projects`;
  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
  });

  return await res.json();
};
