import { SocialCard } from './social-card';

const socialData = [
  {
    id: 1,
    title: 'Robonomics Twitter',
    linkTitle: '@AIRA_Robonomics',
    link: 'https://cryptospacemap.atlassian.net/browse/CSM-3',
    companyLogoHref:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89s6Jq3AQCRJM19NtW28glmVd7eT6bpjrTA&usqp=CAU',
    text: "Robonomics Software Architect @EnsRationis will host a tech AMA in the Robonomics telegram community. We'll cover the following topics: - XRT rewards for KSM bonders ...",
  },
  {
    id: 2,
    title: 'Robonomics Announcements',
    linkTitle: 'https://t.me/Robonomics_ann',
    link: 'https://cryptospacemap.atlassian.net/browse/CSM-3',
    companyLogoHref:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89s6Jq3AQCRJM19NtW28glmVd7eT6bpjrTA&usqp=CAU',
    text: "Robonomics Software Architect @EnsRationis will host a tech AMA in the Robonomics telegram community. We'll cover the following topics: - XRT rewards for KSM bonders ...",
  },
];
export const Social = () => (
  <>
    {socialData.map(item => (
      <SocialCard key={item.id} {...item} />
    ))}
  </>
);
