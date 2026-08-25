<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { nav, phones, site, starter } from '$lib/content';

	let open = $state(false);

	afterNavigate(() => {
		open = false;
	});
</script>

<a class="skip" href="#main">Skip to content</a>

<header>
	<div class="bar">
		<a class="brand" href="/" aria-label="{site.name} home">
			<span class="mark" aria-hidden="true"></span>
			<span class="word">
				<span class="name">{site.name}</span>
				<span class="legal">Brigham City, Utah</span>
			</span>
		</a>

		<nav class="desk" aria-label="Primary">
			{#each nav as item (item.href)}
				<a href={item.href} aria-current={page.url.pathname === item.href ? 'page' : undefined}>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="actions">
			<a class="kit" href="/machines#starter">Starter {starter.priceLabel}</a>
			<a class="call" href="tel:{phones.sales.tel}">Call {phones.sales.label}</a>
		</div>

		<button
			type="button"
			class="menu"
			aria-expanded={open}
			aria-controls="mobile-nav"
			onclick={() => (open = !open)}
		>
			{open ? 'Close' : 'Menu'}
		</button>
	</div>

	{#if open}
		<nav id="mobile-nav" class="mobile" aria-label="Mobile">
			{#each nav as item (item.href)}
				<a href={item.href} aria-current={page.url.pathname === item.href ? 'page' : undefined}>
					{item.label}
				</a>
			{/each}
			<a class="call-block" href="/machines#starter">Starter {starter.priceLabel}</a>
			<a class="call-block ember" href="tel:{phones.sales.tel}">Call {phones.sales.label}</a>
		</nav>
	{/if}
</header>

<style>
	.skip {
		position: absolute;
		left: 0.75rem;
		top: -3rem;
		z-index: 80;
		background: var(--color-ember);
		color: white;
		padding: 0.5rem 0.75rem;
		font-family: var(--font-mono);
		font-size: 0.8rem;
	}

	.skip:focus {
		top: 0.75rem;
	}

	header {
		position: sticky;
		top: 0;
		z-index: 40;
		background: color-mix(in srgb, var(--color-dusk) 96%, transparent);
		color: var(--color-cream);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid color-mix(in srgb, var(--color-steel) 28%, transparent);
	}

	.bar {
		display: flex;
		align-items: center;
		gap: 1rem;
		max-width: 76rem;
		margin: 0 auto;
		padding: 0.65rem 1rem;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		text-decoration: none;
		min-width: 0;
	}

	.mark {
		width: 1.7rem;
		height: 1.15rem;
		flex: none;
		background: var(--color-concrete);
		clip-path: polygon(0% 38%, 22% 0%, 48% 0%, 60% 38%, 100% 38%, 100% 100%, 0% 100%);
	}

	.word {
		display: grid;
		line-height: 1;
	}

	.name {
		font-family: var(--font-display);
		font-size: 1.7rem;
		letter-spacing: -0.03em;
	}

	.legal {
		margin-top: 0.15rem;
		font-family: var(--font-mono);
		font-size: 0.62rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-dust);
	}

	.desk {
		display: none;
		flex: 1;
		justify-content: center;
		gap: 1.2rem;
	}

	.desk a,
	.mobile a {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		text-decoration: none;
	}

	.desk a[aria-current='page'],
	.mobile a[aria-current='page'] {
		color: #e0b089;
	}

	.actions {
		display: none;
		margin-left: auto;
		gap: 0.45rem;
	}

	.kit,
	.call {
		padding: 0.52rem 0.75rem;
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		text-decoration: none;
	}

	.kit {
		border: 1px solid var(--color-steel);
		color: var(--color-paper);
	}

	.call {
		background: var(--color-ember);
		color: white;
	}

	.menu {
		margin-left: auto;
		border: 1px solid var(--color-dust);
		background: transparent;
		color: var(--color-cream);
		padding: 0.5rem 0.7rem;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.mobile {
		display: grid;
		gap: 0.2rem;
		padding: 0.25rem 1rem 1rem;
		border-top: 1px solid #3a332c;
	}

	.mobile a {
		padding: 0.75rem 0;
		border-bottom: 1px solid #3a332c;
	}

	.call-block {
		margin-top: 0.35rem;
		background: var(--color-paper);
		color: var(--color-dusk) !important;
		text-align: center;
		padding: 0.85rem !important;
		border: 0 !important;
	}

	.ember {
		background: var(--color-ember) !important;
		color: white !important;
	}

	@media (min-width: 880px) {
		.desk,
		.actions {
			display: flex;
		}

		.menu,
		.mobile {
			display: none;
		}
	}
</style>
