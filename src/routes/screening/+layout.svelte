<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import Chip from '../../components/Chip.svelte';
  import Divider from '../../components/Divider.svelte';
  import { capitalizeFirstLetter, getUrlLastSegment } from '../../utils';

  let { children } = $props();
  const categories = ['Semua', 'Halal', 'Haram', 'Syubhat'];

  let selectedCategory = $state('Semua');

  onMount(() => {
    const lastSegment = getUrlLastSegment().toLowerCase();

    if (lastSegment === 'halal' || lastSegment === 'haram') {
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
      <b>Token Screening</b>
    </h1>
    <p data-aos="zoom-out" data-aos-duration="1000" class="my-2 text-[1.11rem] text-slate-700">
      Daftar token yang sudah di-<i>screening</i> oleh tim <i><b>CryptoSharia</b></i>
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
            goto('/screening');
          } else {
            goto(`/screening/${text.toLowerCase()}`);
          }
        }}
      />
    {/each}
  </div>
  {@render children?.()}
</main>
