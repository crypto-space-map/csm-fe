import styled from '@emotion/styled';
import { IconButton, Input } from '@mui/material';

const BACKGROUND = '#444444';

export const HeaderInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-auto-flow: column;
  grid-gap: 14px;
`;

export const StyledInput = styled(Input)`
  background: ${BACKGROUND};
  align-items: center;
  border-radius: 40px;
  color: rgba(190, 190, 190, 0.9);
  gap: 1em;
  padding: 0 10px;
  transition: all 0.2s linear;
  & .MuiInput-input {
    padding: 0;
  }
  &:focus-within {
    background: #e5e5e5;
    color: #1d1c1c;
  }
`;

export const StyledIconButton = styled(IconButton)`
  transition: 0.2s linear;
  & > svg {
    fill: #b2b2b2;
  }
  &:hover {
    background: ${BACKGROUND};
  }
  &:active {
    background: #ffffff;
    & > svg {
      fill: #383838;
    }
  }
`;
