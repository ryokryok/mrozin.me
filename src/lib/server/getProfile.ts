import { CMS_API_KEY, CMS_ENDPOINT } from '$env/static/private';
import type { ProfileResponse } from '$lib/types';

const baseURL = CMS_ENDPOINT ?? '';
const apiKey = CMS_API_KEY ?? '';

export const fetchProfile = async (): Promise<ProfileResponse> => {
	const res = await fetch(`${baseURL}/profile`, {
		headers: {
			'X-MICROCMS-API-KEY': apiKey
		}
	});

	return await res.json();
};
