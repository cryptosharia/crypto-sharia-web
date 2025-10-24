import type { PageLoad } from './$types';
import { getPosts } from '../../../services/post-service';

export const load: PageLoad = async ({ url, fetch }) => {
  const posts = await getPosts(fetch, url.origin, { category: 'activity', range: [1, 12] });

  return {
    posts
  };
};
