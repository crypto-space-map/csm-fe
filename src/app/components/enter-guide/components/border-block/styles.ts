import styled from '@emotion/styled';
import { gradientBorder } from 'global/styles';

const extra = 9;

export const StyledBorderBlock = styled.div<{
  top: number;
  bottom: number;
  left: number;
  right: number;
}>`
  ${gradientBorder()}
  width: ${props => `${props.right - props.left + 2 * extra}px`};
  height: ${props => `${props.bottom - props.top + 2 * extra}px`};
  top: ${props => `${props.top - extra}px`};
  left: ${props => `${props.left - extra}px`};
  position: absolute;
  z-index: 15;
`;
