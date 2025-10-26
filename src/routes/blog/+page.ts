import type { PageLoad } from './$types';
import { getPosts } from '../../services/post-service';

export const load: PageLoad = async ({ url, fetch }) => {
  const search = url.searchParams.get('search');

  const posts = await getPosts(fetch, url.origin, { range: [1, 12], keyword: search ?? undefined });

  return {
    posts
  };
};
