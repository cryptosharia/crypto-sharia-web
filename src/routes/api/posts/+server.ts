import { posts } from '../../../database';

export const GET = async () => {
  try {
    return new Response(
      JSON.stringify({
        error: false,
        message: 'Fetching posts success',
        data: posts
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
