import { AboutProjectSection, ProjectIcon, ProjectName, ProjectSite, StyledEventCard } from './styled';

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
      </AboutProjectSection>
    </StyledEventCard>
  );
};
