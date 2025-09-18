import dummyOverview from '../lib/tokens/ethereum/overview.md?raw';
import dummyConclusion from '../lib/tokens/ethereum/conclusion.md?raw';
import type { Token } from '../models';

export const tokens: Token[] = [
  {
    slug: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    color: '#F7931A',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1.png',
    status: 'halal',
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    color: '#627EEA',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png',
    status: 'halal',
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'xrp',
    name: 'XRP',
    symbol: 'XRP',
    color: '#23292f',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/52.png',
    status: 'halal',
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'bnb',
    name: 'BNB',
    symbol: 'BNB',
    color: '#F3BA2F',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1839.png',
    status: 'haram',
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    color: '#9945FF',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/5426.png',
    status: 'halal',
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'sui',
    name: 'Sui',
    symbol: 'SUI',
    color: '#4DA2FF',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/20947.png',
    status: 'halal',
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'bonk1',
    name: 'Bonk',
    symbol: 'BONK',
    color: '#f6952a',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/23095.png',
    status: 'haram',
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'tron',
    name: 'Tron',
    symbol: 'TRX',
    color: '#FF0000',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1958.png',
    status: 'halal',
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'hyperliquid',
    name: 'Hyperliquid',
    symbol: 'HYPE',
    color: '#56EDF0',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/32196.png',
    status: 'haram',
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'polygon-ecosystem-token',
    name: 'Polygon',
    symbol: 'POL',
    color: '#8247E5',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/3890.png',
    status: 'halal',
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'pepe',
    name: 'Pepe',
    symbol: 'PEPE',
    color: '#4c9641',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/24478.png',
    status: 'haram',
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'arbitrum',
    name: 'Arbitrum',
    symbol: 'ARB',
    color: '#2c374b',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/11841.png',
    status: 'halal',
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    color: '#3B82F6',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/2010.png',
    status: 'halal',
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'shiba-inu',
    name: 'Shiba Inu',
    symbol: 'SHIB',
    color: '#EF8A13',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/5994.png',
    status: 'haram',
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'pax-gold',
    name: 'Pax Gold',
    symbol: 'PAXG',
    color: '#cca727',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4705.png',
    status: 'halal',
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  }
];
