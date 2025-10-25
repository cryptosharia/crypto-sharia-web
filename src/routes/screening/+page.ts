import type { PageLoad } from './$types';
import { getTokens } from '../../services/token-service';

export const load: PageLoad = async ({ url, fetch }) => {
  const tokens = await getTokens(fetch, url.origin, { range: [1, 25] });

  return {
    tokens
  };
};
