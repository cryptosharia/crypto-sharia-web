import { tokens } from '../../../database';
import { CMC_API_KEY } from '$env/static/private';
import type { QuotedToken } from '../../../models';

export const GET = async () => {
  // Get token slugs string from database separated by comma (e.g. btc,sui,wal,ns)
  const slugs = tokens.map((token) => token.slug).join(',');

  try {
    const data = await fetch(
      `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=${slugs}`,
      {
        headers: {
          Accept: 'application/json',
          'X-CMC_PRO_API_KEY': CMC_API_KEY
        }
      }
    ).then((res) => res.json());

    if (data.status.error_code !== 0) throw new Error(data.status.error_message);

    return new Response(
      JSON.stringify({
        error: false,
        message: 'Fetching tokens success',
        data: tokens.map((token) => {
          const cmcToken: any = Object.values(data.data).find((x: any) => x.slug === token.slug);

          const result: QuotedToken = {
            ...token,
            cmc_rank: cmcToken.cmc_rank,
            infinite_supply: cmcToken.infinite_supply,
            max_supply: cmcToken.max_supply,
            circulating_supply: cmcToken.circulating_supply,
            price: cmcToken.quote.USD.price,
            market_cap: cmcToken.quote.USD.market_cap,
            market_cap_dominance: cmcToken.quote.USD.market_cap_dominance,
            percent_change_24h: cmcToken.quote.USD.percent_change_24h
          };

          return result;
        })
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
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
