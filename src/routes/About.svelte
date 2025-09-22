<script lang="ts">
  import btc from '$lib/assets/crypto-icons/btc.png';
  import eth from '$lib/assets/crypto-icons/eth.png';
  import sol from '$lib/assets/crypto-icons/sol.png';
  import sui from '$lib/assets/crypto-icons/sui.png';
  import Title from '../components/Title.svelte';
</script>

{#snippet line(device: 'desktop' | 'mobile')}
  {#if device === 'desktop'}
    <div class="mx-8 hidden border-r-2 border-orange-300 md:block lg:mx-12"></div>
  {:else}
    <div class="mr-8 ml-6 border-r-2 border-orange-300 md:hidden lg:mx-12"></div>
  {/if}
{/snippet}

<section
  class="flex max-w-[90rem] flex-col items-stretch justify-between px-4 sm:px-6 md:flex-row md:px-8 lg:px-24 xl:px-36"
>
  <div
    data-aos="fade-right"
    data-aos-duration="1000"
    class="flex flex-1 flex-col rounded-4xl border border-slate-200 p-8 shadow-md"
  >
    <Title aos={false} isSmall={true}>Tentang <u><i>CryptoSharia</i></u></Title>
    <p class="text-justify text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum lacinia elementum.
      Praesent molestie vel sem rutrum accumsan. Curabitur fermentum nec erat eu iaculis. Nullam
      urna mauris, varius in luctus et, faucibus id elit.<br /><br />Fusce id pretium ligula. Proin
      tincidunt facilisis purus, non commodo metus. Quisque nec tellus et turpis facilisis rutrum.
      Praesent in egestas odio.
    </p>
    <div class="flex-1"></div>
    <div class="flex flex-row items-center justify-around gap-6 pt-6">
      <img src={btc} alt="Bitcoin" class="size-8" />
      <img src={eth} alt="Ethereum" class="size-8" />
      <img src={sol} alt="Solana" class="size-8" />
      <img src={sui} alt="Sui" class="size-8" />
    </div>
  </div>
  {@render line('desktop')}
  <div
    data-aos="fade-left"
    data-aos-duration="1000"
    class="flex flex-1 flex-row items-stretch p-8 pb-0 pl-0 md:flex-col xl:pr-9"
  >
    {@render line('mobile')}
    <div>
      <div>
        <div class="relative">
          <div
            class="absolute top-1/2 -left-10 size-4 -translate-y-1/2 rounded-full bg-orange-600 lg:-left-14"
          ></div>
          <Title aos={false} isSmall={true}>Visi</Title>
        </div>
        <p class="text-justify text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum lacinia
          elementum. Praesent molestie vel sleft-10 left-10em rutrum accumsan. Curabitur fermentum
          nec erat eu iaculis. Nullam urna mauris, varius in luctus et, faucibus elit.
        </p>
      </div>
      <br />
      <div>
        <div class="relative">
          <div
            class="absolute top-1/2 -left-10 size-4 -translate-y-1/2 rounded-full bg-orange-600 lg:-left-14"
          ></div>
          <Title aos={false} isSmall={true}>Misi</Title>
        </div>
        <ul class="list-disc text-base">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Suspendisse dictum lacinia elementum</li>
        </ul>
      </div>
    </div>
  </div>
</section>
