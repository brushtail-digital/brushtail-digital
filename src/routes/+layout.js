export const prerender = true;

export const load = () => {
	return { year: new Date().getFullYear() };
};
