export type Token = {
  slug: string;
  pair: string;
  name: string;
  symbol: string;
  color: string;
  logoUrl: string;
  certificateUrl: string;
  status: 'halal' | 'haram' | 'gray';
  tags: string[];
  content: {
    overview: string;
    conclusion: string;
  };
};
