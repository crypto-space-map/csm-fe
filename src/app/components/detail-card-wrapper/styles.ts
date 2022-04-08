import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

const getHeight = ({ isHide }: { isHide: boolean }) => {
  if (isHide) return 'max-height: 200px;';
  return 'max-height: 100%;';
};

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

export const TransitionWrapper = styled.div<{ isOpen: boolean; isHide: boolean }>`
  position: absolute;
  right: 0;
  top: 0;
  ${props => getHeight(props)}
  width: ${props => (props.isOpen ? '662px' : '0px')};
  height: 100%;
  background-color: black;
  z-index: 999;
  transition: width 0.6s, max-height 0.5s;
  overflow: hidden;
  box-sizing: border-box;
`;
