<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	export let data: PageData;
	const posts = data?.posts ?? [];
</script>

<main
	class="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50"
>

<button class="magic-orb" tabindex="0" on:click={() => goto('/posts/new')}>
	Post
</button>
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


<style>
	.magic-orb {
	  position: fixed;
	  bottom: 2rem;
	  right: 2rem;
	  width: 80px;
	  height: 80px;
	  border-radius: 50%;
	  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
	  background-size: 300% 300%;
	  animation: gradient 3s ease infinite, float 3s ease-in-out infinite;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  cursor: pointer;
	  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
	  transform: translateY(0);
	}
	
	@keyframes gradient {
	  0% { background-position: 0% 50%; }
	  50% { background-position: 100% 50%; }
	  100% { background-position: 0% 50%; }
	}
	
	@keyframes float {
	  0%, 100% { transform: translateY(0px); }
	  50% { transform: translateY(-10px); }
	}
	
	.magic-orb:hover {
	  transform: scale(1.1);
	}
  </style>
