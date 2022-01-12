import { useMemo } from 'react';

import { BitcoinIcon, FacebookIcon, RedditIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from 'assets';

import { CardWrapper, CardContent, IconWrapper, StyledCount } from './styles';
import { SocialNetworkList } from './types';

interface CardProps {
  statCount: number;
  socialNetwork: keyof typeof SocialNetworkList;
  link: string;
}

const socialNetworkOptions = [
  { network: SocialNetworkList.bitcoin, icon: <BitcoinIcon />, unit: 'Subscribers' },
  { network: SocialNetworkList.facebook, icon: <FacebookIcon />, unit: 'Followers' },
  { network: SocialNetworkList.reddit, icon: <RedditIcon />, unit: 'Subscribers' },
  { network: SocialNetworkList.telegram, icon: <TelegramIcon />, unit: 'Users' },
  { network: SocialNetworkList.twitter, icon: <TwitterIcon />, unit: 'Followers' },
  { network: SocialNetworkList.youtube, icon: <YoutubeIcon />, unit: 'Subscribers' },
];

const defaultSocialOption = { unit: '', icon: null };

export const Card = ({ statCount = 0, socialNetwork, link }: CardProps) => {
  const { unit, icon } = useMemo(
    () => socialNetworkOptions.find(item => item.network === socialNetwork) || defaultSocialOption,
    [socialNetwork]
  );

  return (
    <CardWrapper href={link} target="_blank">
      <CardContent>
        <IconWrapper>{icon}</IconWrapper>
        <StyledCount>{statCount.toLocaleString()}</StyledCount>
        <span>{unit}</span>
      </CardContent>
    </CardWrapper>
  );
};
