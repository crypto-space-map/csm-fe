import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const AccountContainer = styled.div`
  position: absolute;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  grid-template-rows: 64px 44px max-content auto;
  z-index: 10;
  height: 100%;
  width: 100vw;
  background-color: ${COLOR_PALLETTE.MAIN_BLACK};
`;
