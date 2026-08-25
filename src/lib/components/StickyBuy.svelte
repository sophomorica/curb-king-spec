<script lang="ts">
	import { phones, starter } from '$lib/content';
</script>

<div class="buy" role="navigation" aria-label="Call or open the starter package">
	<a class="call" href="tel:{phones.sales.tel}">Call {phones.sales.label}</a>
	<a class="kit" href="/machines#starter">Starter {starter.priceLabel}</a>
</div>

<style>
	.buy {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 50;
		display: grid;
		grid-template-columns: 1.15fr 1fr;
		gap: 0.45rem;
		padding: 0.55rem 0.7rem calc(0.55rem + env(safe-area-inset-bottom));
		background: color-mix(in srgb, var(--color-dusk) 94%, transparent);
		border-top: 1px solid color-mix(in srgb, var(--color-steel) 45%, transparent);
		backdrop-filter: blur(10px);
	}

	a {
		display: grid;
		place-items: center;
		min-height: 2.7rem;
		padding: 0.45rem 0.5rem;
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		text-decoration: none;
		text-align: center;
	}

	.call {
		background: var(--color-ember);
		color: white;
	}

	.kit {
		background: var(--color-paper);
		color: var(--color-dusk);
	}

	@media (min-width: 880px) {
		.buy {
			display: none;
		}
	}
</style>
