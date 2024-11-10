<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import type { PageData } from './$types';
	import Heading from '$lib/components/renders/heading.svelte';
	import { tableOfContent } from '$lib/store/layout.svelte';
	import CodeBlock from '$lib/components/renders/Code.svelte';

	tableOfContent.set([]);

	let { data }: { data: PageData } = $props();
</script>

<div class="md-body">
	<SvelteMarkdown
		source={data.postMd}
		renderers={{
			heading: Heading,
			code: CodeBlock
		}}
	/>
</div>
