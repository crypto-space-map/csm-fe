export enum SocialNetworkList {
  bitcoin = 'bitcoin',
  facebook = 'facebook',
  github = 'github',
  reddit = 'reddit',
  telegram = 'telegram',
  twitter = 'twitter',
  youtube = 'youtube',
}

export interface CardDataProps {
  id: number;
  statCount: number;
  socialNetwork: keyof typeof SocialNetworkList;
  link: string;
}
