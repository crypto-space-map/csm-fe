import {
  AboutProjectSection,
  CardLink,
  PostActionBlock,
  PostDate,
  PostText,
  ProjectIcon,
  ProjectName,
  ProjectSite,
  StyledEventCard,
} from './styled';

export const ProjectEventCard = () => {
  const project = {
    img: 'https://chainik.io/icons/BUSDE.png',
    name: 'Draco II EVM Launch',
    siteName: 'Crypto.com Coin (CRO)',
    postDate: '23 Jul 2021',
    post: 'Draco II, Phase 2 of the Crypto.org Cain Roadmap launches on 7-14',
    link: 'https://www.binance.com/ru',
  };
  return (
    <StyledEventCard>
      <AboutProjectSection>
        <ProjectIcon src={project.img} alt="123" />
        <ProjectName>{project.name}</ProjectName>
        <ProjectSite>{project.siteName}</ProjectSite>
        <PostDate>{project.postDate}</PostDate>
      </AboutProjectSection>
      <PostText>{project.post}</PostText>
      <PostActionBlock>
        <CardLink href="http://cryptospacemap.com/" target="_blank" rel="noreferrer">
          Proof
        </CardLink>
        <CardLink href="http://cryptospacemap.com/" target="_blank" rel="noreferrer">
          Source
        </CardLink>
      </PostActionBlock>
    </StyledEventCard>
  );
};
