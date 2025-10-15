import dummyOverview from '../lib/tokens/ethereum/overview.md?raw';
import dummyConclusion from '../lib/tokens/ethereum/conclusion.md?raw';
import type { Token } from '../models';
import dummyCertificate from '../lib/tokens/ethereum/certificate.jpg';

export const tokens: Token[] = [
  {
    slug: 'bitcoin',
    pair: 'INDEX:BTCUSD',
    name: 'Bitcoin',
    symbol: 'BTC',
    color: '#F7931A',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1.png',
    certificateUrl: dummyCertificate,
    status: 'halal',
    tags: ['Cryptocurrency', 'Blockchain', 'Store of Value'],
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'ethereum',
    pair: 'INDEX:ETHUSD',
    name: 'Ethereum',
    symbol: 'ETH',
    color: '#627EEA',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png',
    certificateUrl: dummyCertificate,
    status: 'halal',
    tags: [
      'Crypto',
      'Blockchain',
      'Smart Contract',
      'Layer 1',
      'Decentralized Application',
      'Decentralized Finance'
    ],
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'xrp',
    pair: 'CRYPTO:XRPUSD',
    name: 'XRP',
    symbol: 'XRP',
    color: '#23292f',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/52.png',
    certificateUrl: dummyCertificate,
    status: 'halal',
    tags: ['Cryptocurrency', 'Blockchain', 'Cross Border Payment'],
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'bnb',
    pair: 'CRYPTO:BNBUSD',
    name: 'BNB',
    symbol: 'BNB',
    color: '#F3BA2F',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1839.png',
    certificateUrl: dummyCertificate,
    status: 'syubhat',
    tags: ['Cryptocurrency', 'Blockchain', 'Centralized Exchange'],
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'solana',
    pair: 'CRYPTO:SOLUSD',
    name: 'Solana',
    symbol: 'SOL',
    color: '#9945FF',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/5426.png',
    certificateUrl: dummyCertificate,
    status: 'halal',
    tags: ['Cryptocurrency', 'Blockchain', 'Decentralized Application'],
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'sui',
    pair: 'CRYPTO:SUIUSD',
    name: 'Sui',
    symbol: 'SUI',
    color: '#4DA2FF',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/20947.png',
    certificateUrl: dummyCertificate,
    status: 'halal',
    tags: ['Cryptocurrency', 'Blockchain', 'Parallel Processing'],
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'bonk1',
    pair: 'CRYPTO:BONKUSD',
    name: 'Bonk',
    symbol: 'BONK',
    color: '#f6952a',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/23095.png',
    certificateUrl: dummyCertificate,
    status: 'haram',
    tags: ['Cryptocurrency', 'Blockchain', 'Yield Farming'],
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'tron',
    pair: 'CRYPTO:TRXUSD',
    name: 'Tron',
    symbol: 'TRX',
    color: '#FF0000',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1958.png',
    certificateUrl: dummyCertificate,
    status: 'halal',
    tags: ['Cryptocurrency', 'Blockchain', 'Decentralized Application'],
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'hyperliquid',
    pair: 'KUCOIN:HYPEUSDT',
    name: 'Hyperliquid',
    symbol: 'HYPE',
    color: '#56EDF0',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/32196.png',
    certificateUrl: dummyCertificate,
    status: 'syubhat',
    tags: ['Cryptocurrency', 'Blockchain', 'Decentralized Finance'],
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'polygon-ecosystem-token',
    pair: 'BINANCE:POLUSDT',
    name: 'Polygon',
    symbol: 'POL',
    color: '#8247E5',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/3890.png',
    certificateUrl: dummyCertificate,
    status: 'halal',
    tags: ['Cryptocurrency', 'Blockchain', 'Decentralized Application'],
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'pepe',
    pair: 'CRYPTO:PEPEUSD',
    name: 'Pepe',
    symbol: 'PEPE',
    color: '#4c9641',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/24478.png',
    certificateUrl: dummyCertificate,
    status: 'haram',
    tags: ['Cryptocurrency', 'Blockchain', 'Meme Coin'],
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'arbitrum',
    pair: 'BINANCE:ARBUSDT',
    name: 'Arbitrum',
    symbol: 'ARB',
    color: '#2c374b',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/11841.png',
    certificateUrl: dummyCertificate,
    status: 'halal',
    tags: ['Cryptocurrency', 'Blockchain', 'Decentralized Application'],
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'cardano',
    pair: 'CRYPTO:ADAUSD',
    name: 'Cardano',
    symbol: 'ADA',
    color: '#3B82F6',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/2010.png',
    certificateUrl: dummyCertificate,
    status: 'halal',
    tags: ['Cryptocurrency', 'Blockchain', 'Smart Contract'],
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'shiba-inu',
    pair: 'CRYPTO:SHIBUSD',
    name: 'Shiba Inu',
    symbol: 'SHIB',
    color: '#EF8A13',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/5994.png',
    certificateUrl: dummyCertificate,
    status: 'haram',
    tags: ['Cryptocurrency', 'Blockchain', 'Decentralized Exchange'],
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  },
  {
    slug: 'pax-gold',
    pair: 'TVC:GOLD',
    name: 'Pax Gold',
    symbol: 'PAXG',
    color: '#cca727',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4705.png',
    certificateUrl: dummyCertificate,
    status: 'halal',
    tags: ['Cryptocurrency', 'Blockchain', 'Gold Backed'],
    content: {
      overview: dummyOverview,
      conclusion: dummyConclusion
    }
  }
];
