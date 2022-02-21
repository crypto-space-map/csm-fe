import { GithubIcon } from 'assets';

import {
  DoubleCardWrapper,
  DoubleCardContent,
  IconWrapper,
  StyledCount,
  InfoWrapper,
  StyledInfo,
} from './styles';
import { StatOptions } from './types';

interface CardProps {
  stats?: StatOptions[];
  link: string;
}

export const GithubCard = ({ stats, link }: CardProps) => (
  <DoubleCardWrapper href={link} target="_blank">
    <DoubleCardContent>
      <IconWrapper>
        <GithubIcon />
      </IconWrapper>
      <InfoWrapper>
        {stats?.map(item => (
          <StyledInfo key={item.unit}>
            <StyledCount>{item.count.toLocaleString()}</StyledCount>
            <span>{item.unit}</span>
          </StyledInfo>
        ))}
      </InfoWrapper>
    </DoubleCardContent>
  </DoubleCardWrapper>
);

GithubCard.defaultProps = {
  stats: [],
};
