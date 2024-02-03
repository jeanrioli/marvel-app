export const getCookie = (cookieName: string) => {
	const cookies = document.cookie.split(';');

	for (const cookie of cookies) {
		const indexSeparator = cookie.indexOf('=');
		const c = [cookie.substring(0, indexSeparator), cookie.substring(indexSeparator + 1)];
		if (c[0].trim() === cookieName) {
			return c[1].trim();
		}
	}

	return null;
};
