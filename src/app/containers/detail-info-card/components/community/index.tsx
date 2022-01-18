import { Card } from './card';
import { GithubCard } from './github-card';
import { TabContentWrapper } from './styles';
import { CardDataProps } from './types';

const cardsData: CardDataProps[] = [
  {
    id: 1,
    statCount: 3654,
    socialNetwork: 'telegram',
    link: 'https://learn.javascript.ru/switch',
  },

  {
    id: 2,
    statCount: 24903,
    socialNetwork: 'twitter',
    link: 'https://learn.javascript.ru/switch',
  },

  { id: 3, statCount: 345, socialNetwork: 'youtube', link: 'https://learn.javascript.ru/switch' },
  {
    id: 4,
    statCount: 315,
    socialNetwork: 'reddit',
    link: 'https://learn.javascript.ru/switch',
  },
  {
    id: 6,
    statCount: 167,
    stats: [
      { unit: 'Stars', count: 134 },
      { unit: 'Contributors', count: 1340 },
      { unit: 'Followers', count: 1340 },
      { unit: 'Close Issues', count: 1340 },
    ],
    socialNetwork: 'github',
    link: 'https://learn.javascript.ru/switch',
  },
  {
    id: 5,
    statCount: 567,
    socialNetwork: 'facebook',
    link: 'https://learn.javascript.ru/switch',
  },
  {
    id: 7,
    statCount: 567,
    socialNetwork: 'bitcoin',
    link: 'https://learn.javascript.ru/switch',
  },
];

export const Community = () => (
  <TabContentWrapper>
    {cardsData.map(item => {
      if (item.socialNetwork === 'github') {
        return <GithubCard key={item.id} {...item} />;
      }
      return <Card key={item.id} {...item} />;
    })}
  </TabContentWrapper>
);
