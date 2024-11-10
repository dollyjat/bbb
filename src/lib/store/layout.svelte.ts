import { writable } from 'svelte/store';

export interface slug {
	text: string;
	slug: string;
}

const tableOfContent = writable<slug[]>([]);

function addOne(slug: slug) {
	tableOfContent.update((prev) => [...prev, slug]);
}

export { tableOfContent, addOne };
