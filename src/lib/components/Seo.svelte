<script lang="ts">
	import { page } from '$app/state';
	import { localBusinessJsonLd, site } from '$lib/content';

	let {
		title,
		description,
		path
	}: {
		title: string;
		description: string;
		path: string;
	} = $props();

	const origin = $derived(page.url.origin || site.url);
	const canonical = $derived(`${origin}${path === '/' ? '/' : path}`);
	const jsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@graph': [
				localBusinessJsonLd(origin),
				{
					'@type': 'WebSite',
					name: site.name,
					url: origin,
					publisher: { '@id': `${origin}/#business` }
				},
				{
					'@type': 'WebPage',
					name: title,
					description,
					url: canonical,
					isPartOf: { '@type': 'WebSite', url: origin }
				}
			]
		})
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta name="robots" content="index,follow" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:image" content="{origin}/og.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{origin}/og.jpg" />
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>
