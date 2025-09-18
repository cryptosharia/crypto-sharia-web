<script lang="ts">
  import { marked } from 'marked';
  import PrimaryButton from '../../../components/PrimaryButton.svelte';
  import type { PageProps } from './$types';
  import { formatDate } from '../../../utils';
  import Calendar from '$lib/assets/icons/Calendar.svelte';
  import Divider from '../../../components/Divider.svelte';
  import PostCard from '../../../components/PostCard.svelte';
  import DotsDivider from '../../../components/DotsDivider.svelte';
  import Title from '../../../components/Title.svelte';
  import { page } from '$app/state';
  import type { QuotedToken } from '../../../models';
  // import { navigating } from '$app/state';

  // let posts = $state(getPosts(data.post?.category, 3, data.post ? [data.post.slug] : []));

  // $effect(() => {
  //   navigating.complete;

  //   // Refetch posts whenever the route is done changing
  //   posts = getPosts(data.post?.category, 3, data.post ? [data.post.slug] : []);
  // });
  const token = page.data.tokens.find((x: QuotedToken) => x.slug === page.params.slug);
</script>

<svelte:head>
  <title>{token ? token.name : '404'} - CryptoSharia</title>
</svelte:head>

{#if token}
  <span class="block h-23 w-full"></span>
  <ul>
    <li>Slug: {token.slug}</li>
    <li>Name: {token.name}</li>
    <li>Symbol: {token.symbol}</li>
    <li>Color: {token.color}</li>
    <li>Status: {token.status}</li>
    <li>CMC Rank: {token.cmc_rank}</li>
    <li>Infinite Supply: {token.infinite_supply ? 'Yes' : 'No'}</li>
    <li>Max Supply: {token.max_supply}</li>
    <li>Circulating Supply: {token.circulating_supply}</li>
    <li>Price: {token.price}</li>
    <li>Market Cap: {token.market_cap}</li>
    <li>24h Price Change: {token.percent_change_24h}%</li>
    <li><img src={token.logoUrl} alt={token.name} /></li>
    <li>{token.content.overview}</li>
    <li>{token.content.conclusion}</li>
  </ul>
{/if}
<!-- 
{#if !data.token}
  <main class="flex h-screen w-full flex-col items-center justify-center gap-y-2 text-center">
    <h1 class="text-7xl font-bold text-orange-600 md:text-8xl" style="letter-spacing: 0.5rem;">
      404
    </h1>
    <h1 class="mb-4 text-3xl font-bold text-orange-600 md:text-4xl">Postingan Tidak Ditemukan</h1>
    <PrimaryButton text="Kembali ke Blog" href="/blog" size="medium" class="hidden md:block" />
    <PrimaryButton text="Kembali ke Blog" href="/blog" size="small" class="block md:hidden" />
  </main>
{:else}
  <span class="block h-21 w-full"></span>
  <main class="mx-auto flex w-full max-w-[91%] flex-col xl:max-w-[71rem]">
    <section>
      <div class="mb-3.5 flex flex-row items-start gap-x-4">
        {@render backButton()}
        <h1 class="text-[2rem] leading-10 font-medium text-orange-600 sm:text-4xl md:text-[2.5rem]">
          {data.token.title}
        </h1>
      </div>
      <img
        src={data.token.thumbnailUrl}
        alt={data.token.title}
        class="w-full rounded-2xl md:rounded-3xl"
      />
      <div class="mt-2 flex flex-col gap-y-3 md:mb-2 md:flex-row">
        <div class="flex flex-1 flex-row flex-wrap gap-2">
          {#each data.token.tags as tag}
            <span class="rounded-full bg-slate-200 px-2.5 py-1 text-sm text-slate-700 md:text-base"
              >{tag}</span
            >
          {/each}
        </div>
        <span class="mb-1 flex flex-row justify-end text-sm text-slate-700 md:text-base">
          <Calendar class="size-5 md:size-6" />
          <span>{formatDate(data.token.date, 'text')}</span></span
        >
      </div>
      <Divider usePadding={false} />
      <p class="mt-2 text-justify text-slate-700">{data.token.description}</p>
    </section>
    <DotsDivider />
    <section class="markdown-body my-4">
      {@html marked(data.token.content)}
    </section>
    <DotsDivider padding="4rem" />
  </main>
  <section class="nav-space z-10 mx-auto mb-10 w-full max-w-[90rem]">
    <Title class="text-center"
      >{data.token.category === 'activity' ? 'Aktivitas' : 'Artikel'} Terbaru</Title
    >
    <Divider />
    <div class="flex w-full flex-col items-center gap-y-6 md:gap-y-8 lg:gap-y-10">
      <div
        class="flex w-full flex-row flex-wrap items-start justify-center gap-6 px-6 pt-5 md:gap-8 lg:gap-10"
      >
        {#each posts as post, i}
          <PostCard
            thumbnailUrl={post.thumbnailUrl}
            date={post.date}
            title={post.title}
            slug={post.slug}
            tags={post.tags}
            description={post.description}
          />
        {/each}
      </div>
      <PrimaryButton
        text="Lihat {data.token.category === 'activity' ? 'Aktivitas' : 'Artikel'} Lainnya"
        href="/blog/{data.token.category === 'activity' ? 'aktivitas' : 'artikel'}"
        size="medium"
        class="hidden md:block"
      />
      <PrimaryButton
        text="Lihat {data.token.category === 'activity' ? 'Aktivitas' : 'Artikel'} Lainnya"
        href="/blog/{data.token.category === 'activity' ? 'aktivitas' : 'artikel'}"
        size="small"
        class="block md:hidden"
      />
    </div>
  </section>
{/if} -->

{#snippet backButton()}
  <button
    aria-label="Kembali ke Blog"
    onclick={() => window.history.back()}
    class="mt-0.75 hidden rounded-full text-orange-600 transition-transform duration-300 hover:scale-115 hover:cursor-pointer md:block"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2.3"
      stroke="currentColor"
      class="h-8.5 w-8.5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  </button>
{/snippet}
