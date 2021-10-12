import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button as MuiButton, ButtonProps } from '@mui/material';
import { gradientBackground, gradientBorder, gradientText } from 'global/styles';

const getButtonVariant = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'outlined':
      return css`
        background: inherit;
        ${gradientText}
        ${gradientBorder({ borderRadius: 4 })}
        &:hover {
          ${gradientBorder({ borderRadius: 4 })}
        }
      `;
    case 'text':
      return css`
        background-color: none;
        border: none;
        ${gradientText}
      `;
    case 'contained':
    default:
      return css`
        ${gradientBackground}
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
  padding: 8px 14px;
  border-radius: 4px;
  border: none;
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  transition: all 0.2s linear;
  text-transform: none;
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
