import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const StyledEndContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const StyledContent = styled.div`
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  margin-bottom: 40px;

  & > span {
    text-align: center;
  }
`;
export const StyledTitle = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 16px;
`;
export const StyledSocial = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  margin-top: 16px;
  margin-bottom: 26px;
`;
export const StyledInfo = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;
