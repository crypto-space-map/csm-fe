import { useCallback } from 'react';

import { AccountDataContainer } from 'app/components/account/styled';
import { LikeButton } from 'common/components/like-button';
import { ProjectChange } from 'common/components/project-change';
import { Status } from 'common/components/status';

import { FavoriteProject } from '../../types';
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
  const handleClick = useCallback(() => onLikeClick(name), [onLikeClick, name]);
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
