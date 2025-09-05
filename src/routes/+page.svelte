<script lang="ts">
  import banner from '$lib/assets/banner.png';
  import logo2 from '$lib/assets/logo2.png';
  import btc from '$lib/assets/crypto-icons/btc.png';
  import eth from '$lib/assets/crypto-icons/eth.png';
  import sol from '$lib/assets/crypto-icons/sol.png';
  import sui from '$lib/assets/crypto-icons/sui.png';
</script>

<main class="flex flex-col items-center gap-y-8">
  <section class="relative">
    <div
      class="h-[36rem] w-screen bg-cover bg-center brightness-30"
      style="background-image: url({banner});"
    ></div>
    <div class="absolute top-0 left-0 flex h-full w-full items-center justify-center">
      <section class="flex flex-col items-center">
        <img src={logo2} alt="Logo" class="w-48 sm:w-56 lg:w-64" />
        <h1 class="mt-6 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          CryptoSharia
        </h1>
        <p class="mt-2 text-center text-base text-white sm:text-xl lg:text-2xl">
          Platform Edukasi dan Informasi Aset Kripto Syariah
        </p>
      </section>
    </div>
  </section>

  <section
    class="flex max-w-[100rem] flex-row items-stretch justify-between px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36"
  >
    <div class="flex flex-1 flex-col rounded-4xl border border-slate-200 p-8 shadow-md">
      <h1 class="mb-1.5 text-4xl font-bold text-orange-600">Tentang <u><i>CryptoSharia</i></u></h1>
      <p class="text-justify text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum lacinia
        elementum. Praesent molestie vel sem rutrum accumsan. Curabitur fermentum nec erat eu
        iaculis. Nullam urna mauris, varius in luctus et, faucibus id elit. Nam commodo elit nec
        mauris rhoncus pellentesque.<br /><br />Fusce id pretium ligula. Proin tincidunt facilisis
        purus, non commodo metus. Quisque nec tellus et turpis facilisis rutrum. Praesent in egestas
        odio. Donec at faucibus mauris. Mauris justo magna, suscipit ut euismod eu, pharetra vitae
        diam.
      </p>
      <div class="flex-1"></div>
      <div class="flex flex-row items-center justify-around gap-6 pt-6">
        <img src={btc} alt="Bitcoin" class="size-10" />
        <img src={eth} alt="Ethereum" class="size-10" />
        <img src={sol} alt="Solana" class="size-10" />
        <img src={sui} alt="Sui" class="size-10" />
      </div>
    </div>
    <div class=" mx-10 w-[1px] bg-orange-300"></div>
    <div class="flex flex-1 flex-col p-8 pl-0">
      <div>
        <div class="relative">
          <div
            class="absolute top-1/2 -left-12 size-4 -translate-y-1/2 rounded-full bg-orange-600"
          ></div>
          <h1 class="mb-1.5 text-4xl font-bold text-orange-600">Visi</h1>
        </div>
        <p class="text-justify text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum lacinia
          elementum. Praesent molestie vel sem rutrum accumsan. Curabitur fermentum nec erat eu
          iaculis. Nullam urna mauris, varius in luctus et, faucibus id elit. Nam commodo elit nec
          mauris rhoncus pellentesque.
        </p>
      </div>
      <br />
      <div>
        <div class="relative">
          <div
            class="absolute top-1/2 -left-12 size-4 -translate-y-1/2 rounded-full bg-orange-600"
          ></div>
          <h1 class="mb-1.5 text-4xl font-bold text-orange-600">Misi</h1>
        </div>
        <ul class="list-disc text-lg">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Suspendisse dictum lacinia elementum</li>
          <li>Praesent molestie vel sem rutrum accumsan</li>
        </ul>
      </div>
    </div>
  </section>
</main>
