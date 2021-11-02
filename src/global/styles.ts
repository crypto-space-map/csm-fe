import { css } from '@emotion/react';

import { COLOR_PALLETTE } from './pallette';
import { GradientBorderProps } from './styles-types';

const { MAIN_BLUE, MAIN_GREEN } = COLOR_PALLETTE;

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

export const mainGradient = 'linear-gradient(236.2deg, var(--mainGreen) 0%, var(--mainBlue) 100%)';

export const gradientText = css`
  background-image: ${mainGradient};
  background-clip: text;
  -webkit-text-fill-color: transparent;
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
  &:before {
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
  }
`;

export const gradientBackground = css`
  background-size: 100%;
  background-image: ${mainGradient};
`;
