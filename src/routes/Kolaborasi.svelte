<script lang="ts">
  import collaborationBG from '$lib/assets/collaborations/collaboration-bg.png';
  import fasset from '$lib/assets/collaborations/fasset-logo.png';
  import halalKulture from '$lib/assets/collaborations/halal-kulture-logo.png';
  import Divider from '../components/Divider.svelte';

  const brands = [
    {
      name: 'Fasset',
      logo: fasset,
      url: 'https://fasset.id'
    },
    {
      name: 'Halal Kulture',
      logo: halalKulture,
      url: 'https://halalkulturemarket.com'
    }
  ];
</script>

<section>
  <Divider usePadding={false} />
  <div class="relative rounded-4xl">
    <div
      class="h-[12rem] w-screen bg-cover bg-center brightness-30"
      style="background-image: url({collaborationBG});"
    ></div>
    <div class="absolute top-0 left-1/2 flex h-full -translate-x-1/2 overflow-hidden">
      {#each Array.from({ length: 20 }) as _, i}
        <div
          class="flex min-w-fit animate-infinite-scroll items-center gap-x-8 pr-8 md:gap-x-12 md:pr-12"
          aria-hidden={i !== 0}
        >
          {#each brands as brand}
            <a href={brand.url} target="_blank">
              <img src={brand.logo} alt={brand.name} class="w-38 md:w-42" />
            </a>
          {/each}
        </div>
      {/each}
    </div>
  </div>
  <Divider usePadding={false} />
</section>
