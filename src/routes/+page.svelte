<script lang="ts">
	import Avatar from './Avatar.svelte';
	import Links from './Links.svelte';
	import type { Link } from '$lib/types';

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
</script>

<svelte:head>
	<title>Mr_ozin - A Web Developer</title>
	<meta name="description" content="Profile site about Mr_ozin" />
</svelte:head>

<Avatar {...author} />

<Links {links} />
