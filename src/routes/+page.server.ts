import { getAllPosts } from '$lib/server/controllers/posts';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const posts = await getAllPosts();

	return {
		posts
	};
}) satisfies PageServerLoad;
