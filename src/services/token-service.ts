import type { Token, QuotedToken } from '../models';

export async function getTokens(
  fetch: any,
  baseUrl: string,
  params: {
    quoted?: boolean;
    slug?: string;
    status?: 'halal' | 'haram' | 'syubhat';
    skip?: string[];
    range?: [number, number];
  } = {}
): Promise<Token[] | QuotedToken[]> {
  try {
    const url = new URL(baseUrl + '/api/tokens');

    if (params.quoted) url.searchParams.set('quoted', 'true');
    if (params.slug) url.searchParams.set('slug', params.slug);
    if (params.status) url.searchParams.set('status', params.status);
    if (params.skip && params.skip.length > 0) url.searchParams.set('skip', params.skip.join(','));
    if (params.range && params.range.length === 2) {
      const [from, to] = params.range;
      url.searchParams.set('range', `${from},${to}`);
    }

    const res = await fetch(url);

    if (!res.ok) throw new Error('Failed to fetch tokens');

    const result = await res.json();

    if (result.error) throw new Error(result.message);

    if (!params.quoted) {
      const tokens: Token[] = result.data.map(async (token: any) => {
        const overview = await (await fetch(token.overview_url)).text();
        const conclusion = await (await fetch(token.conclusion_url)).text();

        return {
          slug: token.slug,
          cmcRank: token.cmc_rank,
          name: token.name,
          symbol: token.symbol,
          color: token.color,
          status: token.status,
          tvPair: token.tv_pair,
          tags: token.tags,
          website: token.website,
          logoUrl: token.logo_url,
          certificateUrl: token.certificate_url,
          overview: overview,
          conclusion: conclusion
        };
      });

      return await Promise.all(tokens);
    } else {
      const tokens: QuotedToken[] = result.data.map(async (token: any) => {
        const overview = await (await fetch(token.overview_url)).text();
        const conclusion = await (await fetch(token.conclusion_url)).text();

        return {
          slug: token.slug,
          cmcRank: token.cmc_rank,
          name: token.name,
          symbol: token.symbol,
          color: token.color,
          status: token.status,
          tvPair: token.tv_pair,
          tags: token.tags,
          website: token.website,
          logoUrl: token.logo_url,
          certificateUrl: token.certificate_url,
          infiniteSupply: token.infinite_supply,
          maxSupply: token.max_supply,
          circulatingSupply: token.circulating_supply,
          price: token.price_usd,
          marketCap: token.market_cap_usd,
          marketCapDominance: token.market_cap_dominance,
          percentChange24h: token.percent_change_24h,
          overview: overview,
          conclusion: conclusion
        };
      });

      return await Promise.all(tokens);
    }
  } catch (error: any) {
    console.error(error);
    throw new Error(error.toString());
  }
}
