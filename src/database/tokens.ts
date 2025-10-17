import type { Token } from '../models';

import bitcoinOverview from '../lib/tokens/bitcoin/overview.md?raw';
import bitcoinConclusion from '../lib/tokens/bitcoin/conclusion.md?raw';
import bitcoinCertificate from '../lib/tokens/bitcoin/certificate.png';

import ethereumOverview from '../lib/tokens/ethereum/overview.md?raw';
import ethereumConclusion from '../lib/tokens/ethereum/conclusion.md?raw';
import ethereumCertificate from '../lib/tokens/ethereum/certificate.png';

import xrpOverview from '../lib/tokens/xrp/overview.md?raw';
import xrpConclusion from '../lib/tokens/xrp/conclusion.md?raw';
import xrpCertificate from '../lib/tokens/xrp/certificate.png';

import bnbOverview from '../lib/tokens/bnb/overview.md?raw';
import bnbConclusion from '../lib/tokens/bnb/conclusion.md?raw';
// import bnbCertificate from '../lib/tokens/bnb/certificate.png';

import solanaOverview from '../lib/tokens/solana/overview.md?raw';
import solanaConclusion from '../lib/tokens/solana/conclusion.md?raw';
import solanaCertificate from '../lib/tokens/solana/certificate.png';

import tronOverview from '../lib/tokens/tron/overview.md?raw';
import tronConclusion from '../lib/tokens/tron/conclusion.md?raw';
import tronCertificate from '../lib/tokens/tron/certificate.png';

import suiOverview from '../lib/tokens/sui/overview.md?raw';
import suiConclusion from '../lib/tokens/sui/conclusion.md?raw';
import suiCertificate from '../lib/tokens/sui/certificate.png';

import avalancheOverview from '../lib/tokens/avalanche/overview.md?raw';
import avalancheConclusion from '../lib/tokens/avalanche/conclusion.md?raw';
import avalancheCertificate from '../lib/tokens/avalanche/certificate.png';

import plasmaXplOverview from '../lib/tokens/plasma-xpl/overview.md?raw';
import plasmaXplConclusion from '../lib/tokens/plasma-xpl/conclusion.md?raw';
import plasmaXplCertificate from '../lib/tokens/plasma-xpl/certificate.png';

export const tokens: Token[] = [
  {
    slug: 'bitcoin',
    pair: 'INDEX:BTCUSD',
    name: 'Bitcoin',
    symbol: 'BTC',
    color: '#F7931A',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1.png',
    certificateUrl: bitcoinCertificate,
    status: 'halal',
    tags: [
      'Layer-1',
      'Store of Value',
      'Digital Currency',
      'Payment',
      'Pioneer',
      'Satoshi Nakamoto'
    ],
    content: {
      overview: bitcoinOverview,
      conclusion: bitcoinConclusion
    }
  },
  {
    slug: 'ethereum',
    pair: 'INDEX:ETHUSD',
    name: 'Ethereum',
    symbol: 'ETH',
    color: '#627EEA',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png',
    certificateUrl: ethereumCertificate,
    status: 'halal',
    tags: [
      'Layer-1',
      'Smart Contract Platform',
      'DeFi',
      'dApp',
      'NFT',
      'Pioneer',
      'Vitalik Buterin'
    ],
    content: {
      overview: ethereumOverview,
      conclusion: ethereumConclusion
    }
  },
  {
    slug: 'xrp',
    pair: 'CRYPTO:XRPUSD',
    name: 'XRP',
    symbol: 'XRP',
    color: '#23292f',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/52.png',
    certificateUrl: xrpCertificate,
    status: 'halal',
    tags: ['Layer-1', 'Payment Network', 'Remittance', 'Bridge Currency', 'Ripple'],
    content: {
      overview: xrpOverview,
      conclusion: xrpConclusion
    }
  },
  {
    slug: 'bnb',
    pair: 'CRYPTO:BNBUSD',
    name: 'BNB',
    symbol: 'BNB',
    color: '#F3BA2F',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1839.png',
    certificateUrl: 'https://ito-group.com/wp-content/uploads/2025/04/no-image.jpg',
    status: 'syubhat',
    tags: ['Layer-1', 'Smart Contract Platform', 'Exchange Ecosystem', 'Binance', 'Changpeng Zhao'],
    content: {
      overview: bnbOverview,
      conclusion: bnbConclusion
    }
  },
  {
    slug: 'solana',
    pair: 'CRYPTO:SOLUSD',
    name: 'Solana',
    symbol: 'SOL',
    color: '#9945FF',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/5426.png',
    certificateUrl: solanaCertificate,
    status: 'halal',
    tags: [
      'Layer-1',
      'Smart Contract Platform',
      'DeFi',
      'dApp',
      'NFT',
      'Gaming',
      'Anatoly Yakovenko'
    ],
    content: {
      overview: solanaOverview,
      conclusion: solanaConclusion
    }
  },
  {
    slug: 'tron',
    pair: 'CRYPTO:TRXUSD',
    name: 'Tron',
    symbol: 'TRX',
    color: '#FF0000',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1958.png',
    certificateUrl: tronCertificate,
    status: 'halal',
    tags: ['Layer-1', 'Content Platform', 'Entertainment', 'DeFi', 'Payment', 'Justin Sun'],
    content: {
      overview: tronOverview,
      conclusion: tronConclusion
    }
  },
  {
    slug: 'sui',
    pair: 'CRYPTO:SUIUSD',
    name: 'Sui',
    symbol: 'SUI',
    color: '#4DA2FF',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/20947.png',
    certificateUrl: suiCertificate,
    status: 'halal',
    tags: [
      'Layer-1',
      'Smart Contract Platform',
      'dApp',
      'DeFi',
      'NFT',
      'Gaming',
      'Parallel Processing',
      'Mysten Labs',
      'Evan Cheng'
    ],
    content: {
      overview: suiOverview,
      conclusion: suiConclusion
    }
  },
  {
    slug: 'avalanche',
    pair: 'CRYPTO:AVAXUSD',
    name: 'Avalanche',
    symbol: 'AVAX',
    color: '#E84142',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/5805.png',
    certificateUrl: avalancheCertificate,
    status: 'halal',
    tags: ['Layer-1', 'Smart Contract Platform', 'DeFi', 'dApp', 'Gaming'],
    content: {
      overview: avalancheOverview,
      conclusion: avalancheConclusion
    }
  },
  {
    slug: 'plasma-xpl',
    pair: 'BINANCE:XPLUSDT.P',
    name: 'Plasma',
    symbol: 'XPL',
    color: '#295B4F',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/36645.png',
    certificateUrl: plasmaXplCertificate,
    status: 'halal',
    tags: ['Layer-1', 'Stablecoin Infrastructure', 'Payment', 'EVM-Compatible'],
    content: {
      overview: plasmaXplOverview,
      conclusion: plasmaXplConclusion
    }
  }
];
