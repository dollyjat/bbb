<script lang="ts">
	import { tableOfContent } from '$lib/store/layout.svelte';
	import type { PageData } from './$types';
	import Time from 'svelte-time';

	tableOfContent.set([]);

	let { data }: { data: PageData } = $props();
</script>

<div class="main">
	<div class="posts">
		{#each data.posts as post}
			<div class="post-box">
				<a class="post" href="/blogs/{post.slug}">
					<div class="post-image">
						<img src={'images/' + post.slug + '.jpg'} alt="" />
					</div>

					<div class="post-body">
						<h2>{post.title}</h2>
						<p>{post.description}</p>
					</div>
					<div class="post-footer">
						<div class="date">
							<Time relative timestamp={post.createdAt} />
						</div>
						<div class="tags">
							{#if post.tags}
								{#each post.tags.slice(0, 2) as tag}
									<span class="tag">{tag}</span>
								{/each}
							{/if}
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.posts {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 24px;
		padding: 30px 8px;
	}

	.post-box {
		margin: 12px 0;
		border-radius: 12px;
		background-color: var(--theme-color-2);
	}

	.post {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		min-height: 100%;
	}

	.post-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		min-width: 100%;
		border-top-left-radius: 12px;
		border-top-right-radius: 12px;
	}

	.post-body {
		padding: 0 24px;
		flex-grow: 1;
		h2 {
			margin: 32px 0 0;
			letter-spacing: -0.01em;
			line-height: 28px;
			font-size: 20px;
			overflow: hidden;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
		}
		p {
			color: var(--text-colors-2);
			font-size: 15px;
			line-height: 1.8;
			margin: 16px 0;
			overflow: hidden;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 3;
		}
	}

	.post-footer {
		display: flex;
		padding: 0 24px;
		padding-bottom: 17px;
		.date {
			color: var(--text-colors-3);
		}
		.tags {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			gap: 8px;
			flex-grow: 1;
			span {
				background-color: var(--theme-color-1);
				padding: 0 6px;
				border-radius: 4px;
				font-size: 12px;
			}
		}
	}

	@media (min-width: 1100px) {
		.posts {
			grid-template-columns: 1fr 1fr;
			margin: 24px 48px;
		}
		.post-image img {
			height: 254px;
			width: 448px;
		}
	}
</style>
