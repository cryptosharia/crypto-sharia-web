<script lang="ts">
  import { marked } from 'marked';
  import PrimaryButton from '../../../components/PrimaryButton.svelte';
  import { formatPrice } from '../../../utils';
  import Divider from '../../../components/Divider.svelte';
  import DotsDivider from '../../../components/DotsDivider.svelte';
  import Title from '../../../components/Title.svelte';
  import { page } from '$app/state';
  import type { QuotedToken } from '../../../models';
  import NotFoundPage from '../../../components/NotFoundPage.svelte';
  import TokenCard from '../../../components/TokenCard.svelte';
  import { getTokenBySlug, getTokens } from '../../../helpers/tokens';
  import Tag from '../../../components/Tag.svelte';
  import { navigating } from '$app/state';

  let token: QuotedToken | undefined = $state(
    getTokenBySlug(page.data.tokens, page.params.slug || '')
  );

  let tokens = $state(
    getTokens(page.data.tokens, 'all', 10, page.params.slug ? [page.params.slug] : [])
  );

  $effect(() => {
    navigating.complete;
    // Refetch data whenever the route is done changing

    token = page.data.tokens.find((x: QuotedToken) => x.slug === page.params.slug);

    tokens = getTokens(page.data.tokens, 'all', 10, page.params.slug ? [page.params.slug] : []);
  });
</script>

<svelte:head>
  <title>{token ? token.name : '404'} - CryptoSharia</title>
</svelte:head>

{#if !token}
  <NotFoundPage message="Token tidak ditemukan" />
{:else}
  <span class="block h-20 w-full"></span>
  <main class="mx-auto flex w-full max-w-[94%] flex-col gap-y-5 xl:max-w-[71rem]">
    {@render header(token)}
    {@render overview(token.tags, token.content.overview)}
    {@render conclusion(token.status, token.content.conclusion)}
  </main>
  <DotsDivider />
  {@render others(tokens)}
{/if}

{#snippet header(token: QuotedToken)}
  <section
    class="flex flex-col gap-y-2 rounded-2xl border-2 border-slate-200 bg-white px-5 py-6 shadow-lg"
  >
    <div class="flex flex-row items-start justify-between sm:items-center">
      <div class="flex items-start gap-x-1.5 sm:flex-row sm:gap-x-3">
        <img
          src={token.logoUrl}
          alt={token.symbol}
          class="size-18 rounded-full border-2 bg-white object-cover sm:size-20 {token.status ===
          'halal'
            ? 'border-green-500'
            : 'border-red-500'}"
        />
        <div class="flex flex-col">
          <h1 class="text-3xl leading-10 font-semibold sm:text-4xl" style="color: {token.color}">
            {token.name}
          </h1>
          <h3 class="ml-0 text-base font-semibold sm:text-xl" style="letter-spacing: 1px;">
            {token.symbol}
          </h3>
        </div>
      </div>
      <div class="flex flex-row gap-x-2">
        <h3 class="text-center font-semibold" style="letter-spacing: 2px;">
          Status <span class="hidden sm:inline">{' : '}</span><br class="inline sm:hidden" /><span
            style="letter-spacing: 1px;"
            class="rounded-full px-2 py-1 font-bold text-white uppercase {token.status === 'halal'
              ? 'bg-green-500'
              : 'bg-red-500'}">{token.status}</span
          >
        </h3>
      </div>
    </div>
    <Divider usePadding={false} />
    <div
      class="mx-auto flex w-[95%] flex-row flex-wrap items-center gap-x-8 gap-y-8 sm:gap-x-20 md:gap-x-24 lg:gap-x-8 xl:gap-x-0"
    >
      <div class="flex flex-1 flex-col">
        <span class="font- whitespace-nowrap">Peringkat</span>
        <span><b>{token.cmc_rank}</b></span>
      </div>
      <div class="flex flex-1 flex-col">
        <span class="font- whitespace-nowrap">Harga per Token</span>
        <span class="whitespace-nowrap">
          <b
            >{formatPrice(token.price)}
            <span class="text-slate-400">|</span>
            <span class={token.percent_change_24h > 0 ? 'text-green-500' : 'text-red-500'}
              >{token.percent_change_24h > 0 ? '+' : ''}{token.percent_change_24h?.toFixed(
                2
              )}%</span
            ></b
          ></span
        >
      </div>
      <div class="flex flex-1 flex-col">
        <span class="font- whitespace-nowrap">Kapitalisasi Pasar</span>
        <span><b>{formatPrice(token.market_cap)}</b></span>
      </div>
      <div class="flex flex-1 flex-col">
        <span class="font- whitespace-nowrap">Dominasi Pasar</span>
        <span
          ><b
            >{Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(
              token.market_cap_dominance
            )}%</b
          ></span
        >
      </div>
      <div class="flex flex-1 flex-col">
        <span class="font- whitespace-nowrap"><i>Supply</i> Maksimum</span>
        <span
          ><b>
            {#if token.infinite_supply}
              {@html '<i>Unlimited</i>'}
            {:else if !token.max_supply}
              --
            {:else}
              {Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(token.max_supply)}
            {/if}
          </b></span
        >
      </div>
      <div class="flex flex-1 flex-col">
        <span class="font- whitespace-nowrap"><i>Supply</i> Beredar</span>
        <span
          ><b
            >{Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(
              token.circulating_supply
            )}</b
          ></span
        >
      </div>
    </div>
  </section>
{/snippet}

{#snippet overview(tags: string[], text: string)}
  <section
    class="flex flex-col gap-y-7 rounded-2xl border-2 border-slate-200 bg-white px-5 py-6 shadow-lg"
  >
    <div class="flex flex-row flex-wrap gap-2">
      {#each tags as tag}
        <Tag text={tag} />
      {/each}
    </div>
    <section class="markdown-body">
      {@html marked(text)}
    </section>
  </section>
{/snippet}

{#snippet conclusion(status: string, text: string)}
  <section
    class="flex flex-col gap-y-2 rounded-2xl border-2 border-slate-200 bg-white px-5 py-6 shadow-lg"
  >
    <div class="flex flex-row items-center gap-x-2">
      <h1 class="text-3xl font-semibold text-orange-600">Kesimpulan</h1>
      <span
        style="letter-spacing: 1px;"
        class="rounded-full px-2 py-0.5 font-bold text-white uppercase {status === 'halal'
          ? 'bg-green-500'
          : 'bg-red-500'}">{status}</span
      >
    </div>
    <Divider usePadding={false} />
    <section class="markdown-body">
      {@html marked(text)}
    </section>
  </section>
{/snippet}

{#snippet others(tokens: QuotedToken[])}
  <section class="nav-space z-8 mx-auto mb-10 w-full max-w-[90rem]">
    <Title class="text-center">Lihat Token Lain</Title>
    <Divider />
    <div class="mx-auto mt-8 flex w-full flex-col items-center gap-y-6 md:gap-y-8 lg:gap-y-10">
      <div
        class="flex w-full flex-row flex-wrap items-start justify-center gap-1 gap-y-10 px-6 pt-5 sm:gap-8 md:max-w-[85%] md:gap-12 lg:max-w-[82%] lg:gap-10 xl:max-w-[90%] xl:gap-15"
      >
        {#each tokens as token, i}
          <TokenCard
            slug={token.slug}
            name={token.name}
            ticker={token.symbol}
            color={token.color}
            status={token.status}
            logoUrl={token.logoUrl}
            isHiddenOnXS={i >= 6}
            isHiddenOnSM={i >= 6}
            isHiddenOnMD={i >= 6}
            isHiddenOnLG={i >= 8}
          />
        {/each}
      </div>
      <PrimaryButton
        text="Lihat Semua Token"
        href="/screening"
        size="medium"
        class="hidden md:block"
      />
      <PrimaryButton
        text="Lihat Semua Token"
        href="/screening"
        size="small"
        class="block md:hidden"
      />
    </div>
  </section>
{/snippet}
