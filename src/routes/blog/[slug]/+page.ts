import type { PageLoad } from './$types';
import { getPosts } from '../../../services/post-service';

export const load: PageLoad = async ({ url, params, fetch }) => {
  const post = (await getPosts(fetch, url.origin, { slug: params.slug, includeContent: true }))[0];
  const posts = await getPosts(fetch, url.origin, {
    category: post.category,
    skip: [post.slug],
    range: [1, 3]
  });

  return {
    post,
    posts
  };
};
