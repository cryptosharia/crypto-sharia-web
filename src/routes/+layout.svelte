<script lang="ts">
  import '../app.css';
  import 'aos/dist/aos.css';
  import AOS from 'aos';
  import '../../node_modules/github-markdown-css/github-markdown-light.css';
  import logo1 from '$lib/assets/logo1.png';
  import popUpAd from '$lib/assets/pop-up-ad.jpg';

  import Navbar from './Navbar.svelte';
  import Footer from './Footer.svelte';
  import { onMount } from 'svelte';

  let { children } = $props();

  onMount(() => {
    AOS.init();
  });

  let popUpVisible = $state(true);
</script>

<svelte:head>
  <title>CryptoSharia</title>
  <link rel="icon" type="image/png" href={logo1} />
</svelte:head>

<!-- On load pop ip -->
<div
  class="fixed z-999999999 h-screen w-screen overflow-hidden"
  style="display: {popUpVisible ? 'block' : 'none'}"
>
  <button
    aria-label="Close Pop Up"
    class="h-screen w-screen bg-black/50 hover:cursor-pointer"
    onclick={() => (popUpVisible = false)}
  ></button>
  <div
    class="absolute top-1/2 left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-white p-3 shadow-2xl sm:w-145"
  >
    <button
      aria-label="Close Pop Up"
      class="group absolute top-1.5 right-1.5 rounded-xl border border-slate-500 p-1.5 hover:cursor-pointer hover:border-orange-600 hover:bg-orange-600/10"
      onclick={() => (popUpVisible = false)}
    >
      <svg
        class="h-6 w-6 text-slate-500 group-hover:text-orange-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <span class="text-2xl text-orange-600 sm:text-3xl">Selamat Datang 👋</span>
    <a href="https://lynk.id/cryptosharia" target="_blank">
      <img
        src={popUpAd}
        alt="Join Discord Premium CryptoSharia"
        class="mt-2 w-full rounded-lg border border-slate-200 shadow-lg"
      />
    </a>
  </div>
</div>

<Navbar />

{@render children?.()}

<Footer />
