<script lang="ts">
  import Chip from '../../components/Chip.svelte';
  import Divider from '../../components/Divider.svelte';

  let { children } = $props();

  const categories = ['Semua', 'Aktivitas', 'Artikel'];

  let selectedCategory = $state('Semua');
</script>

<svelte:head>
  <title>Blog - CryptoSharia</title>
</svelte:head>

<section class="nav-space mx-auto w-full max-w-[90rem] text-center">
  <span class="block h-23 w-full"></span>
  <h1 class="text-5xl text-orange-600"><b>CryptoSharia Blog</b></h1>
  <p class="my-2 text-slate-700">
    Temukan semua update terbaru tentang <i><b>CryptoSharia</b></i> di sini
  </p>
  <Divider />
  <div class="mt-3 flex flex-row items-center justify-center gap-x-2">
    {#each categories as category}
      <Chip
        isSelected={category === selectedCategory}
        text={category}
        onPress={(text) => (selectedCategory = text)}
      />
    {/each}
  </div>
  {@render children?.()}
</section>
