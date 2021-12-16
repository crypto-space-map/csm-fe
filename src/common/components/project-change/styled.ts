import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const StyledProjectChange = styled.div<{ alignItems?: 'start' | 'end' }>`
  display: grid;
  align-items: ${({ alignItems = 'start' }) => alignItems};
`;

export const ProjectChangeHeader = styled.span`
  color: ${COLOR_PALLETTE.MAIN_BLACK};
  font-size: 14px;
  line-height: 16px;
`;

export const TradingInfo = styled.div<{ isTardeUp: boolean }>`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 6px;
  align-items: center;
  color: ${({ isTardeUp = false }) => (isTardeUp ? COLOR_PALLETTE.DARK_GREEN : COLOR_PALLETTE.ERROR_COLOR)};
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  & > div {
    display: grid;
  }
`;
