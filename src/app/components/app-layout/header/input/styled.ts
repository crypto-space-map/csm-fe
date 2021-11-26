import styled from '@emotion/styled';
import { IconButton, Input } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';

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
    fill: ${COLOR_PALLETTE.MAIN_GRAY};
  }
  &:hover {
    background: ${BACKGROUND};
  }
  &:active {
    background: ${COLOR_PALLETTE.MAIN_WHITE};
    & > svg {
      fill: #383838;
    }
  }
`;
