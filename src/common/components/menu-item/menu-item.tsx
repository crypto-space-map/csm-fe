import React from 'react';

import styled from '@emotion/styled';
import { MenuItem as MuiMenuItem, MenuItemProps } from '@mui/material';
import { gradientBorder, gradientText } from 'global/styles';

type ItemProps = MenuItemProps & { children: React.ReactNode };

const StyledMenuItem = styled(MuiMenuItem)`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1em;
  transition: 0.2s linear;
  color: #ffffff;
  &:hover {
    ${gradientText}
    ${gradientBorder({ borderRadius: 0 })}
    &:before {
      padding: 0 0 0 4px;
    }
    & svg {
      fill: url(#csm_icon_gradient);
    }
  }
`;

export const MenuItem = (props: ItemProps) => (
  <StyledMenuItem {...props} disableRipple>
    {props.children}
  </StyledMenuItem>
);
