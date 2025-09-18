import type { Token } from './token';
export type QuotedToken = {
  cmc_rank: number;
  infinite_supply: boolean;
  max_supply: number;
  circulating_supply: number;
  price: number;
  market_cap: number;
  percent_change_24h: number;
} & Token;

