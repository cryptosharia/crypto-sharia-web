import type { PageLoad } from './$types';
import { getTokens } from '../../../services/token-service';

export const load: PageLoad = async ({ url, fetch }) => {
  const search = url.searchParams.get('search');

  const tokens = await getTokens(fetch, url.origin, {
    status: 'syubhat',
    range: [1, 25],
    keyword: search ?? undefined
  });

  return {
    tokens
  };
};
