<script lang="ts">
	import { tableOfContent } from '$lib/store/layout.svelte';
	import { NotebookText } from 'lucide-svelte';
	import { fromStore } from 'svelte/store';

	const tables = fromStore(tableOfContent);
</script>

<div class="sidebar">
	{#if tables.current.length > 0}
		<h2><NotebookText /> Table of Content</h2>
		<ul>
			{#each tables.current as item}
				<li class="line-clamp-1" id={item.depth.toString()}>
					<a href={'#' + item.slug}>{item.text}</a>
				</li>
			{/each}
		</ul>
	{:else}
		<h2><NotebookText /> Table of Content</h2>
		<bsky-widget data-handle="devgauravjatt.bsky.social"> </bsky-widget>
	{/if}
</div>

<style lang="postcss">
	bsky-widget {
		min-height: 304px;
		width: 350px;
	}

	.sidebar {
		position: fixed;
		background-color: var(--theme-color-2);
		top: 65px;
		right: 0;
		z-index: 100;
		padding: 17px 25px;
		height: calc(100vh - 65px);

		li[id='1'] {
			color: var(--text-colors-2);
		}

		li[id='2'] {
			color: var(--text-colors-3);
			padding-left: 8px;
		}

		h2 {
			display: flex;
			gap: 10px;
			text-align: center;
			font-size: large;
			justify-content: center;
			padding-bottom: 22px;
		}

		ul {
			display: flex;
			gap: 10px;
			flex-direction: column;
		}
	}

	@media (min-width: 1100px) {
		.sidebar {
			width: 400px;
		}
	}
</style>
