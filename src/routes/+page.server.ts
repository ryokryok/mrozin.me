import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import { fetchProfile } from '$lib/server/fetchProfile';
import { fetchArticle } from '$lib/server/fetchArticle';

export const load: PageServerLoad = async () => {
	try {
		const profileResponse = await fetchProfile();
		const articlesResponse = await fetchArticle();
		if (profileResponse || articlesResponse) {
			return { profile: profileResponse, articles: articlesResponse.articles };
		} else {
			throw error(404, 'Not found');
		}
	} catch (e) {
		throw error(404, 'Not found');
	}
};

export const prerender = true;
