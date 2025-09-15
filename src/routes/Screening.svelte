<script lang="ts">
  import Divider from '../components/Divider.svelte';
  import TokenCard from '../components/TokenCard.svelte';
  import Title from '../components/Title.svelte';
  import PrimaryButton from '../components/PrimaryButton.svelte';

  const tokens: {
    name: string;
    ticker: string;
    color: string;
    status: 'halal' | 'haram';
    logoUrl: string;
  }[] = [
    {
      name: 'Bitcoin',
      ticker: 'BTC',
      color: '#F7931A',
      status: 'halal',
      logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1.png'
    },
    {
      name: 'Ethereum',
      ticker: 'ETH',
      color: '#627EEA',
      status: 'halal',
      logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png'
    },
    {
      name: 'XRP',
      ticker: 'XRP',
      color: '#23292f',
      status: 'halal',
      logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/52.png'
    },
    {
      name: 'BNB',
      ticker: 'BNB',
      color: '#F3BA2F',
      status: 'haram',
      logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1839.png'
    },
    {
      name: 'Solana',
      ticker: 'SOL',
      color: '#9945FF',
      status: 'halal',
      logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/5426.png'
    },
    {
      name: 'Sui',
      ticker: 'SUI',
      color: '#4DA2FF',
      status: 'halal',
      logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/20947.png'
    },
    {
      name: 'Bonk',
      ticker: 'BONK',
      color: '#f6952a',
      status: 'haram',
      logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/23095.png'
    },
    {
      name: 'Tron',
      ticker: 'TRX',
      color: '#FF0000',
      status: 'halal',
      logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1958.png'
    },
    {
      name: 'Hyperliquid',
      ticker: 'HYPE',
      color: '#56EDF0',
      status: 'haram',
      logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/32196.png'
    },
    {
      name: 'Polygon',
      ticker: 'POL',
      color: '#8247E5',
      status: 'halal',
      logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/3890.png'
    },
    {
      name: 'Pepe',
      ticker: 'PEPE',
      color: '#4c9641',
      status: 'haram',
      logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/24478.png'
    },
    {
      name: 'Arbitrum',
      ticker: 'ARB',
      color: '#2c374b',
      status: 'halal',
      logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/11841.png'
    },
    {
      name: 'Cardano',
      ticker: 'ADA',
      color: '#3B82F6',
      status: 'halal',
      logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/2010.png'
    },
    {
      name: 'Shiba Inu',
      ticker: 'SHIB',
      color: '#EF8A13',
      status: 'haram',
      logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/5994.png'
    },
    {
      name: 'Pax Gold',
      ticker: 'PAXG',
      color: '#cca727',
      status: 'halal',
      logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4705.png'
    }
  ];
</script>

<section id="screening" class="nav-space z-10 w-full max-w-[90rem]">
  <Title class="text-center">Token Screening</Title>
  <Divider />
  <div class="mx-auto mt-8 flex w-full flex-col items-center gap-y-6 md:gap-y-8 lg:gap-y-10">
    <div
      class="flex w-full flex-row flex-wrap items-start justify-center gap-1 gap-y-10 px-6 pt-5 sm:gap-8 md:max-w-[85%] md:gap-12 lg:max-w-[82%] lg:gap-10 xl:max-w-[90%] xl:gap-15"
    >
      {#each tokens as token, i}
        <TokenCard
          name={token.name}
          ticker={token.ticker}
          color={token.color}
          status={token.status}
          logoUrl={token.logoUrl}
          isHiddenOnXS={i >= 6}
          isHiddenOnSM={i >= 9}
          isHiddenOnMD={i >= 9}
          isHiddenOnLG={i >= 12}
          isHiddenOnXL={i >= 15}
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
