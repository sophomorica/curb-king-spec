<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import StockPhoto from '$lib/components/StockPhoto.svelte';
	import { addressLines, pages, people, shop, site } from '$lib/content';
	import { photos } from '$lib/photos';
</script>

<Seo title={pages.about.title} description={pages.about.description} path={pages.about.path} />

<header class="mast">
	<div class="mast-media" aria-hidden="true">
		<img
			src={photos.workshop.src}
			alt=""
			width={photos.workshop.width}
			height={photos.workshop.height}
			sizes="100vw"
			fetchpriority="high"
		/>
	</div>
	<div class="mast-copy">
		<p class="kicker">About the shop</p>
		<h1 class="display">{people.founder} started a machine shop. The curbers came later.</h1>
	</div>
</header>

<Reveal>
	<section class="grid">
		<StockPhoto photo={photos.crewSite} sizes="(min-width: 800px) 50vw, 100vw" />
		<StockPhoto photo={photos.duskField} grade="dusk" sizes="(min-width: 800px) 50vw, 100vw" />
	</section>
</Reveal>

<article class="page">
	<section>
		<p>
			{site.legalName} — Curb-King — is at {shop.street}, {shop.city}, {shop.regionName}
			{shop.postal}. {people.founder} established Tool Engineering and Manufacturing here in
			{people.foundedYear}. {people.gm} is general manager.
		</p>
		<p>
			The public history is short and specific: early years making parts, including government work;
			the 1980s building curb equipment for other companies; then their own machines, including the
			Twin Auger in 1994, a ram machine in 1996, and the Dasher in 2019.
		</p>
		<p>
			They manufacture machines, mixers, and trailers in-house. The published limited warranty on
			Curb-King equipment is two years from purchase by the original owner, covering workmanship and
			materials under normal use. Freight and the usual exclusions sit with the factory terms — ask
			for the current sheet.
		</p>
	</section>

	<dl>
		<div>
			<dt>Legal name</dt>
			<dd>{site.legalName}</dd>
		</div>
		<div>
			<dt>Trade name</dt>
			<dd>{site.name}</dd>
		</div>
		<div>
			<dt>Founded</dt>
			<dd>{people.foundedYear}, {shop.city}</dd>
		</div>
		<div>
			<dt>General manager</dt>
			<dd>{people.gm}</dd>
		</div>
		<div>
			<dt>Address</dt>
			<dd>
				{#each addressLines() as line (line)}
					{line}<br />
				{/each}
			</dd>
		</div>
	</dl>
</article>

<style>
	.mast {
		position: relative;
		min-height: 22rem;
		display: grid;
		align-content: end;
		padding: 5.5rem 1rem 2rem;
		color: var(--color-paper);
		overflow: hidden;
	}

	.mast-media {
		position: absolute;
		inset: 0;
	}

	.mast-media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.mast-media::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg, rgb(18 14 11 / 0.2), rgb(18 14 11 / 0.82));
	}

	.mast-copy {
		position: relative;
		max-width: 42rem;
	}

	.kicker {
		margin: 0 0 0.6rem;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: #e0b089;
	}

	h1 {
		margin: 0;
		font-size: clamp(3rem, 10vw, 5rem);
	}

	.grid {
		display: grid;
		gap: 0.7rem;
		max-width: 76rem;
		margin: 0 auto;
		padding: 1.4rem 1rem 0;
	}

	.page {
		max-width: 44rem;
		margin: 0 auto;
		padding: 2rem 1rem 4rem;
	}

	p {
		margin: 0 0 1rem;
		font-size: 1.12rem;
		line-height: 1.65;
	}

	dl {
		margin: 2rem 0 0;
		border-top: 1px solid var(--color-iron);
	}

	dl div {
		display: grid;
		gap: 0.25rem;
		padding: 0.9rem 0;
		border-bottom: 1px solid var(--color-rule);
	}

	dt {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-dust);
	}

	dd {
		margin: 0;
		font-size: 1.15rem;
	}

	@media (min-width: 700px) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}

		dl div {
			grid-template-columns: 10rem 1fr;
			align-items: baseline;
		}
	}
</style>
