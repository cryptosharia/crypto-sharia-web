import type { Post } from '../models';

export function getPosts(
  posts: Post[],
  category: 'all' | 'activity' | 'article' = 'all',
  limit?: number,
  skip: string[] = []
) {
  let data = posts;

  if (category !== 'all') data = posts.filter((post) => post.category === category);

  data = data.sort((a, b) => b.date.getTime() - a.date.getTime());

  if (skip.length > 0) data = data.filter((post) => !skip.includes(post.slug));

  if (limit) data = data.slice(0, limit);

  return data;
}

export function getPostBySlug(posts: Post[], slug: string) {
  return posts.find((post) => post.slug === slug);
}
