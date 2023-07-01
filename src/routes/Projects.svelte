<script lang="ts">
	import Fa from 'svelte-fa';
	import { faLink } from '@fortawesome/free-solid-svg-icons';
	import type { Project } from '$lib/types';
	export let projects: Project[];
</script>

<div class="content-root">
	<h2 class="content-title">Projects</h2>
	{#each projects as project}
		<article>
			<h3 class="project-title">{project.title}</h3>
			<p class="project-description">{project.description}</p>
			<p class="project-description">Teck stack: {project.stacks.join(' + ')}</p>
			<a href={project.href} target="_blank" class="project-link"
				><Fa icon={faLink} /> {project.href}</a
			>
		</article>
	{/each}
</div>

<style>
	.content-root {
		padding: 2rem 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.content-title {
		color: #000;
		font-size: 2rem;
	}
	.project-title {
		color: #222;
		font-size: 1.5rem;
		font-weight: bold;
		padding-bottom: 0.25rem;
	}
	.project-link {
		font-size: 1rem;
		color: #888;
		font-weight: bold;
	}

	.project-description {
		font-size: 1.25rem;
		padding-bottom: 0.25rem;
	}
</style>
