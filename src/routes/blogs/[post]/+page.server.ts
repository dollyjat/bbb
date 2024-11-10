import { getPostBySlug, getPostMdById } from '$lib/server/controllers/posts';
import type { PageServerLoad } from './$types';

export const ssr = true;

export const load = (async ({ params, setHeaders }) => {
	const postData = await getPostBySlug(params.post);
	const postMdData = await getPostMdById(postData[0].id.toString());
	setHeaders({
		'Cache-Control': 'max-age=0, s-maxage=3600'
	});
	return {
		postMd: postMdData[0].content
	};
}) satisfies PageServerLoad;
