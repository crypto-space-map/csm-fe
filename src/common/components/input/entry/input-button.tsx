import React, { ElementType, FC } from 'react';

import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

type ClearButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { adornmentPosition: 'start' | 'end'; btnIcon?: React.ReactNode };

const StyledBtn: ElementType = styled(IconButton)<ClearButtonProps>`
  grid-area: 2/3/3/4;
  padding: 0 1em;
`;

export const InputButton: FC<ClearButtonProps> = ({ btnIcon, adornmentPosition, ...rest }) => {
  if (!btnIcon) return null;
  const gridArea = {
    gridArea: adornmentPosition === 'end' ? '' : '2 / 4 / 3 / 5',
  };
  return (
    <StyledBtn {...rest} style={gridArea}>
      {btnIcon}
    </StyledBtn>
  );
};

InputButton.defaultProps = {
  btnIcon: null,
};
