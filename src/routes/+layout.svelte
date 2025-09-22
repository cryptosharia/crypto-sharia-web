<script lang="ts">
  import '../app.css';
  import 'aos/dist/aos.css';
  import AOS from 'aos';
  import '../../node_modules/github-markdown-css/github-markdown-light.css';
  import logo1 from '$lib/assets/logo1.png';

  import Navbar from './Navbar.svelte';
  import Footer from './Footer.svelte';
  import { onMount } from 'svelte';

  let { children } = $props();

  onMount(() => {
    AOS.init();
  });
</script>

<svelte:head>
  <title>CryptoSharia</title>
  <link rel="icon" type="image/png" href={logo1} />
</svelte:head>

<Navbar />

{@render children?.()}

<Footer />
