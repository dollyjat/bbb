<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import Sidebar from '$lib/components/siderbar.svelte';
	import '@fontsource-variable/fira-code';
	import '@fontsource-variable/noto-serif';
	import '../css/main.css';

	let { children } = $props();
</script>

<Navbar />
<div class="layout">
	<div>
		{@render children()}
	</div>
	<div>
		<Sidebar />
	</div>
</div>

<style>
	.layout {
		padding-top: 61px;
		display: grid;
		grid-template-columns: 1fr 300px;
	}
</style>
