import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

export const PlusButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${COLOR_PALLETTE.MAIN_BLACK};
  cursor: pointer;
`;

export const StyledButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-gap: 24px;
  height: 32px;
  margin-top: 16px;
`;

export const TooltipWrapper = styled.div`
  & .MuiTooltip-tooltip {
    background-color: ${COLOR_PALLETTE.MAIN_WHITE};
  }
`;

export const FormWrapper = styled.div`
  padding: 15px;
`;

export const CheckBoxGroup = styled.div`
  display: grid;
  margin-bottom: 9px;
  width: fit-content;
`;

export const FormContent = styled.div`
  min-width: 190px;
`;
