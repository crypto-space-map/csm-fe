import { useMemo } from 'react';

import {
  BitcoinIcon,
  FacebookIcon,
  GithubIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'assets';

import { CardWrapper, CardContent, IconWrapper } from './styles';
import { SocialNetworkList } from './types';

interface CardProps {
  statCount: number;
  socialNetwork: keyof typeof SocialNetworkList;
  link: string;
}

const socialNetworkOptions = [
  { network: SocialNetworkList.bitcoin, icon: <BitcoinIcon />, unit: 'subscribers' },
  { network: SocialNetworkList.facebook, icon: <FacebookIcon />, unit: 'followers' },
  { network: SocialNetworkList.github, icon: <GithubIcon />, unit: 'stars' },
  { network: SocialNetworkList.reddit, icon: <RedditIcon />, unit: 'subscribers' },
  { network: SocialNetworkList.telegram, icon: <TelegramIcon />, unit: 'users' },
  { network: SocialNetworkList.twitter, icon: <TwitterIcon />, unit: 'followers' },
  { network: SocialNetworkList.youtube, icon: <YoutubeIcon />, unit: 'subscribers' },
];

const defaultSocialOption = { unit: '', icon: null };

export const Card = ({ statCount = 0, socialNetwork, link }: CardProps) => {
  const { unit, icon } = useMemo(
    () => socialNetworkOptions.find(item => item.network === socialNetwork) || defaultSocialOption,
    [socialNetwork]
  );

  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <CardWrapper onClick={handleClick}>
      <CardContent>
        <IconWrapper>{icon}</IconWrapper>
        <span>{statCount.toLocaleString()}</span>
        <span>{unit}</span>
      </CardContent>
    </CardWrapper>
  );
};
