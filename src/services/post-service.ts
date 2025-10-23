import type { Post } from '../models';

function mapRowToModel(post: any): Post {
  return {
    slug: post.slug,
    category: post.category,
    date: new Date(post.date),
    tags: post.tags,
    title: post.title,
    description: post.description,
    thumbnailUrl: post.thumbnailUrl,
    content_url: post.content_url
  };
}

export async function getPosts(
  slug?: string,
  category?: 'activity' | 'article',
  range?: [number, number]
) {
  try {
    const url = new URL('http://localhost:5173/api/posts');

    if (slug) url.searchParams.set('slug', slug);
    if (category) url.searchParams.set('category', category);
    if (range && range.length === 2) {
      url.searchParams.set('from', String(range[0]));
      url.searchParams.set('to', String(range[1]));
    }

    const res = await fetch(url);

    if (!res.ok) throw new Error('Failed to fetch posts');

    const result = await res.json();

    if (result.error) throw new Error(result.message);

    let posts: Post[] = result.data.map(mapRowToModel);

    // if (skip.length > 0) posts = posts.filter((post: Post) => !skip.includes(post.slug));

    return posts;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.toString());
  }
}

// export async function getPostBySlug(slug: string) {
//   try {
//     const res = await fetch('/api/posts?slug=' + slug);

//     if (!res.ok) throw new Error('Failed to fetch post');

//     const data = (await res.json()).data;
//     const post = mapRowToModel(data[0]);

//     return post;
//   } catch (error: any) {
//     console.error(error);
//     throw new Error(error.toString());
//   }
// }
