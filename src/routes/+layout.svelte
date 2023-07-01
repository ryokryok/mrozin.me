<script lang="ts">
	import './global.css';
</script>

<div class="site-container">
	<slot />
</div>

<style>
	.site-container {
		max-width: 50rem;
		margin: 0 auto;
		padding: 3rem 0rem;
		color: #444;
	}
</style>
