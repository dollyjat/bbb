<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import type { PageData } from './$types';
	import Heading from '$lib/components/renders/heading.svelte';
	import { tableOfContent } from '$lib/store/layout.svelte';

	let { data }: { data: PageData } = $props();

	console.log($tableOfContent);
</script>

<div class="markdown-body">
	<SvelteMarkdown
		source={data.postMd}
		renderers={{
			heading: Heading
		}}
	/>
</div>
