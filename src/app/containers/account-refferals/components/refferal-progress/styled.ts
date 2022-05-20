import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const RefferalProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 248px;
  align-items: center;
  padding: 24px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  background-color: ${COLOR_PALLETTE.MAIN_BLACK};
`;

export const ProgressHint = styled.span`
  font-size: 16px;
  line-height: 22px;
  width: inherit;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  text-align: center;
  font-weight: normal;
`;
