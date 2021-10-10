import React from 'react';

import styled from '@emotion/styled';
import { IconButton as MuiIconButton, IconButtonProps } from '@mui/material';

import { btnGradientBorder } from './constants';

const StyledButton = styled(MuiIconButton)<IconButtonProps>`
  ${btnGradientBorder}
  width: max-content;
  height: max-content;
  border-radius: 4px;
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
`;

export const IconButton: React.FunctionComponent<IconButtonProps> = ({ children, ...restProps }) => (
  <StyledButton {...restProps}>{children}</StyledButton>
);
