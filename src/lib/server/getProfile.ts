import { CMS_API_KEY, CMS_ENDPOINT } from '$env/static/private';
import type { ProfileResponse } from '$lib/types';

export const fetchProfile = async (): Promise<ProfileResponse> => {
	const res = await fetch(`${CMS_ENDPOINT}/profile`, {
		headers: {
			'X-MICROCMS-API-KEY': CMS_API_KEY
		}
	});

	return await res.json();
};
