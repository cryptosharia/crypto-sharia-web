<script lang="ts">
  import collaborationBG from '$lib/assets/collaboration-bg.png';
  import fasset from '$lib/assets/fasset-logo.png';
  import halalKulture from '$lib/assets/halal-kulture-logo.png';

  const logos = [fasset, halalKulture];
</script>

<section class="relative rounded-4xl">
  <div
    class="h-[12rem] w-screen bg-cover bg-center brightness-25"
    style="background-image: url({collaborationBG});"
  ></div>
  <div class="absolute top-0 left-1/2 flex h-full -translate-x-1/2 overflow-hidden">
    {#each Array.from({ length: 20 }) as _, i}
      <div
        class="pr- flex min-w-fit animate-infinite-scroll items-center gap-x-8 pr-8 md:gap-x-12 md:pr-12"
        aria-hidden={i !== 0}
      >
        {#each logos as logo}
          <img src={logo} alt="Collaboration Logo" class="w-38 md:w-42" />
        {/each}
      </div>
    {/each}
  </div>
</section>
