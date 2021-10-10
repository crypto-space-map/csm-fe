import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button as MuiButton, ButtonProps } from '@mui/material';

import { btnGradientText, btnGradientBorder } from './constants';

const getButtonVariant = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'outlined':
      return css`
        background: inherit;
        ${btnGradientText}
        ${btnGradientBorder}
        &:hover {
          ${btnGradientBorder}
        }
      `;
    case 'text':
      return css`
        background-color: none;
        border: none;
        ${btnGradientText}
      `;
    case 'contained':
    default:
      return css`
        background: linear-gradient(236.2deg, #a8f8a0 0%, #83d9f5 100%);
        color: #1d1c1c;
      `;
  }
};

const StyledButton = styled(MuiButton)<ButtonProps>`
  border-radius: 4px;
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  ${({ variant }) => getButtonVariant(variant)}
`;

export const Button: React.FunctionComponent<ButtonProps> = ({ children, ...restProps }) => (
  <StyledButton {...restProps}>{children}</StyledButton>
);
