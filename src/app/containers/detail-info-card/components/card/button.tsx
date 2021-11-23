import { memo } from 'react';

import { StyledButton, StyledButtonWrapper } from './styles';
import { ButtonsProps } from './types';

export const Button = memo(({ link, text }: ButtonsProps) => (
  <StyledButtonWrapper href={link} target="_blank">
    <StyledButton disableRipple>{text}</StyledButton>
  </StyledButtonWrapper>
));
