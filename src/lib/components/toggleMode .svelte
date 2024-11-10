<script lang="ts">
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { toggleMode, mode } from 'mode-watcher';
</script>

<button onclick={toggleMode}>
	{#if $mode === 'dark'}
		<Sun />
	{:else}
		<Moon />
	{/if}
</button>
