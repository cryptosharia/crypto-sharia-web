<script lang="ts">
  import Articles from './Articles.svelte';
  import Banner from './Banner.svelte';
  import Discord from './Discord.svelte';
  import Faq from './Faq.svelte';
  import Collaborations from './Collaborations.svelte';
  import Team from './Team.svelte';
  import Screenings from './Screening.svelte';
  import About from './About.svelte';
  import Activities from './Activities.svelte';
</script>

<svelte:head>
  <title>CryptoSharia</title>
</svelte:head>

<main class="flex flex-col items-center gap-y-10">
  <Banner />
  <About />
  <Collaborations />
  <Team />
  <Discord />
  <Activities />
  <Articles />
  <Screenings />
  <Faq />
</main>
