import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const DetailWrapper = styled.article`
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 662px;
  position: absolute;
  right: 0;
  overflow: hidden;
  background-color: ${COLOR_PALLETTE.MAIN_WHITE};
`;

export const TransitionWrapper = styled.div<{ open: boolean }>`
  position: absolute;
  right: 0;
  top: 0;
  width: ${props => (props.open ? '662px' : '0px')};
  height: 100%;
  background-color: black;
  z-index: 999;
  transition-duration: 0.6s;
  transition-property: width;
  overflow: hidden;
  box-sizing: border-box;
`;
