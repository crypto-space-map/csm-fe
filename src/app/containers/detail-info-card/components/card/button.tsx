import { memo } from 'react';

import { ButtonsProps } from '../../types';
import { StyledButton, StyledButtonWrapper } from './styles';

export const Button = memo(({ link, text }: ButtonsProps) => (
  <StyledButtonWrapper href={link} target="_blank">
    <StyledButton disableRipple>{text}</StyledButton>
  </StyledButtonWrapper>
));
