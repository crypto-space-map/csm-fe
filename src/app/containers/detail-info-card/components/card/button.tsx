import { useCallback } from 'react';

import styled from '@emotion/styled';
import { Button as MuiButton, ButtonProps } from '@mui/material';

import { ButtonsProps } from './types';

const StyledButton = styled(MuiButton)<ButtonProps>`
  font-size: 16px;
  line-height: 22px;
  font-weight: normal;
  color: #242424;
  text-transform: none;
  background: #ffffff;
  border: 2px solid #e1e1e1;
  border-radius: 24px;
  &:disabled {
    background: #bdbdbd;
    &:before {
      background-image: none;
    }
  }
`;

export const Button = ({ link, text }: ButtonsProps) => {
  const handleClick = useCallback(() => {
    window.open(link, '_blank');
  }, [link]);

  return (
    <StyledButton onClick={handleClick} disableRipple>
      {text}
    </StyledButton>
  );
};
