export enum SocialNetworkList {
  bitcoin = 'bitcoin',
  facebook = 'facebook',
  github = 'github',
  reddit = 'reddit',
  telegram = 'telegram',
  twitter = 'twitter',
  youtube = 'youtube',
}

export interface StatOptions {
  unit: string;
  count: number;
}

export interface CardDataProps {
  id: number;
  statCount: number;
  stats?: StatOptions[];
  socialNetwork: keyof typeof SocialNetworkList;
  link: string;
}
