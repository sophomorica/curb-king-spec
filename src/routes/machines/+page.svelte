<script lang="ts">
	import PackageCompare from '$lib/components/PackageCompare.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import StockPhoto from '$lib/components/StockPhoto.svelte';
	import { packages, pages, phones, starter } from '$lib/content';
	import { photos } from '$lib/photos';

	const pieces = [
		{ item: starter.items[0], photo: photos.pour },
		{ item: starter.items[1], photo: photos.mixer },
		{ item: starter.items[2], photo: photos.crewHose },
		{ item: starter.items[3], photo: photos.path }
	];
</script>

<Seo
	title={pages.machines.title}
	description={pages.machines.description}
	path={pages.machines.path}
/>

<header class="mast">
	<div class="mast-media" aria-hidden="true">
		<img
			src={photos.path.src}
			alt=""
			width={photos.path.width}
			height={photos.path.height}
			sizes="100vw"
			fetchpriority="high"
		/>
	</div>
	<div class="mast-copy">
		<p class="kicker">Machines / packages</p>
		<h1 class="display">The starter is called out on purpose.</h1>
		<p>
			This is the package Curb-King publishes for someone who needs a machine, a mixer, a bed-edger,
			and slipforms. Bigger or thinner lists are built to order.
		</p>
	</div>
</header>

<Reveal>
	<section id="starter" class="starter">
		<div class="copy">
			<p class="ticket">Ticket · Starter curb package</p>
			<h2 class="display">Starter curb package</h2>
			<p class="price">{starter.priceLabel}</p>
			<p>
				Listed piece total {starter.listedValueLabel}. {starter.note}
			</p>
			<a class="primary" href="tel:{phones.sales.tel}">Call {phones.sales.label} to order</a>
		</div>
		<StockPhoto photo={photos.mixer} priority sizes="(min-width: 800px) 46vw, 100vw" />
	</section>
</Reveal>

<Reveal>
	<section class="compare">
		<p class="kicker">Compare the two published paths</p>
		<h2 class="display">Pick a kit. Then pick up the phone.</h2>
		<PackageCompare />
	</section>
</Reveal>

<Reveal>
	<section class="pieces">
		<p class="kicker">What the starter lists</p>
		<h2 class="display">Four published pieces.</h2>
		<ul>
			{#each pieces as piece (piece.item.name)}
				<li>
					<StockPhoto photo={piece.photo} sizes="(min-width: 900px) 22vw, 50vw" />
					<strong>{piece.item.name}</strong>
					<b>{piece.item.priceLabel}</b>
				</li>
			{/each}
		</ul>
	</section>
</Reveal>

<Reveal>
	<section class="custom">
		<StockPhoto photo={photos.lawnFinish} sizes="(min-width: 800px) 40vw, 100vw" />
		<div>
			<h2 class="display">Custom packages</h2>
			<p>{packages.rangeNote}</p>
			<p>{packages.customNote}</p>
			<ul class="facts">
				<li>Mixer in the starter is the 9 cu ft unit, mounted on your trailer.</li>
				<li>Slipforms: three systems, six published styles to choose from.</li>
				<li>Financing questions go to Alan at {phones.financing.display}.</li>
			</ul>
		</div>
	</section>
</Reveal>

<aside>
	<p>
		This spec does not invent machine photos, horsepower claims, or package names beyond what
		Curb-King already publishes. Stock images are reference only. When you talk to the shop, ask for
		the current list.
	</p>
	<a href="/contact">Write the inquiry, then call</a>
</aside>

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
		max-width: 40rem;
	}

	.kicker {
		margin: 0 0 0.6rem;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: #e0b089;
	}

	.compare .kicker,
	.pieces .kicker {
		color: var(--color-grass);
	}

	h1 {
		margin: 0 0 0.8rem;
		font-size: clamp(3rem, 10vw, 5.2rem);
	}

	h2 {
		margin: 0 0 0.7rem;
		font-size: clamp(2rem, 6vw, 3rem);
	}

	p,
	li {
		font-size: 1.1rem;
		line-height: 1.6;
	}

	.starter,
	.compare,
	.pieces,
	.custom {
		max-width: 76rem;
		margin: 0 auto;
		padding: 2.2rem 1rem;
	}

	.starter {
		display: grid;
		gap: 1.2rem;
		scroll-margin-top: 5.2rem;
	}

	.copy {
		padding: 1.3rem 1.15rem 1.4rem;
		border: 1px solid var(--color-iron);
		background: var(--color-card);
	}

	.ticket {
		margin: 0 0 0.4rem;
		font-family: var(--font-mono);
		font-size: 0.7rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-dust);
	}

	.price {
		margin: 0.2rem 0 0.7rem;
		font-family: var(--font-display);
		font-size: clamp(3.4rem, 12vw, 5.5rem);
		line-height: 0.85;
		color: var(--color-ember);
	}

	.primary,
	aside a {
		display: inline-block;
		margin-top: 1rem;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		text-decoration: none;
	}

	.primary {
		padding: 0.85rem 1rem;
		background: var(--color-ember);
		color: white;
	}

	.pieces ul {
		list-style: none;
		margin: 1.2rem 0 0;
		padding: 0;
		display: grid;
		gap: 0.85rem;
	}

	.pieces li {
		background: var(--color-card);
		border: 1px solid var(--color-iron);
		padding-bottom: 0.9rem;
	}

	.pieces strong,
	.pieces b {
		display: block;
		padding: 0.75rem 0.9rem 0;
	}

	.pieces b {
		padding-top: 0.2rem;
		font-family: var(--font-mono);
		font-size: 0.88rem;
		color: var(--color-ember-ink);
	}

	.custom {
		display: grid;
		gap: 1.2rem;
	}

	.facts {
		margin: 1.1rem 0 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 0.65rem;
	}

	.facts li {
		padding-left: 0.9rem;
		border-left: 3px solid var(--color-ember);
	}

	aside {
		max-width: 76rem;
		margin: 0 auto 3rem;
		padding: 1.2rem 1.1rem 1.4rem;
		background: var(--color-dusk);
		color: var(--color-paper);
	}

	aside a {
		color: #e0b089;
		text-decoration: underline;
		text-underline-offset: 0.18em;
	}

	@media (min-width: 800px) {
		.starter,
		.custom {
			grid-template-columns: 0.95fr 1.05fr;
			align-items: center;
		}

		.pieces ul {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
