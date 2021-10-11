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
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

export const gradientBorder = css`
  border: none;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 4px;
    padding: 2px;
    background-image: linear-gradient(236.2deg, var(--mainGreen) 0%, var(--mainBlue) 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`;
