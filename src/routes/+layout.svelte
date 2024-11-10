<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import '@fontsource-variable/fira-code';
	import { ModeWatcher } from 'mode-watcher';
	import '@fontsource-variable/noto-serif';
	import '../css/main.css';
	import Siderbar from '$lib/components/siderbar.svelte';
	import { PanelRightOpen } from 'lucide-svelte';
	import '../css/github-markdown.css';

	let sidebarOpen = $state(false);

	let { children } = $props();
</script>

<ModeWatcher />
<Navbar />

<button onclick={() => (sidebarOpen = !sidebarOpen)} class="navbar-icon">
	<PanelRightOpen color="white" />
</button>

<div
	class:sider-open={sidebarOpen}
	class="page-main"
	style="padding-top: 65px;"
>
	<div>
		{@render children()}
	</div>
	<div class="sidebar">
		<Siderbar />
	</div>
</div>

<style>
	@media (min-width: 1100px) {
		.page-main {
			display: grid;
			grid-template-columns: 1fr 400px;
		}
		.sidebar {
			display: block !important;
		}
		.navbar-icon {
			display: none;
		}
	}

	.sidebar {
		display: none;
	}

	.sider-open {
		display: grid;
		overflow: hidden;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		& .sidebar {
			display: block;
		}
	}

	.navbar-icon {
		position: fixed;
		top: 40%;
		right: 20px;
		z-index: 700;
		padding: 8px 12px;
		border-radius: 8px;
		background-color: var(--theme-color-3);
	}
</style>
