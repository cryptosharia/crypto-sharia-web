export type Post = {
  category: 'activity' | 'article';
  slug: string;
  date: Date;
  tags: string[];
  title: string;
  description: string;
  thumbnailUrl: string;
  content: string;
};
