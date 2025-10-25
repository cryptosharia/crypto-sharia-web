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

import worldLibertyFinancialWLFIOverview from '../lib/tokens/world-liberty-financial-wlfi/overview.md?raw';
import worldLibertyFinancialWLFIconclusion from '../lib/tokens/world-liberty-financial-wlfi/conclusion.md?raw';
import worldLibertyFinancialWLFICertificate from '../lib/tokens/world-liberty-financial-wlfi/certificate.png';

import paxGoldOverview from '../lib/tokens/pax-gold/overview.md?raw';
import paxGoldConclusion from '../lib/tokens/pax-gold/conclusion.md?raw';
import paxGoldCertificate from '../lib/tokens/pax-gold/certificate.png';

import tetherGoldOverview from '../lib/tokens/tether-gold/overview.md?raw';
import tetherGoldConclusion from '../lib/tokens/tether-gold/conclusion.md?raw';
import tetherGoldCertificate from '../lib/tokens/tether-gold/certificate.png';

export const tokens: Token[] = [
  {
    slug: 'bitcoin',
    cmcRank: 1,
    tvPair: 'INDEX:BTCUSD',
    name: 'Bitcoin',
    symbol: 'BTC',
    color: '#F7931A',
    website: 'https://bitcoin.org',
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
    overview: bitcoinOverview,
    conclusion: bitcoinConclusion
  },
  {
    slug: 'ethereum',
    cmcRank: 2,
    tvPair: 'INDEX:ETHUSD',
    name: 'Ethereum',
    symbol: 'ETH',
    color: '#627EEA',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png',
    website: 'https://ethereum.org',
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
    overview: ethereumOverview,
    conclusion: ethereumConclusion
  },
  {
    slug: 'xrp',
    cmcRank: 7,
    tvPair: 'CRYPTO:XRPUSD',
    name: 'XRP',
    symbol: 'XRP',
    color: '#23292f',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/52.png',
    website: 'https://xrpl.org',
    certificateUrl: xrpCertificate,
    status: 'halal',
    tags: ['Layer-1', 'Payment Network', 'Remittance', 'Bridge Currency', 'Ripple'],

    overview: xrpOverview,
    conclusion: xrpConclusion
  },
  {
    slug: 'bnb',
    cmcRank: 4,
    tvPair: 'CRYPTO:BNBUSD',
    name: 'BNB',
    symbol: 'BNB',
    color: '#F3BA2F',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1839.png',
    website: 'https://www.bnbchain.org',
    certificateUrl: 'https://ito-group.com/wp-loads/2025/04/no-image.jpg',
    status: 'syubhat',
    tags: ['Layer-1', 'Smart Contract Platform', 'Exchange Ecosystem', 'Binance', 'Changpeng Zhao'],
    overview: bnbOverview,
    conclusion: bnbConclusion
  },
  {
    slug: 'solana',
    cmcRank: 9,
    tvPair: 'CRYPTO:SOLUSD',
    name: 'Solana',
    symbol: 'SOL',
    color: '#9945FF',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/5426.png',
    website: 'https://solana.com',
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

    overview: solanaOverview,
    conclusion: solanaConclusion
  },
  {
    slug: 'tron',
    cmcRank: 15,
    tvPair: 'CRYPTO:TRXUSD',
    name: 'Tron',
    symbol: 'TRX',
    color: '#FF0000',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1958.png',
    website: 'https://tron.network',
    certificateUrl: tronCertificate,
    status: 'halal',
    tags: ['Layer-1', 'Smart Contract Platform', 'DeFi', 'dApp', 'NFT', 'Gaming', 'Justin Sun'],

    overview: tronOverview,
    conclusion: tronConclusion
  },
  {
    slug: 'sui',
    cmcRank: 55,
    tvPair: 'CRYPTO:SUIUSD',
    name: 'Sui',
    symbol: 'SUI',
    color: '#4DA2FF',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/20947.png',
    website: 'https://sui.io',
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

    overview: suiOverview,
    conclusion: suiConclusion
  },
  {
    slug: 'avalanche',
    cmcRank: 73,
    tvPair: 'CRYPTO:AVAXUSD',
    name: 'Avalanche',
    symbol: 'AVAX',
    color: '#E84142',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/5805.png',
    website: 'https://avax.network',
    certificateUrl: avalancheCertificate,
    status: 'halal',
    tags: ['Layer-1', 'Smart Contract Platform', 'DeFi', 'dApp', 'Gaming'],

    overview: avalancheOverview,
    conclusion: avalancheConclusion
  },
  {
    slug: 'plasma-xpl',
    cmcRank: 95,
    tvPair: 'BINANCE:XPLUSDT.P',
    name: 'Plasma',
    symbol: 'XPL',
    color: '#295B4F',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/36645.png',
    website: 'https://plasma.to',
    certificateUrl: plasmaXplCertificate,
    status: 'halal',
    tags: ['Layer-1', 'Stablecoin Infrastructure', 'Payment', 'EVM-Compatible'],

    overview: plasmaXplOverview,
    conclusion: plasmaXplConclusion
  },
  {
    slug: 'world-liberty-financial-wlfi',
    cmcRank: 1000,
    tvPair: 'MEXC:WLFIUSDT.P',
    name: 'World Liberty Financial',
    symbol: 'WLFI',
    color: '#E7AC08',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/33251.png',
    website: 'https://worldlibertyfinancial.com',
    certificateUrl: worldLibertyFinancialWLFICertificate,
    status: 'haram',
    tags: ['DeFi', 'Governance Token', 'Utility Token', 'World Liberty', 'Donald Trump'],

    overview: worldLibertyFinancialWLFIOverview,
    conclusion: worldLibertyFinancialWLFIconclusion
  },
  {
    slug: 'pax-gold',
    cmcRank: 1001,
    tvPair: 'TVC:GOLD',
    name: 'Pax Gold',
    symbol: 'PAXG',
    color: '#e5cb22',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4705.png',
    website: 'https://paxos.com/pax-gold',
    certificateUrl: paxGoldCertificate,
    status: 'halal',
    tags: ['RWA', 'Gold', 'Asset-Backed Token'],

    overview: paxGoldOverview,
    conclusion: paxGoldConclusion
  },
  {
    slug: 'tether-gold',
    cmcRank: 1002,
    tvPair: 'TVC:GOLD',
    name: 'Tether Gold',
    symbol: 'XAUt',
    color: '#D3B25B',
    logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/128x128/5176.png',
    website: 'https://gold.tether.to',
    certificateUrl: tetherGoldCertificate,
    status: 'halal',
    tags: ['RWA', 'Gold', 'Asset-Backed Token'],

    overview: tetherGoldOverview,
    conclusion: tetherGoldConclusion
  }
];
