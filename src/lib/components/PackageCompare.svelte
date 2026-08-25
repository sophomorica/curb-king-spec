<script lang="ts">
	import { compare, phones } from '$lib/content';
</script>

<div class="wrap">
	<div class="cols">
		{#each compare.columns as col (col.id)}
			<article class={['card', col.featured && 'featured']} id={col.id === 'starter' ? undefined : col.id}>
				<p class="kicker">{col.featured ? 'Most direct buy' : 'Built to order'}</p>
				<h3 class="display">{col.name}</h3>
				<p class="price">{col.price}</p>
				<p class="who">{col.who}</p>
				<a href="tel:{phones.sales.tel}">{col.cta}</a>
			</article>
		{/each}
	</div>

	<div class="table-wrap" role="region" aria-label="Package comparison">
		<table>
			<caption>What is published in each path</caption>
			<thead>
				<tr>
					<th scope="col">In the kit</th>
					<th scope="col">Starter</th>
					<th scope="col">Custom</th>
				</tr>
			</thead>
			<tbody>
				{#each compare.rows as row (row.label)}
					<tr>
						<th scope="row">{row.label}</th>
						<td>{row.starter}</td>
						<td>{row.custom}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<p class="note">{compare.note}</p>
</div>

<style>
	.wrap {
		display: grid;
		gap: 1.4rem;
	}

	.cols {
		display: grid;
		gap: 0.9rem;
	}

	.card {
		padding: 1.2rem 1.1rem 1.3rem;
		border: 1px solid var(--color-iron);
		background: var(--color-card);
	}

	.featured {
		background: var(--color-dusk);
		color: var(--color-paper);
		box-shadow: 0 18px 40px rgb(18 14 11 / 0.18);
	}

	.kicker {
		margin: 0 0 0.45rem;
		font-family: var(--font-mono);
		font-size: 0.66rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-ember);
	}

	article:not(.featured) .kicker {
		color: var(--color-grass);
	}

	h3 {
		margin: 0 0 0.35rem;
		font-size: clamp(1.8rem, 4vw, 2.4rem);
	}

	.price {
		margin: 0 0 0.55rem;
		font-family: var(--font-display);
		font-size: clamp(2.4rem, 7vw, 3.4rem);
		line-height: 0.88;
		letter-spacing: -0.03em;
		color: var(--color-ember);
	}

	article:not(.featured) .price {
		color: var(--color-iron);
	}

	.who {
		margin: 0 0 1rem;
		font-size: 1.05rem;
		line-height: 1.5;
	}

	a {
		display: inline-block;
		padding: 0.8rem 0.95rem;
		background: var(--color-ember);
		color: white;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		text-decoration: none;
	}

	article:not(.featured) a {
		background: transparent;
		color: var(--color-iron);
		border: 1px solid var(--color-iron);
	}

	.table-wrap {
		outflow-x: auto;
		border: 1px solid var(--color-iron);
		background: var(--color-card);
	}

	table {
		width: 100%;
		border-collapse: collapse;
		min-width: 34rem;
	}

	caption {
		padding: 0.7rem 0.9rem;
		text-align: left;
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-dust);
		border-bottom: 1px solid var(--color-rule);
	}

	th,
	td {
		padding: 0.75rem 0.9rem;
		text-align: left;
		font-size: 0.98rem;
		border-bottom: 1px solid var(--color-rule);
		vertical-align: top;
	}

	thead th {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-dust);
	}

	tbody th {
		font-weight: 600;
		width: 34%;
	}

	tr td:first-of-type {
		color: var(--color-ember-ink);
		font-weight: 600;
	}

	.note {
		margin: 0;
		font-size: 0.92rem;
		color: var(--color-slag);
	}

	@media (min-width: 800px) {
		.cols {
			grid-template-columns: 1.08fr 0.92fr;
			align-items: stretch;
		}
	}
</style>
