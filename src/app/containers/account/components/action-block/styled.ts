import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const StyledActionBlock = styled.div`
  position: relative;
  width: auto;
  height: 100%;
  background-color: ${COLOR_PALLETTE.MAIN_LAYOUT};
  grid-area: 1/2/5/3;
  padding: 0 40px;
`;

export const AccountTabHeader = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  z-index: 1;
`;

export const SelectedTabWrapper = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  grid-area: 2/2/5/3;
  padding: 0 40px;
  z-index: 1;
`;
