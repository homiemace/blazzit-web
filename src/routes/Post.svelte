<script lang="ts">
	export let post: { title: string; content: string };
</script>

<div class="bg-gradient-to-t from-black/50 to-transparent p-4 mb-4 rounded">
	<h2 class="title text-2xl">{post.title}</h2>
	<p class="content">{post.content}</p>
</div>