import { css } from '@emotion/react';

import { COLOR_PALLETTE } from './pallette';
import { GradientBorderProps } from './styles-types';

const { MAIN_BLUE, MAIN_GREEN, LINK_COLOR, HOVER_LINK_COLOR } = COLOR_PALLETTE;

export const pallette = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');
  * {
    font-family: 'Roboto', sans-serif;
  }

  @property --mainGreen {
    syntax: '<color>';
    initial-value: ${MAIN_GREEN};
    inherits: false;
  }
  @property --mainBlue {
    syntax: '<color>';
    initial-value: ${MAIN_BLUE};
    inherits: false;
  }
`;

export const mainGradient = `-webkit-linear-gradient(236.2deg,${MAIN_GREEN} , ${MAIN_BLUE})`;

export const link = (color: string = LINK_COLOR, hoverColor = HOVER_LINK_COLOR) => css`
  &:link {
    color: ${color};
  }
  &:visited {
    color: ${color};
  }
  &:hover {
    color: ${hoverColor};
  }
  &:active {
    color: ${color};
  }
`;

export const gradientText = css`
  background-image: ${mainGradient};
  /* background-clip: text;
  -webkit-text-fill-color: transparent; */

  background: ${mainGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 0px #00000000;
  display: inline-block;
`;
/**
 * border using like padding. F.Ex = '1 1' or '2' or '0 0 2 0'
 */
/**
 *
 * Border: [default: 2px]
 *
 * - border using like padding. F.Ex = '1px 1px' or '2px' or '0 0 2px 0'
 *
 * BorderRadius: [default: 4px]
 *
 * - border-radius using like number. F.Ex = ({ borderRadius: 2 })
 */

export const gradientBorder = ({ borderRadius = 4, border = '2px' }: GradientBorderProps = {}) => css`
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    bottom: -1px;
    border-radius: ${borderRadius}px;
    padding: ${border};
    background-image: ${mainGradient};
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    z-index: 0;
    transition: 0.2s linear;
  }
`;

export const gradientBackground = css`
  background-size: 100%;
  background-image: ${mainGradient};
`;

export const scrollBarStyles = css`
  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 10px;
    width: 5px;
  }
`;

export const hidingScrollBarStyles = css`
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    width: 26px;
    border-radius: 13px;
    background-clip: padding-box;
    border: 10px solid transparent;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 10px;
  }
`;
