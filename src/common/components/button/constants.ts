import { css } from '@emotion/react';

export const btnGradientText = css`
  background-image: linear-gradient(236.2deg, #a8f8a0 0%, #83d9f5 100%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

export const btnGradientBorder = css`
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
    background: linear-gradient(236.2deg, #a8f8a0 0%, #83d9f5 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`;
