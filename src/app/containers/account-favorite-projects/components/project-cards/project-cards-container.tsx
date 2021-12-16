import { FavoriteProject } from '../../types';
import { ProjectCard } from './project-card';
import { StyledProjectCardContainer } from './styled';

export const ProjectsCardContainer = () => {
  const data: FavoriteProject[] = [
    {
      name: 'Robonomics Network',
      symbol: 'XRT',
      tags: ['IoT', 'Telecommunication'],
      dayChange: -3.55,
      weekChange: 10.01,
    },
    {
      name: 'Robonomics Network',
      symbol: 'BNB',
      tags: ['Telecommunication', 'IoT'],
      dayChange: -3.55,
      weekChange: 10.02,
    },
    {
      name: 'Robonomics Network',
      symbol: 'BTC',
      tags: ['IoT', 'Telecommunication', 'IoT', 'Telecommunication'],
      dayChange: -3.55,
      weekChange: 20.11,
    },
  ];
  return (
    <StyledProjectCardContainer>
      {data.map(project => (
        <ProjectCard {...project} key={project.name + project.symbol} />
      ))}
    </StyledProjectCardContainer>
  );
};
