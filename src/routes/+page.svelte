<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const posts = data.posts ?? [];
</script>

{#if posts.length > 0}
	{#each posts as post}
		<div class="post">
			<h2>{post.title}</h2>
			<p>{post.content}</p>
		</div>
	{/each}
{:else}
	<div>No posts found.</div>
{/if}
