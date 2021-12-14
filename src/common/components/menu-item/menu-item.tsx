import { ReactNode } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ListItemButton as MuiMenuItem, ListItemButtonProps as MuiProps } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';
import { gradientBorder, gradientText } from 'global/styles';

export type MenuItemProps = MuiProps & { children: ReactNode };

const actionStyle = css`
  ${gradientText}
  ${gradientBorder({ borderRadius: 0 })}
    &::after {
    padding: 0 0 0 4px;
  }
  & svg {
    fill: url(#csm_icon_gradient);
  }
`;

const StyledMenuItem = styled(MuiMenuItem)<MenuItemProps>`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1em;
  padding: 0;
  transition: 0.2s linear;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  ${({ selected = false }) => selected && actionStyle}
  & > div {
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    grid-gap: 1em;
    padding: 8px 16px;
    transition: 0.2s linear;
    ${({ selected = false }) => selected && actionStyle}
  }
  &:hover {
    background-color: #242424 !important;
    & > div {
      ${actionStyle}
    }
  }
`;

export const MenuItem = (props: MenuItemProps) => (
  <StyledMenuItem {...props} disableRipple>
    <div>{props.children}</div>
  </StyledMenuItem>
);
