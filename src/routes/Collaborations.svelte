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

<section class="w-full">
  <Divider usePadding={false} />
  <div class="w-full rounded-4xl">
    <div
      class="h-[12rem] w-full bg-cover bg-center"
      style="background-image: url({collaborationBG});"
    >
      <div class="h-full bg-black/60">
        <div data-aos="zoom-out" data-aos-duration="1000" class="flex h-full overflow-hidden">
          {#each Array.from({ length: 20 }) as _, i}
            <div
              class="flex min-w-fit animate-collaboration-brand items-center gap-x-8 pr-8 md:gap-x-12 md:pr-12 lg:gap-x-14 lg:pr-14 xl:gap-x-16 xl:pr-16"
              aria-hidden={i !== 0}
            >
              {#each brands as brand}
                <a href={brand.url} target="_blank" class="transition-transform hover:scale-110">
                  <img src={brand.logo} alt={brand.name} class="w-38 md:w-42" />
                </a>
              {/each}
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
  <Divider usePadding={false} />
</section>
