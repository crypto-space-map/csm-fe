import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

const actionsHeaders = css`
  font-size: 16px;
  line-height: 22px;
  color: ${COLOR_PALLETTE.MAIN_GRAY};
`;

const REFERENCE_NUMBER = 9;

export const StyledFilterBlock = styled.div<{ visible: boolean }>`
  display: flex;
  justify-content: center;
`;

export const StyledFilter = styled.form`
  position: absolute;
  display: grid;
  grid-gap: 24px;
  width: max-content;
  background-color: ${COLOR_PALLETTE.MAIN_BLACK};
  padding: 16px;
  border-radius: 8px;
  transform: translateY(${REFERENCE_NUMBER}px);
  z-index: 10;
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    margin-left: -${REFERENCE_NUMBER}px;
    top: -${REFERENCE_NUMBER}px;
    transform: translateY(-50%) rotate(90deg);
    border: ${REFERENCE_NUMBER}px solid ${COLOR_PALLETTE.MAIN_BLACK};
    border-color: transparent ${COLOR_PALLETTE.MAIN_BLACK} transparent transparent;
  }
`;

export const InputsGroup = styled.div`
  display: grid;
  grid-gap: 16px 8px;
  grid-template-columns: repeat(2, 1fr);
`;

export const StyledButtonsGroup = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: 24px;
`;

export const StyledRangesGroup = styled.div`
  display: grid;
  gap: 8px;
  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    max-width: fit-content;
  }
  & > span {
    ${actionsHeaders}
  }
`;

export const CheckBoxGroup = styled.div`
  display: grid;
  grid-gap: 8px;
  & > span {
    ${actionsHeaders}
  }
`;
