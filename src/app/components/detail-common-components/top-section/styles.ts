import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const StyledTopSection = styled.article<{ isHide: boolean }>`
  background-color: ${COLOR_PALLETTE.MAIN_BLACK};
  flex: 1 0 auto;
  padding: 0 24px 10px 24px;
  min-height: 200px;
  padding-top: ${props => (props.isHide ? '16px' : '42px')};
  transition: padding-top 0.5s;
`;
