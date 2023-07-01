<script lang="ts">
	import Avatar from './Avatar.svelte';
	import Links from './Links.svelte';
	import Projects from './Projects.svelte';
	import type { Link, Project } from '$lib/types';

	const author = {
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

<svelte:head>
	<title>Mr_ozin - A Web Developer</title>
	<meta name="description" content="Profile site about Mr_ozin" />
</svelte:head>

<Avatar {...author} />

<Links {links} />

<Projects {projects} />
