<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Attachment } from 'svelte/attachments';

	let { children }: { children: Snippet } = $props();

	let shown = $state(false);

	const reveal: Attachment = (node) => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			shown = true;
			return;
		}

		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					shown = true;
					io.disconnect();
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
		);

		io.observe(node);
		return () => io.disconnect();
	};
</script>

<div class={['reveal', shown && 'is-in']} {@attach reveal}>
	{@render children()}
</div>

<style>
	.reveal {
		opacity: 0;
		transform: translateY(0.7rem);
		transition:
			opacity 0.55s ease,
			transform 0.55s ease;
	}

	.is-in {
		opacity: 1;
		transform: none;
	}

	@media (prefers-reduced-motion: reduce) {
		.reveal,
		.is-in {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}
</style>
