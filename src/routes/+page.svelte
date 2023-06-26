<svelte:head>
	<title>Mr_ozin - A Web Developer</title>
	<meta name="description" content="Profile site about Mr_ozin" />
</svelte:head>

<div class="author-content">
	<div class="author-avatar">
		<img src="/images/author.jpg" alt="Mr_ozin" />
	</div>
	<div class="author-description">
		<h1 class="site-logo">Mr_ozin</h1>
		<p>A Japanese Web Developer</p>
	</div>
</div>

<a href="https://github.com/ryokryok">GitHub</a>
<a href="https://twitter.com/Mr_ozin">Twitter</a>
<a href="https://zenn.dev/mr_ozin">Zenn</a>

<style>
	img {
		max-width: 100%;
		border-radius: 50%;
	}
	.author-content {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.author-avatar {
		width: 10rem;
	}
	.author-description {
		flex: 1;
		padding: 0 1rem;
	}

	.site-logo {
		text-shadow: #ddd 1px 0 10px;
	}
</style>
