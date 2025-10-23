import supabase from '../supabase';

export const GET = async ({ url }) => {
  try {
    const slug = url.searchParams.get('slug');
    const category = url.searchParams.get('category');
    const from = url.searchParams.get('from') ? parseInt(url.searchParams.get('from')!) : null;
    const to = url.searchParams.get('to') ? parseInt(url.searchParams.get('to')!) : null;

    let query = supabase.from('posts').select('*', { count: 'exact' });

    // Filter by slug
    if (slug) {
      query = query.eq('slug', slug);
    }

    // Filter by category
    if (category) {
      query = query.eq('category', category);
    }

    // Add range for pagination
    if (from && to) query = query.range(from - 1, to - 1);

    const { data, error, count } = await query;

    if (error) throw new Error(error.message);

    return new Response(
      JSON.stringify({
        error: false,
        message: 'Fetching posts success',
        count: count,
        data: data || []
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
