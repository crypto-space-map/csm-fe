import React from 'react';

import styled from '@emotion/styled';
import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps } from '@mui/material';

import { getButtonVariant, StyledChildren } from './styles';

export type IconButtonProps = MuiIconButtonProps & {
  variant?: 'outlined' | 'contained' | 'text';
};

const StyledButton = styled(MuiIconButton)<IconButtonProps>`
  ${({ variant }) => getButtonVariant(variant)}
  width: max-content;
  height: max-content;
  border-radius: 4px;
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
`;

export const IconButton: React.FunctionComponent<IconButtonProps> = ({ children, ...restProps }) => (
  <StyledButton {...restProps} disableRipple>
    <StyledChildren>{children}</StyledChildren>
  </StyledButton>
);
