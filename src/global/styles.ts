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

export const gradientBorder = ({ borderRadius }: { borderRadius: number }) => css`
  &:before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    bottom: -1px;
    border-radius: ${borderRadius}px;
    padding: 2px;
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
