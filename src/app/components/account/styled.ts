import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const AccountDataContainer = styled.div<{ invert?: boolean }>`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: 14px 14px 16px;
  border-radius: 8px;
  background-color: ${({ invert = false }) =>
    invert ? COLOR_PALLETTE.MAIN_WHITE : COLOR_PALLETTE.MAIN_BLACK};
  transition: 0.2s linear;
`;

export const StyledContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  gap: 2em;
  width: 100%;
`;

export const ContentSection = styled.section<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: inherit;
  max-width: ${({ fullWidth = false }) => (fullWidth ? '100%' : '740px')};
`;
export const SideDataSection = styled.section`
  max-width: 480px;
  width: 100%;
  justify-self: end;
`;

export const AccountSelectedMenuHeader = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  z-index: 1;
`;
