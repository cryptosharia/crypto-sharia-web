<script lang="ts">
  import GradientDivider from '../components/GradientDivider.svelte';
  import kontakBG from '$lib/assets/kontak-bg.png';
</script>

<section id="kontak" class="w-full">
  <GradientDivider size="large" />
  <div
    class="w-full bg-cover bg-center"
    style="background-image: url({kontakBG}); background-attachment: fixed;"
  >
    <div class="bg-black/50">
      <div
        class="mx-auto flex max-w-[70rem] flex-col gap-y-12 px-[4%] py-14 sm:px-[12%] md:gap-y-15 md:px-[4%] md:py-17 lg:gap-y-18 lg:px-[5%] lg:py-20 xl:px-[4%] 2xl:px-[0]"
      ></div>
    </div>
  </div>
</section>
