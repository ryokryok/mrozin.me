<script lang="ts">
	import Avatar from './Avatar.svelte';
	import Links from './Links.svelte';
	import Projects from './Projects.svelte';
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
	<title>Mr_ozin</title>
	<meta name="description" content="Profile site about Mr_ozin" />
	<meta name="og:title" content="Mr_ozin" />
	<meta name="og:site_title" content="Mr_ozin" />
	<meta name="og:description" content="Profile site about Mr_ozin" />
	<meta name="og:url" content="https://mrozin.me/" />
	<meta name="og:image" content="https://mrozin.me/images/author.jpg" />
	<meta name="og:type" content="website" />
</svelte:head>

<Avatar {...author} />

<Links {links} />

<Projects {projects} />
