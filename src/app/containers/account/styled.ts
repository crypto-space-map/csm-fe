import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const AccountContainer = styled.div`
  position: absolute;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr 484px;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  background-color: ${COLOR_PALLETTE.MAIN_BLACK};
`;
