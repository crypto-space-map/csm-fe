import { Card } from '../card';
import { EventsContentWrapper } from './styles';

const eventData = [
  {
    id: 1,
    company: {
      title: 'Parachain slot strategy',
      linkText: 'Robonomics network (XRT)',
      link: 'https://cryptospacemap.atlassian.net/browse/CSM-3',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89s6Jq3AQCRJM19NtW28glmVd7eT6bpjrTA&usqp=CAU',
    },
    text: 'Robonomics releases parachain auction slot strategy ',
    date: '2021-10-16T19:20:42+03:00',
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
    company: {
      title: 'Robonomics Announcements',
      linkText: 'https://t.me/Robonomics_ann',
      link: 'https://cryptospacemap.atlassian.net/browse/CSM-3',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89s6Jq3AQCRJM19NtW28glmVd7eT6bpjrTA&usqp=CAU',
    },
    text: 'Next listings on KickEX.com: July 6 $XRT, $BUSD, $Akro ',
    date: '2021-10-16T19:20:42+03:00',
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
