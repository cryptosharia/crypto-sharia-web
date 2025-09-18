import { page } from '$app/state';
import type { QuotedToken } from '../models';

export function getTokens(
  tokens: QuotedToken[],
  category: 'all' | 'halal' | 'haram' = 'all',
  limit?: number,
  skip: string[] = []
) {
  let data = tokens;
  if (category !== 'all') data = data.filter((token) => token.status === category);

  if (skip.length > 0) data = data.filter((token) => !skip.includes(token.symbol));

  if (limit) data = data.slice(0, limit);

  return data;
}

export function getTokenBySlug(tokens: QuotedToken[], slug: string) {
  return tokens.find((token) => token.slug === slug);
}
