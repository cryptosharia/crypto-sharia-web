<script lang="ts">
  import banner from '$lib/assets/banner.png';
  import logo2 from '$lib/assets/logo2.png';
</script>

<section class="w-full">
  <div
    class="h-[40rem] w-full bg-cover bg-center"
    style="background-image: url({banner}); background-attachment: fixed;"
  >
    <div class="size-full bg-black/75">
      <div class="flex h-full w-full items-center justify-center">
        <div class="flex flex-col items-center">
          <img src={logo2} alt="Logo" class="w-56 lg:w-64" />
          <h1 class="mt-6 text-center text-4xl font-bold text-white sm:text-[2.65rem] md:text-5xl">
            CryptoSharia
          </h1>
          <p class="fo mt-2 text-center text-lg text-white max-sm:px-14 lg:text-xl">
            Platform Edukasi dan Informasi Aset Kripto Syariah
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
