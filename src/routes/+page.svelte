<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import Links from '$lib/components/Links.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import type { Avatar as Author, Link, Project } from '$lib/types';

	const author: Author = {
		name: 'Mr_ozin',
		description: 'A Japanese Web Frontend Developer',
		src: '/images/author.jpg'
	};

	const links: Link[] = [
		{
			name: 'GitHub',
			href: 'https://github.com/ryokryok'
		},
		{
			name: 'Twitter',
			href: 'https://twitter.com/Mr_ozin'
		},
		{
			name: 'Zenn',
			href: 'https://zenn.dev/mr_ozin'
		},
		{
			name: 'Hatena',
			href: 'https://mr-ozin.hatenablog.jp/'
		}
	];

	const projects: Project[] = [
		{
			title: 'mrozin.me',
			description: `I aimed to create a "simple & ultra fast" web page.`,
			stacks: ['SvelteKit', 'Cloudflare Pages'],
			href: 'https://mrozin.me/'
		}
	];
</script>

<div class="content-layout">
	<Avatar {...author} />

	<Links {links} />

	<Projects {projects} />
</div>

<style>
	.content-layout {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
