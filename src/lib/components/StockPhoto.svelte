<script lang="ts">
	import type { Photo } from '$lib/photos';

	let {
		photo,
		grade = 'warm',
		priority = false,
		sizes = '(min-width: 900px) 50vw, 100vw',
		caption = true,
		ratio = '3 / 2'
	}: {
		photo: Photo;
		grade?: 'dusk' | 'warm' | 'none';
		priority?: boolean;
		sizes?: string;
		caption?: boolean;
		ratio?: string;
	} = $props();
</script>

<figure class="shot" style:--ratio={ratio}>
	<div class={['frame', grade === 'dusk' && 'dusk', grade === 'warm' && 'warm']}>
		<img
			src={photo.src}
			alt={photo.alt}
			width={photo.width}
			height={photo.height}
			{sizes}
			loading={priority ? 'eager' : 'lazy'}
			fetchpriority={priority ? 'high' : 'auto'}
			decoding={priority ? 'sync' : 'async'}
		/>
	</div>
	{#if caption}
		<figcaption>Stock · {photo.credit} · not Curb-King equipment</figcaption>
	{/if}
</figure>

<style>
	.shot {
		margin: 0;
	}

	.frame {
		position: relative;
		overflow: hidden;
		background: var(--color-slag);
		aspect-ratio: var(--ratio);
	}

	.frame::after {
		content: '';
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.warm::after {
		background:
			linear-gradient(180deg, rgb(18 14 11 / 0.08), rgb(18 14 11 / 0.28)),
			linear-gradient(90deg, rgb(180 74 22 / 0.08), transparent 55%);
	}

	.dusk::after {
		background:
			linear-gradient(180deg, rgb(18 14 11 / 0.15), rgb(18 14 11 / 0.45)),
			linear-gradient(90deg, rgb(180 74 22 / 0.12), transparent 60%);
	}

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.frame:hover img {
		transform: scale(1.035);
	}

	figcaption {
		margin-top: 0.45rem;
		font-family: var(--font-mono);
		font-size: 0.62rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-dust);
	}

	@media (prefers-reduced-motion: reduce) {
		img {
			transition: none;
		}

		.frame:hover img {
			transform: none;
		}
	}
</style>
