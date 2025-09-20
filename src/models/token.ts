export type Token = {
  slug: string;
  name: string;
  symbol: string;
  color: string;
  logoUrl: string;
  status: 'halal' | 'haram';
  tags: string[];
  content: {
    overview: string;
    conclusion: string;
  };
};
