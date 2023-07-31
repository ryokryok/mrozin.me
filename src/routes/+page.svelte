<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import Links from '$lib/components/Links.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="content-layout">
	<Avatar name={data.name} description={data.description} avatar={data.avatar} />

	<Links links={data.sns} />

	<Projects projects={data.projects} />
</div>

<style>
	.content-layout {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
