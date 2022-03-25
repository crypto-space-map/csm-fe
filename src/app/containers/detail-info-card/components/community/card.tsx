import { useMemo } from 'react';

import { MediumIcon, DiscordIcon, TelegramIcon, TwitterIcon } from 'assets';

import { SocialNetwork } from '../../types';
import { InfoItem } from './info-item';
import { CardWrapper, CardContent, IconWrapper } from './styles';
import { SocialNetworkList } from './types';

interface CardProps extends SocialNetwork {
  socialNetwork: keyof typeof SocialNetworkList;
}

const socialNetworkOptions = [
  { network: SocialNetworkList.medium, icon: <MediumIcon />, unit: 'Subscribers' }, // заменить иконку
  { network: SocialNetworkList.discord, icon: <DiscordIcon />, unit: 'Followers' },
  {
    network: SocialNetworkList.telegram,
    icon: <TelegramIcon />,
    unit: { 1: 'Users', 2: 'Subscribers' },
  },
  { network: SocialNetworkList.twitter, icon: <TwitterIcon />, unit: 'Followers' },
];

const defaultSocialOption = { unit: '', icon: null };

export const Card = ({ count = 0, socialNetwork, url, type = 1 }: CardProps) => {
  const { unit, icon } = useMemo(
    () => socialNetworkOptions.find(item => item.network === socialNetwork) || defaultSocialOption,
    [socialNetwork]
  );
  const resultUnit = typeof unit === 'object' ? unit[type] : unit;

  return (
    <CardWrapper href={url} target="_blank">
      <CardContent>
        <IconWrapper>{icon}</IconWrapper>
        <InfoItem count={count} unit={resultUnit} />
      </CardContent>
    </CardWrapper>
  );
};
