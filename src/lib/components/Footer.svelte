<script lang="ts">
	import { addressLines, nav, people, phones, photoNote, shop, site } from '$lib/content';
</script>

<footer>
	<div class="inner">
		<div>
			<p class="kicker">{site.legalName}</p>
			<p class="display name">{site.name}</p>
			<p class="blurb">
				Landscape concrete curbing machines and start-a-shop kits. Built in {shop.city},
				{shop.regionName}. Founded {people.foundedYear}. Not a franchise.
			</p>
		</div>

		<div>
			<p class="kicker">Visit</p>
			<address>
				{#each addressLines() as line (line)}
					{line}<br />
				{/each}
			</address>
			<p>
				<a href="tel:{phones.sales.tel}">{phones.sales.label}</a><br />
				<a href="tel:{phones.financing.tel}"
					>Financing: {phones.financing.name}, {phones.financing.display}</a
				>
			</p>
		</div>

		<nav aria-label="Footer">
			<p class="kicker">Pages</p>
			<ul>
				{#each nav as item (item.href)}
					<li><a href={item.href}>{item.label}</a></li>
				{/each}
			</ul>
		</nav>
	</div>

	<p class="photos">{photoNote}</p>
	<p class="spec">{site.specNote}</p>
</footer>

<style>
	footer {
		background: var(--color-dusk);
		color: var(--color-paper);
		padding: 3rem 1rem 5.5rem;
	}

	.inner {
		display: grid;
		gap: 2rem;
		max-width: 76rem;
		margin: 0 auto 2rem;
	}

	.kicker {
		margin: 0 0 0.55rem;
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-dust);
	}

	.name {
		margin: 0 0 0.75rem;
		font-size: clamp(2.6rem, 8vw, 4.2rem);
		color: var(--color-cream);
	}

	.blurb,
	address,
	p,
	li {
		margin: 0;
		font-size: 1.02rem;
		line-height: 1.55;
	}

	address {
		font-style: normal;
		margin-bottom: 0.8rem;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 0.4rem;
	}

	a {
		text-decoration: underline;
		text-underline-offset: 0.18em;
	}

	.photos,
	.spec {
		max-width: 76rem;
		margin: 0 auto;
		font-family: var(--font-mono);
		font-size: 0.7rem;
		letter-spacing: 0.04em;
		color: #b7aa96;
	}

	.photos {
		padding-bottom: 0.65rem;
	}

	.spec {
		padding-top: 1.1rem;
		border-top: 1px solid #3a332c;
	}

	@media (min-width: 800px) {
		.inner {
			grid-template-columns: 1.4fr 1fr 0.7fr;
		}

		footer {
			padding-bottom: 1.6rem;
		}
	}
</style>
