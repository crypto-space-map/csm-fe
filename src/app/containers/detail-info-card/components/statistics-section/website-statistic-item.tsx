import { cutLink } from 'utils/detail-info';

import { StatistiсTitle, StyledLinkWrapper, StatisticItemWrapper, StyledLink } from './styles';
import { StatisticItemProps } from './types';

export const WebsiteStatisticItem = ({ title, mainValue }: StatisticItemProps) => (
  <StatisticItemWrapper>
    <StatistiсTitle>{title}</StatistiсTitle>
    <StyledLinkWrapper>
      <StyledLink target="_blank" href={mainValue}>
        {cutLink(mainValue)}
      </StyledLink>
    </StyledLinkWrapper>
  </StatisticItemWrapper>
);
