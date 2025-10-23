import type { PageLoad } from './$types';
import { getPosts } from '../services/post-service';

// Load on app startup
export const load: PageLoad = async () => {
  const posts = await getPosts(undefined, undefined, [1, 6]);

  return {
    posts
  };
};
