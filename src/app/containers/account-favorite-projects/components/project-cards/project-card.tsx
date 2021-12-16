import { ProjectChange } from 'common/components/project-change';
import { Status } from 'common/components/status';

import { FavoriteProject } from '../../types';
import { ProjectCardHeader, ProjectCardSection, StyledProjectCard, TagsBlock } from './styled';

export const ProjectCard = ({ name, tags, dayChange, weekChange, symbol }: FavoriteProject) => (
  <StyledProjectCard>
    <ProjectCardSection flow="row">
      <ProjectCardHeader>
        {name}
        <span>{symbol}</span>
      </ProjectCardHeader>
      <TagsBlock>
        {tags.map(tag => (
          <Status text={tag} variant="outlined" key={tag} />
        ))}
      </TagsBlock>
    </ProjectCardSection>
    <ProjectCardSection>
      <ProjectChange change={dayChange} />
      <ProjectChange change={weekChange} />
    </ProjectCardSection>
  </StyledProjectCard>
);
