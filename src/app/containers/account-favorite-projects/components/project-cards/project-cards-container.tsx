import { FavoriteProject } from '../../types';
import { ProjectCard } from './project-card';
import { StyledProjectCardContainer } from './styled';

export const ProjectsCardContainer = () => {
  const data: FavoriteProject[] = [
    { name: 'Robonomics Network', symbol: 'XRT', tags: ['IoT', 'IoT'], dayChange: -3.55, weekChange: 10 },
    { name: 'Robonomics Network', symbol: 'XRT', tags: ['IoT', 'IoT'], dayChange: -3.55, weekChange: 10 },
    { name: 'Robonomics Network', symbol: 'XRT', tags: ['IoT', 'IoT'], dayChange: -3.55, weekChange: 10 },
  ];
  return (
    <StyledProjectCardContainer>
      <ProjectCard />
    </StyledProjectCardContainer>
  );
};
