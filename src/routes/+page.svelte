<script lang="ts">
  import Article from './Article.svelte';
  import Banner from './Banner.svelte';
  import Discord from './Discord.svelte';
  import Faq from './Faq.svelte';
  import Collaboration from './Collaboration.svelte';
  import Team from './Team.svelte';
  import Screening from './Screening.svelte';
  import About from './About.svelte';
</script>

<main class="flex flex-col items-center gap-y-14">
  <Banner />
  <About />
  <Collaboration />
  <Team />
  <Discord />
  <Article />
  <Screening />
  <Faq />
</main>
