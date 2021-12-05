import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const DetailWrapper = styled.article`
  height: 100%;
  background-color: ${COLOR_PALLETTE.MAIN_WHITE};
`;

export const TopSection = styled.article`
  background-color: #1d1c1c;
  padding: 24px 24px 10px 24px;
`;

export const TransitionWrapper = styled.div<{ open: boolean }>`
  position: absolute;
  right: 0;
  top: 0;
  width: ${props => (props.open ? '700px' : '0px')};
  height: 100%;
  background-color: black;
  z-index: 999;
  border-radius: 0px 10px 10px 0px;
  transition-duration: 1s;
  transition-property: width;
  overflow: hidden;
  box-sizing: border-box;
`;
