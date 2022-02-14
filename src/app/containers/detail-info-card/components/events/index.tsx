import { Card } from '../card';
import { EventsContentWrapper } from './styles';

const eventData = [
  {
    id: 1,
    socialMediaType: 2,
    accountName: 'Mina Protocol',
    accountUrl: 'https://twitter.com/MinaProtocol',
    accountImageUrl: 'https://pbs.twimg.com/profile_images/1310958947357077504/JM4_vQ34_normal.png',
    createdAt: '2022-01-07T16:24:11Z',
    text: 'When do you think #WorldMinaDay should be? \n\nRegister your vote 🗳 https://t.co/8nYWmcN45t',
    url: 'https://twitter.com/MinaProtocol/status/1479489048435736576',
    buttons: [
      {
        id: 'proof',
        text: 'Proof',
        link: 'https://cryptospacemap.atlassian.net/browse/CSM-3',
      },
      {
        id: 'source',
        text: 'Source',
        link: 'https://cryptospacemap.atlassian.net/browse/CSM-3',
      },
    ],
  },
  {
    id: 2,
    socialMediaType: 2,
    accountName: 'Mina Protocol',
    accountUrl: 'https://twitter.com/MinaProtocol',
    accountImageUrl: 'https://pbs.twimg.com/profile_images/1310958947357077504/JM4_vQ34_normal.png',
    createdAt: '2022-01-06T16:01:00Z',
    text: "The Delegation Program with participation from Mina's community is key to keeping the network #decentralized and secure.\n \nA newly created delegation committee is reviewing community feedback and working to improve the program. Learn more about it here ⬇️\nhttps://t.co/EzRRFrBPYc https://t.co/tHMnqkwMU6",
    url: 'https://twitter.com/MinaProtocol/status/1479120828440612879',
    buttons: [
      {
        id: 'proof',
        text: 'Proof',
        link: 'https://cryptospacemap.atlassian.net/browse/CSM-3',
      },
      {
        id: 'source',
        text: 'Source',
        link: 'https://cryptospacemap.atlassian.net/browse/CSM-3',
      },
    ],
  },
];
export const Events = () => (
  <EventsContentWrapper>
    {eventData.map(item => (
      <Card key={item.id} {...item} />
    ))}
  </EventsContentWrapper>
);
