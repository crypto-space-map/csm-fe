import { Card } from './card';
import { TabContentWrapper } from './styles';

/* bitcoin: 'bitcoin',
  facebook: 'facebook',
  github: 'github',
  reddit: 'reddit',
  telegram: 'telegram',
  twitter: 'twitter', */
const cardsData = [
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
    id: 5,
    statCount: 567,
    socialNetwork: 'facebook',
    link: 'https://learn.javascript.ru/switch',
  },
  {
    id: 6,
    statCount: 167,
    socialNetwork: 'github',
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
    {cardsData.map(item => (
      <Card key={item.id} {...item} />
    ))}
  </TabContentWrapper>
);
