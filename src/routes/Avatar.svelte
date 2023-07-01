<script lang="ts">
	export let src: string;
	export let name: string;
	export let description: string;
</script>

<div class="author-content">
	<div class="author-avatar">
		<img {src} alt={name} width={160} height={160} />
	</div>
	<div class="author-profile">
		<h1 class="author-name">{name}</h1>
		<p class="author-paragraph">{description}</p>
	</div>
</div>

<style>
	img {
		max-width: 100%;
		border-radius: 10%;
	}
	.author-content {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.author-avatar {
		width: 10rem;
	}
	.author-profile {
		flex: 1;
		padding: 0 1rem;
	}

	.author-name {
		font-size: 2rem;
		text-shadow: #ddd 1px 0 10px;
	}

	.author-paragraph {
		font-size: 1rem;
	}
</style>
