import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';
import { gradientText } from 'global/styles';

export const StyledFormContainer = styled.div`
  display: grid;
  padding: 32px;
  grid-gap: 1em;
  background-color: ${COLOR_PALLETTE.MAIN_BLACK};
  width: max-content;
`;

export const StyledFormHeader = styled.span`
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
`;

export const PasswordHelperRow = styled.span<{ error?: boolean }>`
  color: ${({ error }) => (error ? COLOR_PALLETTE.ERROR_COLOR : COLOR_PALLETTE.LIGHT_GRAY)};
  font-size: 14px;
  line-height: 16px;
  min-height: 16px;
  ${({ error }) => !error && gradientText}
`;

export const RowsContainer = styled.div`
  display: grid;
`;

export const StyledForm = styled.form`
  display: grid;
  grid-gap: 16px;
`;
