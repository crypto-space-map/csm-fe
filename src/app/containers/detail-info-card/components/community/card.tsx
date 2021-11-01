import LinkIcon from '@mui/icons-material/Link';

import BitcoinIcon from 'assets/bitcoin.svg';
import FacebookIcon from 'assets/facebook.svg';
import GithubIcon from 'assets/github.svg';
import RedditIcon from 'assets/reddit.svg';
import TelegramIcon from 'assets/telegram.svg';
import TwitterIcon from 'assets/twitter.svg';
import YoutubeIcon from 'assets/youtube.svg';

import { CardWrapper, CardContent, IconWrapper } from './styles';

interface CardProps {
  statCount: number;
  socialNetwork: string;
  link: string;
}

const iconList = {
  bitcoin: 'bitcoin',
  facebook: 'facebook',
  github: 'github',
  reddit: 'reddit',
  telegram: 'telegram',
  twitter: 'twitter',
  youtube: 'youtube',
};

const unitList: { [key: string]: string } = {
  bitcoin: 'subscribers',
  facebook: 'followers',
  github: 'stars',
  reddit: 'subscribers',
  telegram: 'users',
  twitter: 'followers',
  youtube: 'subscribers',
};

const getIcon = (name: string) => {
  switch (name) {
    case iconList.bitcoin:
      return <BitcoinIcon />;
    case iconList.facebook:
      return <FacebookIcon />;
    case iconList.github:
      return <GithubIcon />;
    case iconList.reddit:
      return <RedditIcon />;
    case iconList.telegram:
      return <TelegramIcon />;
    case iconList.twitter:
      return <TwitterIcon />;
    case iconList.youtube:
      return <YoutubeIcon />;
    default:
      return <LinkIcon />;
  }
};

export const Card = ({ statCount = 0, socialNetwork, link }: CardProps) => {
  const handleClick = () => {
    console.log(link);
  };

  return (
    <CardWrapper>
      <CardContent>
        <IconWrapper>{getIcon(socialNetwork)}</IconWrapper>
        <span>{statCount}</span>
        <span>{unitList[socialNetwork]}</span>
      </CardContent>
    </CardWrapper>
  );
};
