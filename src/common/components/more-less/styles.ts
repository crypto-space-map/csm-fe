import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';
import { link } from 'global/styles';

export const StyledMoreLess = styled.div<{ isShow: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-bottom: 2px;
  max-height: ${props => (props.isShow ? '100vh' : 'min-content')};
  transition: max-height 0.3s ease;
`;

export const StyledMoreLessAnchorWrapper = styled.div`
  font-size: 12px;
  line-height: 14px;
`;

export const StyledMoreLessAnchor = styled.a`
  cursor: pointer;
  border-bottom: 1px dashed;
  ${link(COLOR_PALLETTE.MAIN_BLACK, COLOR_PALLETTE.MAIN_BLACK)};
`;

export const StyledListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
