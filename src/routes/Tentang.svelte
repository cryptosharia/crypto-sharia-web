<script lang="ts">
  import btc from '$lib/assets/crypto-icons/btc.png';
  import eth from '$lib/assets/crypto-icons/eth.png';
  import sol from '$lib/assets/crypto-icons/sol.png';
  import sui from '$lib/assets/crypto-icons/sui.png';
</script>

{#snippet line(device: 'desktop' | 'mobile')}
  {#if device === 'desktop'}
    <div class="mx-8 hidden w-[1px] bg-orange-300 md:block lg:mx-12"></div>
  {:else}
    <div class="mr-8 ml-6 w-[1px] bg-orange-300 md:hidden lg:mx-12"></div>
  {/if}
{/snippet}

<section
  class="flex max-w-[100rem] flex-col items-stretch justify-between px-4 sm:px-6 md:flex-row md:px-12 lg:px-24 xl:px-36"
>
  <div class="flex flex-1 flex-col rounded-4xl border border-slate-200 p-8 shadow-md">
    <h1 class="mb-1.5 text-3xl font-bold text-orange-600">Tentang <u><i>CryptoSharia</i></u></h1>
    <p class="text-justify text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum lacinia elementum.
      Praesent molestie vel sem rutrum accumsan. Curabitur fermentum nec erat eu iaculis. Nullam
      urna mauris, varius in luctus et, faucibus id elit. Nam commodo elit nec mauris rhoncus
      pellentesque.<br /><br />Fusce id pretium ligula. Proin tincidunt facilisis purus, non commodo
      metus. Quisque nec tellus et turpis facilisis rutrum. Praesent in egestas odio. Donec at
      faucibus mauris. Mauris justo magna, suscipit ut euismod eu, pharetra vitae diam.
    </p>
    <div class="flex-1"></div>
    <div class="flex flex-row items-center justify-around gap-6 pt-6">
      <img src={btc} alt="Bitcoin" class="size-8.5" />
      <img src={eth} alt="Ethereum" class="size-8.5" />
      <img src={sol} alt="Solana" class="size-8.5" />
      <img src={sui} alt="Sui" class="size-8.5" />
    </div>
  </div>
  {@render line('desktop')}
  <div class="flex flex-1 flex-row items-stretch p-8 pl-0 md:flex-col">
    {@render line('mobile')}
    <div>
      <div>
        <div class="relative">
          <div
            class="absolute top-1/2 -left-10 size-4 -translate-y-1/2 rounded-full bg-orange-600 lg:-left-14"
          ></div>
          <h1 class="mb-1.5 text-3xl font-bold text-orange-600">Visi</h1>
        </div>
        <p class="text-justify text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum lacinia
          elementum. Praesent molestie vel sleft-10 left-10em rutrum accumsan. Curabitur fermentum
          nec erat eu iaculis. Nullam urna mauris, varius in luctus et, faucibus id elit.
        </p>
      </div>
      <br />
      <div>
        <div class="relative">
          <div
            class="absolute top-1/2 -left-10 size-4 -translate-y-1/2 rounded-full bg-orange-600 lg:-left-14"
          ></div>
          <h1 class="mb-1.5 text-3xl font-bold text-orange-600">Misi</h1>
        </div>
        <ul class="list-disc text-base">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Suspendisse dictum lacinia elementum</li>
          <li>Praesent molestie vel sem rutrum accumsan</li>
        </ul>
      </div>
    </div>
  </div>
</section>
