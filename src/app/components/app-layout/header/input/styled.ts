import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';

const BACKGROUND = '#444444';

export const HeaderInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-auto-flow: column;
  grid-gap: 14px;
`;

export const FilterButtonContainer = styled.div`
  position: relative;
  display: grid;
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
