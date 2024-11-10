<script lang="ts">
	import { tableOfContent } from '$lib/store/layout.svelte';
	import { NotebookText } from 'lucide-svelte';
	import { fromStore } from 'svelte/store';

	const tables = fromStore(tableOfContent);
</script>

<div class="sidebar">
	<h2><NotebookText color="white" /> Table of Content</h2>
	<ul>
		{#each tables.current as item}
			<li>
				<a href={'#' + item.slug}>{item.text}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.sidebar {
		position: fixed;
		padding: 23px 9px;
		ul {
			padding-top: 30px;
			display: flex;
			flex-direction: column;
			gap: 10px;
		}
	}
</style>
