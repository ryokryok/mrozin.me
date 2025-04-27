import { error } from "@sveltejs/kit";

import type { PageServerLoad } from "./$types";
import {
  fetchProfile,
  fetchProjects,
  fetchSNS,
} from "$lib/server/fetchProfile";

export const load: PageServerLoad = async () => {
  try {
    const profile = await fetchProfile();
    const sns = await fetchSNS();
    const projects = await fetchProjects();
    return {
      profile,
      sns,
      projects,
    };
  } catch (e) {
    if (e instanceof Error) {
      console.error("Error fetching data:", e.message);
    }
    throw error(404, "Not found");
  }
};

export const prerender = true;
