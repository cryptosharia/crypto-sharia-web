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
  import Modal from '../../../components/Modal.svelte';

  let token: QuotedToken | undefined = $state(
    getTokenBySlug(page.data.tokens, page.params.slug || '')
  );

  let tokens = $state(
    getTokens(page.data.tokens, 'all', 10, page.params.slug ? [page.params.slug] : [])
  );

  let modalVisible = $state(false);
  let modalContent = $state<'certificate' | 'chart'>('certificate');

  $effect(() => {
    navigating.complete;

    // Refetch data whenever the route is done changing

    token = page.data.tokens.find((x: QuotedToken) => x.slug === page.params.slug);

    tokens = getTokens(page.data.tokens, 'all', 10, page.params.slug ? [page.params.slug] : []);
  });

  $effect(() => {
    // Remove existingChart first (In order to be able to refresh the chart when switching tokens)
    const existingChart = document.querySelector('#chart-container #chart');

    if (existingChart) existingChart.remove();

    // Create a new chart for current token
    const newChart = document.createElement('div');
    newChart.id = 'chart';
    newChart.className = 'size-full';
    document.querySelector('#chart-container')?.appendChild(newChart);

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = `
      {
        "allow_symbol_change": false,
        "calendar": false,
        "details": false,
        "hide_side_toolbar": false,
        "hide_top_toolbar": false,
        "hide_legend": false,
        "hide_volume": true,
        "hotlist": false,
        "interval": "D",
        "locale": "en",
        "save_image": false,
        "style": "1",
        "symbol": "${token?.pair || 'INDEX:BTCUSD'}",
        "theme": "light",
        "timezone": "Asia/Jakarta",
        "backgroundColor": "#ffffff",
        "gridColor": "rgba(46, 46, 46, 0.06)",
        "watchlist": [],
        "withdateranges": false,
        "compareSymbols": [],
        "studies": [],
        "autosize": true
      }
    `;

    newChart.appendChild(script);
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
    data-aos="flip-down"
    data-aos-duration="1000"
    class="flex flex-col gap-y-2 rounded-2xl border-2 border-slate-200 bg-white px-5 py-6 shadow-lg"
  >
    <div class="flex flex-row items-start justify-between sm:items-center">
      <div class="flex items-start gap-x-1.5 sm:flex-row sm:gap-x-3">
        <img
          src={token.logoUrl}
          alt={token.symbol}
          class="size-18 rounded-full border-2 bg-white object-cover sm:size-20"
          class:border-green-500={token.status === 'halal'}
          class:border-red-500={token.status === 'haram'}
          class:border-slate-400={token.status === 'syubhat'}
        />
        <div class="flex flex-col">
          <h1 class="text-3xl leading-10 font-semibold sm:text-4xl" style="color: {token.color}">
            {token.name}
          </h1>
          <h2 class="ml-0 text-base font-semibold sm:text-xl" style="letter-spacing: 1px;">
            {token.symbol}
          </h2>
        </div>
      </div>
      <div class="flex flex-row gap-x-2">
        <h3 class="text-center font-semibold" style="letter-spacing: 2px;">
          Status <span class="hidden sm:inline">{' : '}</span><br class="inline sm:hidden" /><span
            style="letter-spacing: 1px;"
            class="rounded-full px-2 py-1 font-bold text-white uppercase"
            class:bg-green-500={token.status === 'halal'}
            class:bg-red-500={token.status === 'haram'}
            class:bg-slate-400={token.status === 'syubhat'}>{token.status}</span
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
            <span class={token.percent_change_24h < 0 ? 'text-red-500' : 'text-green-500'}
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
    <Divider usePadding={false} />
    <div class="flex flex-wrap gap-2">
      <button
        class="rounded-xl bg-orange-500 px-2 py-1.5 text-white hover:cursor-pointer hover:opacity-80"
        onclick={() => {
          modalContent = 'certificate';
          modalVisible = true;
        }}>Sertifikat</button
      >
      <button
        class="rounded-xl bg-[#131722] px-2 py-1.5 text-white hover:cursor-pointer hover:opacity-80"
        onclick={() => {
          modalContent = 'chart';
          modalVisible = true;
        }}>Grafik</button
      >
      <a
        class="rounded-xl bg-[#3661fb] px-2 py-1.5 text-white hover:cursor-pointer hover:opacity-80"
        href="https://coinmarketcap.com/currencies/{token.slug}"
        target="_blank">CoinMarketCap</a
      >
    </div>
    <Modal bind:modalVisible>
      <h2
        class="mb-2 text-start text-2xl font-semibold sm:text-center sm:text-3xl"
        style="color: {token.color}"
      >
        {#if modalContent === 'chart'}
          Grafik {token.symbol}/USD
        {:else}
          Sertifikat {token.name}
        {/if}
      </h2>
      <div
        id="chart-container"
        class="h-[70vh] w-[85vw]"
        class:hidden={modalContent !== 'chart'}
      ></div>
      <div
        class="max-h-[70vh] w-[80vw] overflow-hidden md:w-[80vw] xl:w-[65vw]"
        class:hidden={modalContent !== 'certificate'}
      >
        <img
          src={token.certificateUrl}
          alt="{token.name} Certificate"
          class="size-full rounded-lg object-contain"
        />
      </div>
    </Modal>
  </section>
{/snippet}

{#snippet overview(tags: string[], text: string)}
  <section
    data-aos="fade-up"
    data-aos-duration="1000"
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
    data-aos="fade-up"
    data-aos-duration="1000"
    class="flex flex-col gap-y-2 rounded-2xl border-2 border-slate-200 bg-white px-5 py-6 shadow-lg"
  >
    <div class="flex flex-row items-center gap-x-2">
      <h2 class="text-3xl font-semibold text-orange-600">Kesimpulan</h2>
      <span
        style="letter-spacing: 1px;"
        class="rounded-full px-2 py-0.5 font-bold text-white uppercase"
        class:bg-green-500={status === 'halal'}
        class:bg-red-500={status === 'haram'}
        class:bg-slate-400={status === 'syubhat'}>{status}</span
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
