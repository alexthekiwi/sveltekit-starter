<script lang="ts">
	import Header from '$components/common/Header.svelte';
	import Footer from '$components/common/Footer.svelte';
	import '$styles/app.css';
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex flex-grow flex-col">
		<slot />
	</main>
	<Footer />
</div>
