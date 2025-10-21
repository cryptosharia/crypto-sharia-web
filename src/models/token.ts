export type Token = {
  slug: string;
  pair: string;
  name: string;
  symbol: string;
  color: string;
  website: string;
  logoUrl: string;
  certificateUrl: string;
  status: 'halal' | 'haram' | 'syubhat';
  tags: string[];
  content: {
    overview: string;
    conclusion: string;
  };
};
