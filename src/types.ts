export type Tutorial = {
  name: string;
  coach: string;
  img: string;
};

export type Tier = "basic" | "standard" | "premium";

export type feature = {
  title: string;
  tiers: Tier[];
};

export type Package = {
  tier: Tier;
  price: number;
  color: string;
  description: string;
  features: feature[];
};

export type FAQ = {
  question: string;
  answer: string;
};
