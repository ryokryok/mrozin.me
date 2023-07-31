import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import { fetchProfile } from '$lib/server/getProfile';

export const load: PageServerLoad = async () => {
	try {
		const data = await fetchProfile();
		if (data) {
			return data;
		} else {
			throw error(404, 'Not found');
		}
	} catch (e) {
		throw error(404, 'Not found');
	}
};

export const prerender = true;
