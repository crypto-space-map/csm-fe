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
  grid-area: 2/2/3/3;
  font-style: normal;
  font-weight: bold;
  padding: 0 40px;
  font-size: 32px;
  line-height: 44px;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  z-index: 1;
`;

export const SelectedTabWrapper = styled.div`
  grid-area: 3/2/4/3;
  padding: 32px 40px;
  z-index: 1;
`;
