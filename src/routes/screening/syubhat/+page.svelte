<script lang="ts">
  import logo1 from '$lib/assets/logo1.png';
  import { page } from '$app/state';
  import TokenCard from '../../../components/TokenCard.svelte';
  import { getTokens } from '../../../helpers/tokens';

  const tokens = getTokens(page.data.tokens, 'syubhat');
</script>

<svelte:head>
  <meta name="robots" content="noindex" />

  <title>Screening - CryptoSharia</title>
  <meta property="og:title" content="Screening - CryptoSharia" />
  <meta
    name="description"
    content="Daftar token syubhat yang sudah di-screening oleh tim CryptoSharia"
  />
  <meta
    property="og:description"
    content="Daftar token syubhat yang sudah di-screening oleh tim CryptoSharia"
  />
  
  <meta property="og:type" content="website" />
  <meta property="og:image" content={logo1} />
</svelte:head>

<section
  class="mx-auto mt-8 flex w-full flex-row flex-wrap items-start justify-center gap-1 gap-y-10 px-6 pt-5 sm:gap-8 md:max-w-[85%] md:gap-12 lg:max-w-[82%] lg:gap-10 xl:max-w-[90%] xl:gap-15"
>
  {#each tokens as token}
    <TokenCard
      slug={token.slug}
      name={token.name}
      ticker={token.symbol}
      color={token.color}
      status={token.status}
      logoUrl={token.logoUrl}
    />
  {/each}
</section>
