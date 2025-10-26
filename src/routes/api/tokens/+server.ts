import supabase from '../supabase';

export const GET = async ({ url }) => {
  try {
    const slug = url.searchParams.get('slug');
    const keyword = url.searchParams.get('keyword');
    const status = url.searchParams.get('status');
    const skip = url.searchParams.get('skip'); // e.g. "bitcoin,ethereum,sui"
    const range = url.searchParams.get('range'); // e.g. "1,10"

    let query = supabase.from('tokens').select('*', { count: 'exact' });

    // Filter by slug
    if (slug) {
      query = query.eq('slug', slug);
    }

    // Filter by keyword in name or symbol
    if (keyword) {
      query = query.or(`name.ilike.%${keyword}%,symbol.ilike.%${keyword}%`);
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

    query = query.order('cmc_rank', { ascending: true });

    const { data: tokens, error, count } = await query;

    if (error) throw new Error(error.message);

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
