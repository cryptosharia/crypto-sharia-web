import type { Token } from './token';
export type QuotedToken = {
  infiniteSupply: boolean;
  maxSupply: number;
  circulatingSupply: number;
  price: number;
  marketCap: number;
  marketCapDominance: number;
  percentChange24h: number;
} & Token;
