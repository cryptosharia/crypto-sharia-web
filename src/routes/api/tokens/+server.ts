import supabase from '../supabase';
import { CMC_API_KEY } from '$env/static/private';
import type { QuotedToken } from '../../../models';

export const GET = async ({ url }) => {
  try {
    const quoted = url.searchParams.get('quoted'); // "true" or "false"
    const slug = url.searchParams.get('slug');
    const status = url.searchParams.get('status');
    const skip = url.searchParams.get('skip'); // e.g. "slug-a,slug-b,slug-c"
    const range = url.searchParams.get('range'); // e.g. "1,10"

    let query = supabase.from('tokens').select('*', { count: 'exact' });

    // Filter by slug
    if (slug) {
      query = query.eq('slug', slug);
    }

    // Filter by status
    if (status) {
      query = query.eq('status', status);
    }

    // Skip specific slugs
    if (skip) {
      const slugsToSkip = skip.split(',').map((s) => s.trim());
      query = query.not('slug', 'in', `(${slugsToSkip.join(',')})`);
    }

    // Add range for pagination
    if (range) {
      const [from, to] = range.split(',').map((s) => parseInt(s.trim()));
      query = query.range(from - 1, to - 1);
    }

    const { data: tokens, error, count } = await query;

    if (error) throw new Error(error.message);

    if (quoted !== 'true' || tokens.length === 0) {
      // If not quoted, return data directly
      // y
      return new Response(
        JSON.stringify({
          error: false,
          message: 'Fetching tokens success',
          count: count,
          data: tokens
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    } else {
      // If quoted, fetch quotes from CMC API

      // Get token slugs string separated by comma (e.g. "bitcoin,ethereum,xrp,sui")
      const slugs = tokens.map((token) => token.slug).join(',');

      const res = await fetch(
        `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=${slugs}`,
        {
          headers: {
            Accept: 'application/json',
            'X-CMC_PRO_API_KEY': CMC_API_KEY
          }
        }
      );

      if (!res.ok) throw new Error(`CMC Fetching failed: ${res.statusText}`);

      const cmcQuotes = await res.json();

      if (cmcQuotes.status.error_code !== 0)
        throw new Error(`CMC Fetching error: ${cmcQuotes.status.error_message}`);

      const quotedTokens = tokens.map(async (token) => {
        const cmcQuote: any = Object.values(cmcQuotes.data).find((x: any) => x.slug === token.slug);

        // Update cmc_rank in database
        await supabase
          .from('tokens')
          .update({ cmc_rank: cmcQuote.cmc_rank })
          .eq('slug', token.slug);

        const result: QuotedToken = {
          ...token,
          cmc_rank: cmcQuote.cmc_rank,
          infinite_supply: cmcQuote.infinite_supply,
          max_supply: cmcQuote.max_supply,
          circulating_supply: cmcQuote.circulating_supply,
          price_usd: cmcQuote.quote.USD.price,
          market_cap_usd: cmcQuote.quote.USD.market_cap,
          market_cap_dominance: cmcQuote.quote.USD.market_cap_dominance,
          percent_change_24h: cmcQuote.quote.USD.percent_change_24h
        };

        return result;
      });

      return new Response(
        JSON.stringify({
          error: false,
          message: 'Fetching tokens success',
          count: count,
          data: await Promise.all(quotedTokens)
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }
  } catch (error: any) {
    console.error(error);

    return new Response(JSON.stringify({ error: true, message: error.toString() }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
