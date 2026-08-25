<script lang="ts">
	import InquiryForm from '$lib/components/InquiryForm.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import StockPhoto from '$lib/components/StockPhoto.svelte';
	import { addressLines, pages, phones, shop } from '$lib/content';
	import { photos } from '$lib/photos';
</script>

<Seo
	title={pages.contact.title}
	description={pages.contact.description}
	path={pages.contact.path}
/>

<article class="page">
	<div>
		<p class="kicker">Contact</p>
		<h1 class="display">Call the shop. That is still the fastest door.</h1>
		<p class="lead">
			Use the number on the trucks and the old site. This page does not invent an email address.
		</p>

		<StockPhoto photo={photos.suburb} grade="dusk" sizes="(min-width: 900px) 40vw, 100vw" />
		<p class="cap">Stock neighborhood reference — not the Brigham City plant.</p>

		<ul>
			<li>
				<span>Sales</span>
				<a href="tel:{phones.sales.tel}">{phones.sales.label}</a>
				<small>{phones.sales.display}</small>
			</li>
			<li>
				<span>Financing</span>
				<a href="tel:{phones.financing.tel}">{phones.financing.name}, {phones.financing.display}</a>
			</li>
			<li>
				<span>Mail</span>
				<address>
					{#each addressLines() as line (line)}
						{line}<br />
					{/each}
				</address>
				<a href={shop.mapsUrl} rel="noopener noreferrer">Open in Google Maps</a>
			</li>
		</ul>
	</div>

	<section>
		<h2 class="display">Inquiry ticket</h2>
		<InquiryForm />
	</section>
</article>

<style>
	.page {
		display: grid;
		gap: 2rem;
		max-width: 76rem;
		margin: 0 auto;
		padding: 2rem 1rem 4rem;
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
		font-size: clamp(3rem, 9vw, 5rem);
	}

	h2 {
		margin: 0 0 1rem;
		font-size: clamp(2rem, 5vw, 2.8rem);
	}

	.lead,
	li,
	address {
		font-size: 1.12rem;
		line-height: 1.6;
	}

	.lead {
		margin: 0 0 1.3rem;
		max-width: 34rem;
	}

	.cap {
		margin: 0.4rem 0 1.3rem;
		font-family: var(--font-mono);
		font-size: 0.66rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-dust);
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 1rem;
	}

	li {
		display: grid;
		gap: 0.25rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--color-rule);
	}

	span {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-dust);
	}

	small {
		color: var(--color-slag);
	}

	address {
		font-style: normal;
	}

	section {
		padding: 1.2rem 1.1rem 1.4rem;
		border: 1px solid var(--color-iron);
		background: var(--color-card);
	}

	@media (min-width: 900px) {
		.page {
			grid-template-columns: 0.9fr 1.1fr;
			align-items: start;
		}
	}
</style>
