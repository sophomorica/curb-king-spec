<script lang="ts">
	import Reveal from '$lib/components/Reveal.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import StockPhoto from '$lib/components/StockPhoto.svelte';
	import { pages, packages, phones, shop, starter } from '$lib/content';
	import { photos } from '$lib/photos';
</script>

<Seo
	title={pages.business.title}
	description={pages.business.description}
	path={pages.business.path}
/>

<header class="mast">
	<div class="mast-media" aria-hidden="true">
		<img
			src={photos.patio.src}
			alt=""
			width={photos.patio.width}
			height={photos.patio.height}
			sizes="100vw"
			fetchpriority="high"
		/>
	</div>
	<div class="mast-copy">
		<p class="kicker">Start a curbing business</p>
		<h1 class="display">Buy the kit. Run the shop. No franchise.</h1>
		<p>
			Curb-King sells landscape concrete curbing machines and “start your own business” equipment
			packages. You are not buying a territory, a brand license, or a royalty plan on this site.
		</p>
	</div>
</header>

<Reveal>
	<section class="paths">
		<a href="/machines#starter">
			<StockPhoto photo={photos.pour} caption={false} sizes="(min-width: 800px) 50vw, 100vw" />
			<p class="kicker">I want this machine</p>
			<h2 class="display">{starter.priceLabel} starter</h2>
			<p>Call and ask for the published kit.</p>
		</a>
		<a href="tel:{phones.sales.tel}">
			<StockPhoto photo={photos.mixer} caption={false} sizes="(min-width: 800px) 50vw, 100vw" />
			<p class="kicker">I want to start a shop</p>
			<h2 class="display">Call {phones.sales.label}</h2>
			<p>Say what you already own. They will build a list.</p>
		</a>
	</section>
</Reveal>

<Reveal>
	<ol>
		<li>
			<StockPhoto photo={photos.path} sizes="(min-width: 900px) 30vw, 100vw" />
			<strong>01 — Equipment</strong>
			<p>
				The published starter is {starter.priceLabel}: gas machine, mixer, bed-edger, and slipforms.
				Other kits are listed from {packages.rangeLabel}.
			</p>
		</li>
		<li>
			<StockPhoto photo={photos.lawnFinish} sizes="(min-width: 900px) 30vw, 100vw" />
			<strong>02 — You own it</strong>
			<p>
				The machines ship from {shop.city}. After the sale, the equipment is yours. That is the
				whole point of a kit instead of a franchise.
			</p>
		</li>
		<li>
			<StockPhoto photo={photos.crewHose} sizes="(min-width: 900px) 30vw, 100vw" />
			<strong>03 — Talk to the factory</strong>
			<p>
				Curb-King publishes factory training and ongoing support on their current site. Ask what
				that looks like for your crew when you call — this spec does not invent a curriculum or a
				payback story.
			</p>
		</li>
	</ol>
</Reveal>

<section class="panel">
	<h2 class="display">What we will not put on this page</h2>
	<p>
		No income claims. No fake reviews. No “average feet per day.” If you want numbers, get them from
		the shop, from local bids, and from your own job costing.
	</p>
	<a href="tel:{phones.sales.tel}">Call {phones.sales.label}</a>
</section>

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
		background: linear-gradient(180deg, rgb(18 14 11 / 0.25), rgb(18 14 11 / 0.8));
	}

	.mast-copy {
		position: relative;
		max-width: 40rem;
	}

	.kicker {
		margin: 0 0 0.55rem;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: #e0b089;
	}

	h1 {
		margin: 0 0 0.9rem;
		font-size: clamp(3rem, 10vw, 5.2rem);
	}

	h2 {
		margin: 0 0 0.6rem;
		font-size: clamp(1.9rem, 5vw, 2.8rem);
	}

	p {
		margin: 0;
		font-size: 1.1rem;
		line-height: 1.6;
	}

	.paths,
	ol {
		max-width: 76rem;
		margin: 0 auto;
		padding: 2rem 1rem;
		display: grid;
		gap: 0.9rem;
	}

	.paths a,
	li {
		display: grid;
		background: var(--color-card);
		border: 1px solid var(--color-iron);
		text-decoration: none;
		padding-bottom: 1.1rem;
		transition: transform 0.35s ease;
	}

	.paths a:hover {
		transform: translateY(-3px);
	}

	.paths .kicker,
	.paths h2,
	.paths p,
	li strong,
	li p {
		padding-left: 1.05rem;
		padding-right: 1.05rem;
	}

	.paths .kicker {
		margin-top: 1rem;
		color: var(--color-grass);
	}

	ol {
		list-style: none;
	}

	li strong {
		display: block;
		margin: 0.9rem 0 0.4rem;
		font-family: var(--font-display);
		font-size: 1.7rem;
		font-weight: 500;
		letter-spacing: -0.02em;
	}

	.panel {
		max-width: 76rem;
		margin: 0 auto 3rem;
		padding: 1.4rem 1.15rem 1.5rem;
		background: var(--color-grass-deep);
		color: var(--color-cream);
	}

	.panel a {
		display: inline-block;
		margin-top: 1rem;
		padding: 0.8rem 1rem;
		background: var(--color-cream);
		color: var(--color-dusk);
		font-family: var(--font-mono);
		font-size: 0.78rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		text-decoration: none;
	}

	@media (min-width: 800px) {
		.paths {
			grid-template-columns: 1fr 1fr;
		}

		ol {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.paths a:hover {
			transform: none;
		}
	}
</style>
