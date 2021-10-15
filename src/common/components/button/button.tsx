import React from 'react';

import styled from '@emotion/styled';
import { Button as MuiButton, ButtonProps } from '@mui/material';

import { getButtonVariant, StyledChildren } from './styles';

const StyledButton = styled(MuiButton)<ButtonProps>`
  display: grid;
  border: none;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  border-radius: 4px;
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
    <StyledChildren>{children}</StyledChildren>
  </StyledButton>
);
