<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import ZennLogo from './ZennLogo.svelte';
	import type { Link } from '$lib/types';

	export let links: Link[];
</script>

<div class="links">
	{#each links as link}
		<a href={link.href} class="link-item" target="_blank" rel="noopener noreferrer">
			{#if link.name === 'GitHub'}
				<Fa icon={faGithub} />
			{:else if link.name === 'Twitter'}
				<Fa icon={faTwitter} />
			{:else if link.name === 'Zenn'}
				<ZennLogo width={'2rem'} height={'2rem'} />
			{:else}
				<p>{link.name}</p>
			{/if}
		</a>
	{/each}
</div>

<style>
	.links {
		display: flex;
		gap: 1rem;
	}

	.link-item {
		font-size: 2rem;
		color: black;
	}
</style>
