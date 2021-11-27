import styled from '@emotion/styled';
import { Input, ListItem } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';

const BACKGROUND = '#444444';
const BORDER_RADIUS = '0px 0px 8px 8px';

export const SuggestInputContainer = styled.div`
  position: relative;
  display: grid;
`;

export const StyledInput = styled(Input)`
  background: ${BACKGROUND};
  align-items: center;
  border-radius: 40px;
  color: rgba(190, 190, 190, 0.9);
  gap: 1em;
  padding: 0 10px;
  transition: all 0.2s linear;
  z-index: 1;

  & .MuiInput-input {
    padding: 0;
  }
  &:focus-within {
    background: ${COLOR_PALLETTE.MAIN_WHITE};
    color: #1d1c1c;
    box-shadow: 0px 4px 5px 0px #0000005e;
  }
`;

export const StyledListItem = styled(ListItem)`
  padding: 12px 30px;
  background-color: ${COLOR_PALLETTE.MAIN_WHITE};
  border: none;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    background: #e5e5e5;
  }
`;

export const SuggestionList = styled.div`
  position: absolute;
  display: grid;
  width: 100%;
  top: 50%;
  padding-top: 1.2em;
  background-color: ${COLOR_PALLETTE.MAIN_WHITE};
  height: 30px;
  border-radius: ${BORDER_RADIUS};
  height: auto;
  transition: all 0.5s ease-out;
  overflow: hidden;

  & :nth-last-of-type(1) {
    border-radius: ${BORDER_RADIUS};
  }
`;
