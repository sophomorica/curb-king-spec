<script lang="ts">
	import { phones } from '$lib/content';

	let name = $state('');
	let phone = $state('');
	let city = $state('');
	let interest = $state('Starter package');
	let notes = $state('');
	let copied = $state(false);
	let error = $state('');

	const inquiry = $derived(
		[
			'Curb-King equipment inquiry',
			`Name: ${name || '—'}`,
			`Phone: ${phone || '—'}`,
			`City / region: ${city || '—'}`,
			`Interest: ${interest}`,
			`Notes: ${notes || '—'}`
		].join('\n')
	);

	function validate() {
		if (!name.trim() || !phone.trim()) {
			error = 'Add a name and a phone number so the shop can call you back.';
			return false;
		}
		error = '';
		return true;
	}

	async function copyInquiry() {
		if (!validate()) return;
		try {
			await navigator.clipboard.writeText(inquiry);
			copied = true;
			setTimeout(() => (copied = false), 2500);
		} catch {
			error = 'Could not copy. Select the inquiry text below instead.';
		}
	}
</script>

<form onsubmit={(event) => event.preventDefault()}>
	<p class="lede">
		This spec form does not post to a server. Copy the inquiry, then call the shop — or have it
		ready when they pick up.
	</p>

	<label>
		Name
		<input type="text" bind:value={name} autocomplete="name" required />
	</label>
	<label>
		Phone
		<input type="tel" bind:value={phone} autocomplete="tel" required />
	</label>
	<label>
		City / region
		<input type="text" bind:value={city} autocomplete="address-level2" />
	</label>
	<label>
		What do you want to talk about?
		<select bind:value={interest}>
			<option>Starter package</option>
			<option>Custom package</option>
			<option>Starting a curbing shop</option>
			<option>Financing</option>
			<option>Parts or service</option>
		</select>
	</label>
	<label class="wide">
		Notes
		<textarea
			bind:value={notes}
			rows="4"
			placeholder="What you already own, trailer situation, timeline."></textarea>
	</label>

	{#if error}
		<p class="err" role="alert">{error}</p>
	{/if}

	<div class="actions">
		<a class="primary" href="tel:{phones.sales.tel}">Call {phones.sales.label}</a>
		<button type="button" onclick={copyInquiry}>
			{copied ? 'Copied inquiry' : 'Copy inquiry'}
		</button>
	</div>

	<pre>{inquiry}</pre>
</form>

<style>
	form {
		display: grid;
		gap: 0.9rem;
	}

	.lede,
	.err {
		margin: 0;
		grid-column: 1 / -1;
	}

	.lede {
		color: var(--color-slag);
	}

	.err {
		color: var(--color-ember-ink);
		font-family: var(--font-mono);
		font-size: 0.85rem;
	}

	label {
		display: grid;
		gap: 0.35rem;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-slag);
	}

	input,
	select,
	textarea {
		border: 1px solid var(--color-iron);
		background: var(--color-card);
		color: var(--color-iron);
		padding: 0.7rem 0.75rem;
		font-family: var(--font-serif);
		font-size: 1.05rem;
		letter-spacing: 0;
		text-transform: none;
	}

	.wide {
		grid-column: 1 / -1;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
		grid-column: 1 / -1;
	}

	.primary,
	button {
		padding: 0.85rem 1rem;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		text-decoration: none;
		border: 1px solid var(--color-iron);
	}

	.primary {
		background: var(--color-ember);
		color: white;
		border-color: var(--color-ember);
	}

	button {
		background: var(--color-card);
		color: var(--color-iron);
		cursor: pointer;
	}

	pre {
		grid-column: 1 / -1;
		margin: 0;
		padding: 0.85rem;
		background: var(--color-iron);
		color: var(--color-paper);
		font-family: var(--font-mono);
		font-size: 0.78rem;
		line-height: 1.55;
		white-space: pre-wrap;
	}

	@media (min-width: 700px) {
		form {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
