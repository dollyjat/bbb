<script>
	import { HighlightAuto } from 'svelte-highlight';
	import { Clipboard, ClipboardCheck } from 'lucide-svelte';

	export let lang;
	/**
	 * @type {string}
	 */
	export let text;

	let copied = false;

	function copyToClipboard() {
		navigator.clipboard.writeText(text);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 1000);
	}
</script>

<div class="code-box">
	<div class="header">
		<p>{lang}</p>
		<button class:animate={copied} onclick={copyToClipboard}
			>{#if copied}
				<ClipboardCheck />
			{:else}
				<Clipboard />
			{/if}</button
		>
	</div>
	<HighlightAuto code={text} {lang} />
</div>

<style>
	.code-box {
		border-radius: 5px;
		margin: 6px 0;
	}

	.animate {
		animation: copy 2s ease-in-out;
	}

	.header {
		width: inherit;
		display: flex;
		padding: 6px 14px;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		background-color: var(--theme-color-2);
		p {
			margin: 0 0;
		}
	}

	@keyframes copy {
		0% {
			transform: scale(1);
		}
		35% {
			transform: scale(2);
		}
		50% {
			transform: scale(1.6);
		}
		100% {
			transform: scale(3);
		}
	}
</style>
