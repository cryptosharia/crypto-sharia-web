export type Token = {
  slug: string;
  name: string;
  symbol: string;
  color: string;
  logoUrl: string;
  status: 'halal' | 'haram';
  content: {
    overview: string;
    conclusion: string;
  };
};
