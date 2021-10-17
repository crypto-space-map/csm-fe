import { css } from '@emotion/react';

export const pallette = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');
  * {
    font-family: 'Roboto', sans-serif;
  }
  @property --mainGreen {
    syntax: '<color>';
    initial-value: #a8f8a0;
    inherits: false;
  }
  @property --mainBlue {
    syntax: '<color>';
    initial-value: #83d9f5;
    inherits: false;
  }
`;

export const gradientText = css`
  background-image: linear-gradient(236.2deg, var(--mainGreen) 0%, var(--mainBlue) 100%);
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
 * - border using like padding. F.Ex = '1 1' or '2' or '0 0 2 0'
 *
 * BorderRadius: [default: 4px]
 *
 * - border-radius using like number. F.Ex = ({ borderRadius: 2 })
 */
export const gradientBorder = ({ borderRadius, border }: { borderRadius?: number; border?: string }) => css`
  &:before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    bottom: -1px;
    border-radius: ${typeof borderRadius !== 'undefined' ? borderRadius : 4}px;
    padding: ${typeof border !== 'undefined' ? border : '2px'};
    background-image: linear-gradient(236.2deg, var(--mainGreen) 0%, var(--mainBlue) 100%);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`;

export const gradientBackground = css`
  background-size: 100%;
  background-image: linear-gradient(236.2deg, var(--mainGreen) 0%, var(--mainBlue) 100%);
`;
