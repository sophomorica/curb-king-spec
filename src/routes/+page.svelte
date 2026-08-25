<script lang="ts">
	import PackageCompare from '$lib/components/PackageCompare.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import StockPhoto from '$lib/components/StockPhoto.svelte';
	import { pages, packages, people, phones, shop, site, starter } from '$lib/content';
	import { photos } from '$lib/photos';
</script>

<Seo title={pages.home.title} description={pages.home.description} path={pages.home.path} />

<section class="hero">
	<div class="hero-media" aria-hidden="true">
		<img
			src={photos.hero.src}
			alt=""
			width={photos.hero.width}
			height={photos.hero.height}
			sizes="100vw"
			fetchpriority="high"
			decoding="sync"
		/>
	</div>
	<div class="hero-copy">
		<p class="kicker">{site.legalName} · {shop.city}, {shop.regionName}</p>
		<h1 class="display">Landscape curb machines. Equipment to start a shop.</h1>
		<p class="lead">
			Curb-King builds concrete landscape curbing machines and turnkey kits. You buy the equipment
			and run your own work. Not a franchise.
		</p>
		<div class="cta">
			<a class="primary pulse" href="tel:{phones.sales.tel}">Call {phones.sales.label}</a>
			<a class="ghost" href="/machines#starter">See the {starter.priceLabel} starter</a>
		</div>
		<p class="fine">
			Financing: ask for {phones.financing.name} at
			<a href="tel:{phones.financing.tel}">{phones.financing.display}</a>.
		</p>
	</div>
	<aside class="ticket" aria-label="Published starter package">
		<p>Published starter</p>
		<strong>{starter.priceLabel}</strong>
		<span>Gas machine · mixer · bed-edger · slipforms</span>
	</aside>
	<p class="hero-credit">Stock · {photos.hero.credit} · not Curb-King equipment</p>
</section>

<Reveal>
	<section class="paths">
		<a class="path" href="/machines#starter">
			<StockPhoto photo={photos.pour} caption={false} sizes="(min-width: 800px) 50vw, 100vw" />
			<div>
				<p class="kicker">I want this machine</p>
				<h2 class="display">The {starter.priceLabel} starter.</h2>
				<p>Four published pieces. Call the shop and ask for that kit.</p>
			</div>
		</a>
		<a class="path" href="/business">
			<StockPhoto photo={photos.patio} grade="dusk" caption={false} sizes="(min-width: 800px) 50vw, 100vw" />
			<div>
				<p class="kicker">I want to start a business</p>
				<h2 class="display">Buy the kit. Run the shop.</h2>
				<p>No franchise fee on this page. The equipment is yours after the sale.</p>
			</div>
		</a>
	</section>
</Reveal>

<Reveal>
	<section class="band">
		<div class="band-copy">
			<p class="kicker">What ships in the starter</p>
			<h2 class="display">Four pieces. Published at {starter.priceLabel}.</h2>
			<ol>
				{#each starter.items as item, i (item.name)}
					<li>
						<span class="n">{String(i + 1).padStart(2, '0')}</span>
						<span>
							<strong>{item.name}</strong>
							<em>{item.priceLabel}</em>
						</span>
					</li>
				{/each}
			</ol>
			<p class="note">{starter.note} Custom kits run {packages.rangeLabel}.</p>
			<a class="text" href="/machines#starter">Compare packages</a>
		</div>
		<div class="mosaic">
			<StockPhoto photo={photos.mixer} sizes="(min-width: 900px) 28vw, 100vw" />
			<StockPhoto photo={photos.path} sizes="(min-width: 900px) 28vw, 100vw" />
		</div>
	</section>
</Reveal>

<Reveal>
	<section class="compare">
		<p class="kicker">Choose a path</p>
		<h2 class="display">Starter or custom. Then call.</h2>
		<PackageCompare />
	</section>
</Reveal>

<Reveal>
	<section class="split">
		<article>
			<StockPhoto photo={photos.workshop} sizes="(min-width: 900px) 40vw, 100vw" />
			<p class="kicker">The shop</p>
			<h2 class="display">Brigham City since {people.foundedYear}.</h2>
			<p>
				{people.founder} founded Tool Engineering &amp; Manufacturing in {people.foundedYear}.
				{people.gm} is general manager. The plant is still at {shop.street}.
			</p>
			<a class="text" href="/about">Read the shop history</a>
		</article>
		<article>
			<StockPhoto photo={photos.lawnFinish} sizes="(min-width: 900px) 40vw, 100vw" />
			<p class="kicker">Not a franchise</p>
			<h2 class="display">You own the machines.</h2>
			<p>
				This is a manufacturer selling equipment — including “start your own business” kits — from a
				shop in {shop.city}. There is no franchise fee on this page because Curb-King is not selling
				a franchise.
			</p>
			<a class="text" href="/business">How a curbing shop starts</a>
		</article>
	</section>
</Reveal>

<section class="close">
	<div class="close-media" aria-hidden="true">
		<img src={photos.duskField.src} alt="" width={photos.duskField.width} height={photos.duskField.height} loading="lazy" />
	</div>
	<div class="close-copy">
		<p class="kicker">Ready</p>
		<h2 class="display">Call the number on the trucks.</h2>
		<p>
			{phones.sales.label} · {phones.sales.display}. Ask for the {starter.priceLabel} starter, or say
			what you already own.
		</p>
		<div class="cta">
			<a class="primary" href="tel:{phones.sales.tel}">Call {phones.sales.label}</a>
			<a class="ghost light" href="/contact">Leave a callback ticket</a>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: min(92dvh, 52rem);
		display: grid;
		align-content: end;
		padding: 6.5rem 1rem 2.4rem;
		color: var(--color-paper);
		overflow: hidden;
	}

	.hero-media {
		position: absolute;
		inset: 0;
	}

	.hero-media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		animation: kenburns 22s linear both;
	}

	.hero-media::after {
		content: '';
		position: absolute;
		inset: 0;
		background:
			linear-gradient(180deg, rgb(18 14 11 / 0.28) 0%, rgb(18 14 11 / 0.18) 32%, rgb(18 14 11 / 0.78) 100%),
			linear-gradient(90deg, rgb(18 14 11 / 0.62) 0%, rgb(18 14 11 / 0.12) 70%);
	}

	.hero-copy {
		position: relative;
		max-width: 38rem;
		animation: rise-in 0.7s ease both;
	}

	.kicker {
		margin: 0 0 0.7rem;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: #e0b089;
	}

	h1 {
		margin: 0 0 1rem;
		font-size: clamp(3.1rem, 11vw, 6.2rem);
	}

	h2 {
		margin: 0 0 0.75rem;
		font-size: clamp(2.1rem, 6vw, 3.3rem);
	}

	.lead,
	p {
		margin: 0;
		font-size: 1.12rem;
		line-height: 1.6;
	}

	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
		margin: 1.3rem 0 0.75rem;
	}

	.primary,
	.ghost,
	.text {
		font-family: var(--font-mono);
		font-size: 0.76rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		text-decoration: none;
	}

	.primary,
	.ghost {
		padding: 0.9rem 1.05rem;
	}

	.primary {
		background: var(--color-ember);
		color: white;
	}

	.pulse {
		animation: ember-pulse 2.8s ease-out 2;
	}

	.ghost {
		border: 1px solid color-mix(in srgb, var(--color-paper) 55%, transparent);
		color: var(--color-paper);
	}

	.ghost.light {
		border-color: color-mix(in srgb, var(--color-paper) 50%, transparent);
	}

	.text {
		display: inline-block;
		margin-top: 1rem;
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	.fine {
		font-size: 0.95rem;
		color: #d8ccb6;
	}

	.ticket {
		position: relative;
		justify-self: start;
		margin-top: 1.4rem;
		width: min(16.5rem, 100%);
		padding: 0.85rem 0.95rem 0.95rem;
		background: color-mix(in srgb, var(--color-cream) 92%, white);
		color: var(--color-ember-ink);
		border: 2px solid var(--color-ember);
		transform: rotate(-4deg);
		animation: rise-in 0.8s ease 0.15s both;
	}

	.ticket p,
	.ticket span {
		margin: 0;
		font-family: var(--font-mono);
		font-size: 0.66rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.ticket strong {
		display: block;
		margin: 0.15rem 0 0.25rem;
		font-family: var(--font-display);
		font-size: 3.1rem;
		line-height: 0.85;
		color: var(--color-ember);
	}

	.hero-credit {
		position: relative;
		margin-top: 1.2rem;
		font-family: var(--font-mono);
		font-size: 0.62rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #c9b89f;
	}

	.paths {
		display: grid;
		gap: 0.9rem;
		max-width: 76rem;
		margin: 0 auto;
		padding: 2rem 1rem 0.5rem;
	}

	.path {
		display: grid;
		text-decoration: none;
		background: var(--color-card);
		border: 1px solid var(--color-iron);
		overflow: hidden;
		transition: transform 0.35s ease;
	}

	.path:hover {
		transform: translateY(-3px);
	}

	.path .kicker {
		color: var(--color-grass);
	}

	.path div {
		padding: 1.1rem 1.05rem 1.25rem;
	}

	.band,
	.compare,
	.split {
		max-width: 76rem;
		margin: 0 auto;
		padding: 2.4rem 1rem;
	}

	.band {
		display: grid;
		gap: 1.4rem;
	}

	.band-copy {
		padding: 1.4rem 1.15rem 1.5rem;
		background: var(--color-dusk);
		color: var(--color-cream);
	}

	.band-copy .kicker {
		color: #e0b089;
	}

	ol {
		list-style: none;
		margin: 1.3rem 0 1rem;
		padding: 0;
		display: grid;
		gap: 0.7rem;
	}

	li {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.8rem;
		padding-bottom: 0.65rem;
		border-bottom: 1px solid #4a4036;
	}

	.n {
		font-family: var(--font-display);
		font-size: 1.7rem;
		color: #e0b089;
	}

	strong,
	em {
		display: block;
	}

	em {
		margin-top: 0.12rem;
		font-style: normal;
		font-family: var(--font-mono);
		font-size: 0.82rem;
		color: var(--color-wet);
	}

	.note {
		color: #d8ccb6;
		font-size: 0.98rem;
	}

	.band .text,
	.split .text {
		color: inherit;
	}

	.compare .kicker {
		color: var(--color-grass);
	}

	.split {
		display: grid;
		gap: 1.1rem;
	}

	article {
		background: var(--color-card);
		border: 1px solid var(--color-iron);
		padding-bottom: 1.2rem;
	}

	article :global(.shot) {
		margin-bottom: 0.2rem;
	}

	article .kicker,
	article h2,
	article p,
	article .text {
		padding-left: 1.1rem;
		padding-right: 1.1rem;
	}

	article .kicker {
		margin-top: 1rem;
		color: var(--color-grass);
	}

	.close {
		position: relative;
		min-height: 22rem;
		display: grid;
		align-content: end;
		padding: 4rem 1rem 3rem;
		color: var(--color-paper);
		overflow: hidden;
	}

	.close-media {
		position: absolute;
		inset: 0;
	}

	.close-media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.close-media::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg, rgb(18 14 11 / 0.25), rgb(18 14 11 / 0.82));
	}

	.close-copy {
		position: relative;
		max-width: 76rem;
		margin: 0 auto;
		width: 100%;
	}

	.close .kicker {
		color: #e0b089;
	}

	@media (min-width: 900px) {
		.hero {
			padding: 8rem 2rem 3rem;
		}

		.ticket {
			position: absolute;
			right: 2rem;
			bottom: 3.4rem;
		}

		.paths,
		.band,
		.split {
			grid-template-columns: 1fr 1fr;
		}

		.paths {
			align-items: stretch;
		}

		ol {
			grid-template-columns: 1fr;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-media img {
			animation: none;
		}

		.path:hover {
			transform: none;
		}
	}
</style>
