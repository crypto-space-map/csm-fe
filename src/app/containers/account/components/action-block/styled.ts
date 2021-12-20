import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';
import { scrollBarStyles } from 'global/styles';

export const StyledActionBlock = styled.div`
  position: relative;
  width: auto;
  height: 100vh;
  background-color: ${COLOR_PALLETTE.MAIN_LAYOUT};
  grid-area: 1/2/5/3;
  padding: 0 0 0 40px;
`;

export const SelectedMenuItemWrapper = styled.div`
  display: grid;
  grid-auto-rows: 100%;
  grid-area: 2/2/5/3;
  padding: 0 0 0 40px;
  z-index: 1;
  max-height: calc(100vh - 64px);
`;

export const ContainerOverflow = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  gap: 5px;
  padding-right: 15px;
  ${scrollBarStyles}
`;
