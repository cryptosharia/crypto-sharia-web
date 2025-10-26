import type { PageLoad } from './$types';
import { getPosts } from '../services/post-service';
import { getTokens } from '../services/token-service';

export const load: PageLoad = async ({ url, fetch }) => {
  const activities = await getPosts(fetch, url.origin, { category: 'activity', range: [1, 6] });
  const articles = await getPosts(fetch, url.origin, { category: 'article', range: [1, 6] });
  const tokens = await getTokens(fetch, url.origin, { range: [1, 10] });

  return {
    activities,
    articles,
    tokens
  };
};
