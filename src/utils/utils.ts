export const getCookie = (cookieName: string) => {
	const cookies = document.cookie.split(';');

	for (const cookie of cookies) {
		const c = cookie.split('=');
		if (c[0].trim() === cookieName) {
			return c[1].trim();
		}
	}

	return null;
};
