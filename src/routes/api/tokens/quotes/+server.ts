import { CMC_API_KEY } from '$env/static/private';
import supabase from '../../supabase';

export const GET = async ({ url }) => {
  try {
    const slugs = url.searchParams.get('slugs'); // e.g. "bitcoin,ethereum,sui"

    if (!slugs) throw new Error('No slugs provided (e.g. ?slugs=bitcoin,ethereum,sui)');

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

    const result = await res.json();

    if (result.status.error_code !== 0 && !result.data)
      throw new Error(`CMC Fetching error: ${result.status.error_message}`);

    const quotes = Object.values(result.data).map(async (quote: any) => {
      // Update cmc_rank in database if the token exists
      // If the token doesn't exist in the database, this will do nothing
      // Because the .eq() method will filter out any rows that don't match the condition
      // So, there will be no error if the token doesn't exist
      await supabase.from('tokens').update({ cmc_rank: quote.cmc_rank }).eq('slug', quote.slug);

      const result = {
        slug: quote.slug,
        cmc_rank: quote.cmc_rank,
        infinite_supply: quote.infinite_supply,
        max_supply: quote.max_supply,
        circulating_supply: quote.circulating_supply,
        price_usd: quote.quote.USD.price,
        market_cap_usd: quote.quote.USD.market_cap,
        market_cap_dominance: quote.quote.USD.market_cap_dominance,
        percent_change_24h: quote.quote.USD.percent_change_24h
      };

      return result;
    });

    return new Response(
      JSON.stringify({
        message: 'Fetching token quotes success',
        data: await Promise.all(quotes)
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
