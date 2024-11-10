import { writable } from 'svelte/store';

export interface slug {
	text: string;
	depth: number;
	slug: string;
}

const tableOfContent = writable<slug[]>([]);

function addOne(slug: slug) {
	tableOfContent.update((prev) => [...prev, slug]);
}

export { tableOfContent, addOne };
