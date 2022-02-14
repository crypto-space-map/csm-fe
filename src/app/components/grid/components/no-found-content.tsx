import NoFoundIcon from 'assets/no-found.svg';

import { StyledNoFoundContent, IconWrapper, MainAdditionalText, SecondAdditionalText } from '../styles';

export const NoFoundContent = () => (
  <StyledNoFoundContent>
    <IconWrapper>
      <NoFoundIcon />
    </IconWrapper>
    <MainAdditionalText>No Data to Show</MainAdditionalText>
    <SecondAdditionalText>It will be uploaded as soon as they appear in database</SecondAdditionalText>
  </StyledNoFoundContent>
);
