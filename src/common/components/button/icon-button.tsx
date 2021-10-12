import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps } from '@mui/material';
import { gradientBackground, gradientBorder } from 'global/styles';

type IconButtonProps = MuiIconButtonProps & {
  variant?: 'outlined' | 'contained' | 'text';
};

const getIconButtonVariant = (variant: IconButtonProps['variant']) => {
  switch (variant) {
    case 'outlined':
      return css`
        background: none;
        ${gradientBorder({ borderRadius: 4 })}
      `;
    case 'text':
      return css`
        background: none;
        color: #ffffff;
      `;
    case 'contained':
    default:
      return css`
        ${gradientBackground}
      `;
  }
};

const StyledButton = styled(MuiIconButton)<IconButtonProps>`
  ${({ variant }) => getIconButtonVariant(variant)}
  width: max-content;
  height: max-content;
  border-radius: 4px;
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
`;

export const IconButton: React.FunctionComponent<IconButtonProps> = ({ children, ...restProps }) => (
  <StyledButton {...restProps}>{children}</StyledButton>
);

IconButton.defaultProps = {
  variant: 'contained',
};
