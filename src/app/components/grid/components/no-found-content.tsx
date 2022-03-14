import NoFoundIcon from 'assets/no-found.svg';

import { StyledNoFoundContent, IconWrapper, MainAdditionalText, SecondAdditionalText } from '../styles';

export const NoFoundContent = () => (
  <StyledNoFoundContent>
    <IconWrapper>
      <NoFoundIcon />
    </IconWrapper>
    <MainAdditionalText>No data to display</MainAdditionalText>
    <SecondAdditionalText>We will post information as soon as it becomes available</SecondAdditionalText>
  </StyledNoFoundContent>
);
