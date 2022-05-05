import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

import { Button } from 'common/components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: flex-start;
`;

export const StyledTextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
`;

export const StyledHeader = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 16px;
`;

export const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 18px;

  & > span {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 40px;
  min-width: 100px;
`;
