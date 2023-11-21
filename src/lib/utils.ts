/**
 * return ISO 8601 format YYYY-MM-DD
 * @param {string} dateString 2023-12-31T23:59:59.000+09:00
 * @returns {string} YYYY-MM-DD
 */
export const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	return date.toLocaleDateString('sv-SE', { timeZone: 'Asia/Tokyo' });
};
