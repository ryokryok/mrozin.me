import { error } from "@sveltejs/kit";

import type { PageServerLoad } from "./$types";
import {
  fetchProfile,
  fetchProjects,
  fetchSNS,
} from "$lib/server/fetchProfile";
import { fetchArticle } from "$lib/server/fetchArticle";

export const load: PageServerLoad = async () => {
  try {
    const profile = await fetchProfile();
    const sns = await fetchSNS();
    const projects = await fetchProjects();
    const { articles } = await fetchArticle();
    if (profile && sns && projects) {
      return {
        profile,
        sns,
        projects,
        articles,
      };
    } else {
      throw error(404, "Not found");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    throw error(404, "Not found");
  }
};

export const prerender = true;
