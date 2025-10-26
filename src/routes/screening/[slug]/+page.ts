import type { PageLoad } from './$types';
import { getTokens } from '../../../services/token-service';

export const load: PageLoad = async ({ url, fetch, params }) => {
  const token = (await getTokens(fetch, url.origin, { slug: params.slug }))[0];
  const tokens = await getTokens(fetch, url.origin, { skip: [token.slug], range: [1, 10] });

  return {
    token,
    tokens
  };
};
