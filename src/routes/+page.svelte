<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const posts = data?.posts ?? [];
</script>

<main class="mx-auto max-w-4xl space-y-8 p-6">
	{#if posts.length > 0}
		{#each posts as post (post.id)}
			<article class="group relative overflow-hidden rounded-lg bg-gray-900 shadow-lg">
				<div
					class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity group-hover:opacity-90"
					aria-hidden="true"
				></div>

				<header class="relative p-6">
					<h2 class="mb-2 text-3xl font-semibold text-white">{post.title}</h2>
					<p class="leading-relaxed text-gray-300">{post.content}</p>
				</header>
			</article>
		{/each}
	{:else}
		<p class="text-center text-gray-400 italic">No posts found.</p>
	{/if}
</main>
