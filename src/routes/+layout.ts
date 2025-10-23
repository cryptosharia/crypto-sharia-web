import type { LayoutLoad } from './$types';

// Load on app startup
export const load: LayoutLoad = async ({ fetch }) => {
  const tokens = (await fetch('/api/tokens').then((res) => res.json())).data || [];

  // const prePosts = (await fetch('/api/posts').then((res) => res.json())).data || [];
  // const posts = prePosts.map((post: any) => ({
  //   ...post,
  //   date: new Date(post.date)
  // }));

  return {
    tokens: tokens,
    // posts: posts
  };
};
