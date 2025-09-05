<script lang="ts">
	import '../app.css';
	import logo1 from '$lib/assets/logo1.png';

	import Navbar from './Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>CryptoSharia</title>
	<link rel="icon" type="image/png" href={logo1} />
</svelte:head>

<Navbar />

{@render children?.()}
