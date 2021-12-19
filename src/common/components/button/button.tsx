import styled from '@emotion/styled';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

import { getButtonVariant, StyledChildren } from './styled';

export type ButtonProps = MuiButtonProps & {
  monoColor?: boolean;
};

const StyledButton = styled(MuiButton)<ButtonProps>`
  display: grid;
  border: none;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  border-radius: 4px;
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  transition: all 0.2s linear;
  text-transform: none;
  line-height: normal;
  ${({ variant, monoColor }) => getButtonVariant(variant, monoColor)}
  &:disabled {
    background: #bdbdbd;
    &:before {
      background-image: none;
    }
  }
`;

export const Button = ({ children, ...restProps }: ButtonProps) => (
  <StyledButton {...restProps} disableRipple>
    <StyledChildren>{children}</StyledChildren>
  </StyledButton>
);
