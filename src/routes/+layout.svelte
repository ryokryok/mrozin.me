<script lang="ts">
	import './global.css';
</script>

<svelte:head>
	<title>Mr_ozin</title>
	<meta name="description" content="Profile site about Mr_ozin" />
	<meta property="og:title" content="Mr_ozin" />
	<meta property="og:site_title" content="Mr_ozin" />
	<meta property="og:description" content="Profile site about Mr_ozin" />
	<meta property="og:url" content="https://mrozin.me/" />
	<meta property="og:image" content="https://mrozin.me/images/author.jpg" />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="site-container">
	<slot />
</div>

<style>
	.site-container {
		max-width: 50rem;
		margin: 0 auto;
		padding: 3rem 1rem;
		color: #444;
	}
</style>
