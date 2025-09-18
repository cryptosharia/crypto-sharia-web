import type { LayoutLoad } from './$types';

// Load on app startup
export const load: LayoutLoad = async ({ fetch }) => {
  const res = await fetch('/api/tokens').then((res) => res.json());

  return {
    tokens: res.data
  };
};
