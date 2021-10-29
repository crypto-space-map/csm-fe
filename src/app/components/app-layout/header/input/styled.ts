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
  & .MuiInput-input {
    padding: 0;
  }
`;

export const StyledIconButton = styled(IconButton)`
  background: ${BACKGROUND};
  &:hover {
  }
`;
