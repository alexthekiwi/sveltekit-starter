<script context="module" lang="ts">
	export function load({ error, status }) {
		console.error(error);
		return {
			props: {
				status,
				message: status === 404 ? 'Page not found' : 'An unexpected error occurred'
			}
		};
	}
</script>

<script lang="ts">
	export let status: number;
	export let message: string;
</script>

<svelte:head>
	<title>{status} Error</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<div class="container flex w-full flex-col gap-16 py-12">
	<h1 class="text-5xl">{message} ({status})</h1>

	<div class="flex w-full flex-col gap-6">
		{#if status === 404}
			<h2 class="text-xl font-bold">Uh oh, you hit a route that doesn't exist or has moved.</h2>
			<p>
				<a class="underline" href="/">Return home</a>
			</p>
		{:else}
			<p>Please get in touch or try again later.</p>
		{/if}
	</div>
</div>
