<script lang="ts">
	import { page } from '$app/state';
	import { phones } from '$lib/content';
</script>

<svelte:head>
	<title>{page.status} | Curb-King spec</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section>
	<p class="kicker">Ticket {page.status}</p>
	<h1 class="display">
		{page.status === 404 ? 'That page is not poured yet.' : 'Something jammed.'}
	</h1>
	<p>{page.error?.message ?? 'The page you asked for is not on this spec site.'}</p>
	<p>
		<a href="/">Back to home</a>
		<a href="tel:{phones.sales.tel}">Call {phones.sales.label}</a>
	</p>
</section>

<style>
	section {
		max-width: 40rem;
		margin: 0 auto;
		padding: 4rem 1rem 5rem;
	}

	.kicker {
		margin: 0 0 0.6rem;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-grass);
	}

	h1 {
		margin: 0 0 1rem;
		font-size: clamp(3rem, 10vw, 5rem);
	}

	p {
		font-size: 1.12rem;
		line-height: 1.6;
	}

	a {
		margin-right: 1rem;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
</style>
