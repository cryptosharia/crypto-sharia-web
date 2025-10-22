<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import Chip from '../../components/Chip.svelte';
  import Divider from '../../components/Divider.svelte';
  import { capitalizeFirstLetter, getUrlLastSegment } from '../../utils';

  let { children } = $props();

  const categories = ['Semua', 'Aktivitas', 'Artikel'];

  let selectedCategory = $state('Semua');

  onMount(() => {
    const lastSegment = getUrlLastSegment().toLowerCase();

    if (lastSegment === 'aktivitas' || lastSegment === 'artikel') {
      selectedCategory = capitalizeFirstLetter(lastSegment);
    } else {
      selectedCategory = 'Semua';
    }
  });
</script>

<main class="nav-space mx-auto w-full max-w-[90rem] text-center">
  <span class="block h-23 w-full"></span>
  <section class="mx-auto max-w-[95%]">
    <h1
      data-aos="fade-down"
      data-aos-duration="1000"
      class="text-4xl text-orange-600 sm:text-[2.75rem] md:text-5xl"
    >
      <b>CryptoSharia Blog</b>
    </h1>
    <p data-aos="zoom-out" data-aos-duration="1000" class="my-2 text-[1.11rem] text-slate-700">
      Temukan semua update terbaru tentang <i><b>CryptoSharia</b></i> di sini
    </p>
  </section>
  <Divider />
  <div
    data-aos="zoom-in"
    data-aos-duration="1000"
    class="mt-4 flex flex-row items-center justify-center gap-x-2"
  >
    {#each categories as category}
      <Chip
        isSelected={category === selectedCategory}
        text={category}
        onPress={(text) => {
          selectedCategory = text;

          if (text.toUpperCase() === 'SEMUA') {
            goto('/blog');
          } else {
            goto(`/blog/${text.toLowerCase()}`);
          }
        }}
      />
    {/each}
  </div>
  {@render children?.()}
</main>
