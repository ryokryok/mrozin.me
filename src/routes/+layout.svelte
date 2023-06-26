<script lang="ts">
	import './global.css';
</script>

<div class="site-root">
	<div class="site-container">
		<nav>
			<a href="/">Home</a>
			<a href="/project">Project</a>
		</nav>

		<div class="main-content">
			<slot />
		</div>
	</div>
</div>

<style>
	.site-root {
		width: 100%;
		height: 100%;
	}

	.site-container {
		max-width: 40rem;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	.main-content {
		padding: 1rem 0;
	}
</style>
