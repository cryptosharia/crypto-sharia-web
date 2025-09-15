<script lang="ts">
  import Artikel from './Artikel.svelte';
  import Banner from './Banner.svelte';
  import Discord from './Discord.svelte';
  import Faq from './Faq.svelte';
  import Kolaborasi from './Kolaborasi.svelte';
  import Kontak from './Kontak.svelte';
  import Pembina from './Pembina.svelte';
  import Screening from './Screening.svelte';
  import Tentang from './Tentang.svelte';
</script>

<main class="flex flex-col items-center gap-y-14">
  <Banner />
  <Tentang />
  <Kolaborasi />
  <Pembina />
  <Discord />
  <Artikel />
  <Screening />
  <Faq />
  <Kontak />
</main>
