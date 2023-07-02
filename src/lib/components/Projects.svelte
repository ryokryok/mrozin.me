<script lang="ts">
	import Fa from 'svelte-fa';
	import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
	import type { Project } from '$lib/types';
	export let projects: Project[];
</script>

<div class="content-root">
	<h2 class="content-title">Projects</h2>
	{#each projects as project}
		<article>
			<h3 class="project-title">{project.title}</h3>
			<p class="project-description">{project.description}</p>
			<p class="project-description">Tech stack: {project.stacks.join(' + ')}</p>
			{#if project.href !== undefined}
				<a href={project.href} target="_blank" class="project-link"
					><Fa icon={faExternalLink} /> {project.href}</a
				>
			{/if}
		</article>
	{/each}
</div>

<style>
	.content-root {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.content-title {
		color: #000;
		font-size: 2rem;
	}
	.project-title {
		color: #000;
		font-size: 1.5rem;
		font-weight: bold;
		padding-bottom: 0.25rem;
	}
	.project-link {
		font-size: 1rem;
		color: #444;
		font-weight: bold;
	}

	.project-description {
		font-size: 1rem;
		padding-bottom: 0.25rem;
	}
</style>
