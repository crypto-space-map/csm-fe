import { AccountDataContainer } from 'app/components/account/styled';
import { ProjectChange } from 'common/components/project-change';
import { Status } from 'common/components/status';

import { FavoriteProject } from '../../types';
import { LikeButton } from './like-button';
import { InfoBlock, ProjectCardHeader, ProjectCardSection, TagsBlock } from './styled';

type ProjectCardProps = FavoriteProject & { onLikeClick: (val: string) => void };

export const ProjectCard = ({
  name,
  tags,
  dayChange,
  weekChange,
  symbol,
  liked,
  onLikeClick,
}: ProjectCardProps) => {
  const statusVariant = liked ? 'outlined' : 'black';
  const handleClick = () => onLikeClick(name);
  return (
    <AccountDataContainer invert={liked}>
      <ProjectCardSection>
        <LikeButton liked={liked} onClick={handleClick} />
        <InfoBlock>
          <ProjectCardHeader liked={liked}>
            {name}
            <span>{symbol}</span>
          </ProjectCardHeader>
          <TagsBlock>
            {tags.map(tag => (
              <Status text={tag} variant={statusVariant} key={tag} />
            ))}
          </TagsBlock>
        </InfoBlock>
      </ProjectCardSection>
      <ProjectCardSection>
        <ProjectChange
          percentageChange={dayChange}
          changePeriod="24H Change"
          textAlign="end"
          lightVariant={!liked}
        />
        <ProjectChange
          percentageChange={weekChange}
          changePeriod="7D Change"
          textAlign="end"
          lightVariant={!liked}
        />
      </ProjectCardSection>
    </AccountDataContainer>
  );
};
