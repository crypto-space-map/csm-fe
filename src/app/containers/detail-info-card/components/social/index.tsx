import { Card } from '../card';
import { SocialContentWrapper } from './styles';

const socialData = [
  {
    id: 1,
    company: {
      title: 'Robonomics Twitter',
      linkText: '@AIRA_Robonomics',
      link: 'https://cryptospacemap.atlassian.net/browse/CSM-3',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89s6Jq3AQCRJM19NtW28glmVd7eT6bpjrTA&usqp=CAU',
    },
    text: "Robonomics Software Architect @EnsRationis will host a tech AMA in the Robonomics telegram community. We'll cover the following topics: - XRT rewards for KSM bonders ...",
  },
  {
    id: 2,
    company: {
      title: 'Robonomics Announcements',
      linkText: 'https://t.me/Robonomics_ann',
      link: 'https://cryptospacemap.atlassian.net/browse/CSM-3',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89s6Jq3AQCRJM19NtW28glmVd7eT6bpjrTA&usqp=CAU',
    },
    text: "Robonomics Software Architect @EnsRationis will host a tech AMA in the Robonomics telegram community. We'll cover the following topics: - XRT rewards for KSM bonders ...",
  },
];

export const Social = () => (
  <SocialContentWrapper>
    {socialData.map(item => (
      <Card key={item.id} {...item} />
    ))}
  </SocialContentWrapper>
);
