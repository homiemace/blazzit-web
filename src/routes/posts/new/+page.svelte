<script lang="ts">
	type Post = {
		id: string;
		imageFile: string;
		content: string;
		title: string;
	};

	let title = $state(``);
	let content = $state(``);
	let imageFile = $state(``);
	let posts = $state<Post[]>([]);

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		posts = [{ id: crypto.randomUUID(), title, content, imageFile }, ...posts];

		title = ``;
		content = ``;
		imageFile = ``;
	}

	let fileinput = $state<HTMLInputElement | null>(null);

	const onFileSelected = (e: Event) => {
		const file = (e.target as HTMLInputElement)?.files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (event) => {
			imageFile = event.target?.result as string;
		};
		reader.readAsDataURL(file);
	};
</script>

<main>
	<form onsubmit={handleSubmit}>
		<input type="text" required placeholder="Title" bind:value={title} />
		<textarea placeholder="Content" required bind:value={content}></textarea>
		<label class="chan">
			Choose Image
			<input
			  type="file"
			  accept=".jpg, .jpeg, .png"
			  onchange={onFileSelected}
			  
			/>
		  </label>
		<img src={imageFile} alt="Preview" style="max-width: 200px;" />
		<button type="submit">Upload post</button>
	</form>
	<ul>
		{#each posts as post (post.id)}
			<li>
				<h2>{post.title}</h2>
				<p>{post.content}</p>
				{#if post.imageFile}
					<img src={post.imageFile} alt="Post img" />
				{/if}
			</li>
		{/each}
	</ul>
</main>

<style>
</style>
