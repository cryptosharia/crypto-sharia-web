<script lang="ts">
  import banner from '$lib/assets/banner.png';
  import logo2 from '$lib/assets/logo2.png';
</script>

<section class="relative">
  <div
    class="h-[36rem] w-screen bg-cover bg-center brightness-25"
    style="background-image: url({banner});"
  ></div>
  <div class="absolute top-0 left-0 flex h-full w-full items-center justify-center">
    <section class="flex flex-col items-center">
      <img src={logo2} alt="Logo" class="w-48 sm:w-56 lg:w-64" />
      <h1 class="mt-6 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        CryptoSharia
      </h1>
      <p class="mt-2 text-center text-base text-white sm:text-lg lg:text-xl">
        Platform Edukasi dan Informasi Aset Kripto Syariah
      </p>
    </section>
  </div>
</section>
