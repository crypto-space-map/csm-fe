import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const StyledProjectChange = styled.div<{ textAlign?: 'start' | 'end' }>`
  display: grid;
  align-items: center;
  height: fit-content;
  text-align: ${({ textAlign = 'start' }) => textAlign};
`;

export const ProjectChangeHeader = styled.span<{ lightVariant?: boolean }>`
  color: ${({ lightVariant = false }) =>
    lightVariant ? COLOR_PALLETTE.MAIN_WHITE : COLOR_PALLETTE.MAIN_BLACK};
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
`;

export const PriceChange = styled.span<{ isTardeUp: boolean }>`
  font-size: 16px;
  line-height: 22px;
  color: ${({ isTardeUp = false }) => (isTardeUp ? COLOR_PALLETTE.DARK_GREEN : COLOR_PALLETTE.ERROR_COLOR)};
`;
