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
        background-size: 100%;
        background-image: linear-gradient(236.2deg, var(--mainGreen) 0%, var(--mainBlue) 100%);
        color: #333;
        transition: --mainGreen 0.2s, --mainBlue 0.2s;
        &:active {
          --mainGreen: #41aacc;
          --mainBlue: #41aacc;
        }

        &:hover {
          --mainGreen: #83d9f5;
        }
      `;
  }
};

const StyledButton = styled(MuiButton)<ButtonProps>`
  border-radius: 4px;
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  transition: all 0.2s ease-out;
  ${({ variant }) => getButtonVariant(variant)}
  &:disabled {
    background: #bdbdbd;
    &:before {
      background-image: none;
    }
  }
`;

export const Button: React.FunctionComponent<ButtonProps> = ({ children, ...restProps }) => (
  <StyledButton {...restProps} disableRipple>
    {children}
  </StyledButton>
);
