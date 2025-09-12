<script lang="ts">
  import Artikel from './Artikel.svelte';
  import Banner from './Banner.svelte';
  import Discord from './Discord.svelte';
  import Faq from './Faq.svelte';
  import Kolaborasi from './Kolaborasi.svelte';
  import Pembina from './Pembina.svelte';
  import Tentang from './Tentang.svelte';
</script>

<main class="flex flex-col items-center gap-y-12">
  <Banner />
  <Tentang />
  <Kolaborasi />
  <Pembina />
  <Discord />
  <Artikel />
  <Faq />
</main>
