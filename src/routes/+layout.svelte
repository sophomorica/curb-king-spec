<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import StickyBuy from '$lib/components/StickyBuy.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#120e0b" />
</svelte:head>

<div class="shell grain">
	<Header />
	<main id="main">
		{@render children()}
	</main>
	<Footer />
	<StickyBuy />
</div>

<style>
	.shell {
		min-height: 100dvh;
	}

	main {
		background: var(--color-cream);
		padding-bottom: 4.6rem;
	}

	@media (min-width: 880px) {
		main {
			padding-bottom: 0;
		}
	}
</style>
