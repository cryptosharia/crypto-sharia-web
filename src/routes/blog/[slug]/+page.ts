import type { PageLoad } from './$types';
import { getPostBySlug } from '../data';

export const load: PageLoad = ({ params }) => {
  const post = getPostBySlug(params.slug);

  return {
    post: post
  };
};
