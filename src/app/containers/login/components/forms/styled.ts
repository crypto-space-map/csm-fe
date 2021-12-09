import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';
import { gradientText } from 'global/styles';

export const FormsBlock = styled.div`
  display: grid;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  & > span {
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    grid-gap: 1em;
    padding: 30px;
    font-size: 16px;
  }
`;

export const StyledFormContainer = styled.div`
  display: grid;
  grid-gap: 1em;
  padding: 32px;
  border-radius: 16px;
  background-color: ${COLOR_PALLETTE.MAIN_BLACK};
  width: max-content;
`;

export const StyledFormHeader = styled.span`
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
`;

export const PasswordHelperRow = styled.span<{ error?: boolean; touched?: boolean }>`
  color: ${({ error }) => (error ? COLOR_PALLETTE.ERROR_COLOR : COLOR_PALLETTE.MAIN_WHITE)};
  font-size: 14px;
  line-height: 16px;
  min-height: 16px;
  ${({ error, touched = false }) => !error && touched && gradientText}
`;

export const RowsContainer = styled.div`
  display: grid;
`;

export const StyledForm = styled.form`
  display: grid;
  grid-gap: 16px;
  width: 280px;
`;

export const InputActionHelper = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;

export const SignFormInputContainer = styled.div`
  position: relative;
  display: grid;
`;

export const ChangePasswordNotify = styled.span`
  font-size: 16px;
  line-height: 22px;
  font-weight: 300;
`;
