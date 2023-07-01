<script lang="ts">
	import type { Link } from '$lib/types';

	export let links: Link[];
</script>

<div class="links">
	{#each links as link}
		<a href={link.href}>{link.name}</a>
	{/each}
</div>

<style>
	.links {
		display: flex;
		gap: 1rem;
	}
</style>
