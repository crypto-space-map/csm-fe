import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

const extra = 10;

export const fullWindowBackground = css`
  position: fixed;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  inset: 0px;
  -webkit-tap-highlight-color: transparent;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
`;

export const coloredBackground = css`
  ${fullWindowBackground}
  opacity: 0.97;
  background-color: ${COLOR_PALLETTE.MAIN_BLACK};
`;

export const StyledColoredBackgroundWrapper = styled.div`
  ${coloredBackground}
`;

export const StyledColoredBackgroundWrapperLeft = styled.div<{ width: number; top: number; bottom: number }>`
  ${coloredBackground}
  width: ${props => (props.width <= 0 ? 0 : `${props.width - extra}px`)};
  top: ${props => `${props.top - extra}px`};
  height: ${props => `${props.bottom - props.top + 2 * extra}px`};
`;

export const StyledColoredBackgroundWrapperRight = styled.div<{
  width: number;
  top: number;
  bottom: number;
}>`
  ${coloredBackground}
  left: ${props => `${props.width + extra}px`};
  top: ${props => `${props.top - extra}px`};
  height: ${props => `${props.bottom - props.top + 2 * extra}px`};
`;

export const StyledColoredBackgroundWrapperTop = styled.div<{ value: number }>`
  ${coloredBackground}
  height: ${props => `${props.value <= 0 ? 0 : props.value - extra}px`};
`;

export const StyledColoredBackgroundWrapperBottom = styled.div<{ value: number }>`
  ${coloredBackground}
  top: ${props => `${props.value + extra}px`};
`;
