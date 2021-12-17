import styled from '@emotion/styled';
import { Autocomplete, TextField } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';

export const SuggestInputContainer = styled.div`
  position: relative;
  display: grid;
`;

export const StyledAutocomplete = styled(Autocomplete)`
  &.MuiAutocomplete-popper {
    overflow: hidden;
  }
  & .MuiAutocomplete-endAdornment {
    right: 12px;
    top: calc(50% - 13px);
  }
`;

export const StyledTextField = styled(TextField)`
  box-sizing: border-box;
  display: flex;
  background: ${COLOR_PALLETTE.HEADER.INPUT.BACKGROUND};
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  color: rgba(190, 190, 190, 0.9);
  gap: 1em;
  /* padding: 0 10px; */
  transition: all 0.2s linear;
  z-index: 2;
  height: 100%;
  width: auto;
  & .MuiInput-root {
    display: flex;
    color: ${COLOR_PALLETTE.MAIN_GRAY};
    padding: 0 10px;
    gap: 1em;
    & ::-webkit-input-placeholder {
      color: ${COLOR_PALLETTE.MAIN_GRAY};
    }
    &:focus-within {
      color: ${COLOR_PALLETTE.MAIN_BLACK};
    }
  }
  &:focus-within {
    background: ${COLOR_PALLETTE.MAIN_WHITE};
    color: black;
    box-shadow: 0px 4px 5px 0px #0000005e;
  }
`;

export const StyledListItem = styled.li`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: start;
  grid-gap: 12px;
  padding: 12px 20px;
  background-color: ${COLOR_PALLETTE.MAIN_WHITE};
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s linear;
  & > img {
    width: 24px;
    height: 24px;
  }
  &:hover {
    background: ${COLOR_PALLETTE.HEADER.INPUT.BACKGROUND_FOCUSED};
  }
`;

export const ListItemSymbol = styled.span`
  color: ${COLOR_PALLETTE.MAIN_GRAY};
  text-transform: uppercase;
`;

export const HighLight = styled.span`
  font-weight: 600;
`;

export const SuggestionList = styled.div`
  position: absolute;
  display: grid;
  top: 32px;
  background-color: ${COLOR_PALLETTE.MAIN_WHITE};
  border-radius: 0px 0px 8px 8px;
  height: auto;
  transition: all 0.5s ease-out;
  overflow: hidden;
  border: none;
  z-index: 1 !important;
  & :nth-last-of-type(1) {
    max-height: 100%;
  }
  & .MuiAutocomplete-listbox {
    overflow: hidden;
    height: 100%;
    padding-top: 1.5em;
  }
  & .MuiAutocomplete-paper {
    box-shadow: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;
