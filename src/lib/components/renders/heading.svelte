<script lang="ts">
	import { addOne } from '$lib/store/layout.svelte';
	import GithubSlugger from 'github-slugger';

	const slugger = new GithubSlugger();

	export let depth;
	export let raw;
	export let text;

	let id = slugger.slug(text);

	if (depth === 1 || depth === 2) {
		addOne({ text, slug: id, depth });
	}
</script>

{#if depth === 1}
	<h1 {id}><slot></slot></h1>
{:else if depth === 2}
	<h2 {id}><slot></slot></h2>
{:else if depth === 3}
	<h3 {id}><slot></slot></h3>
{:else if depth === 4}
	<h4 {id}><slot></slot></h4>
{:else if depth === 5}
	<h5 {id}><slot></slot></h5>
{:else if depth === 6}
	<h6 {id}><slot></slot></h6>
{:else}
	{raw}
{/if}
