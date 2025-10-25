import type { PageLoad } from './$types';
import { getTokens } from '../../../services/token-service';

export const load: PageLoad = async ({ url, fetch }) => {
  const tokens = await getTokens(fetch, url.origin, { status: 'haram', range: [1, 25] });

  return {
    tokens
  };
};
