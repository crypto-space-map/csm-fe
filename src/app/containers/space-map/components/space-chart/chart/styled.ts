import styled from '@emotion/styled';

export const ChartWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;

  &:active {
    cursor: grabbing;
  }
  & circle:not(:active) {
    transition: 0.2s linear;
    cursor: pointer;
  }
  & > circle {
    transition: 0.2s linear;
  }
`;

export const StyledWeightFilter = styled.div`
  position: absolute;
  display: flex;
  gap: 1em;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  z-index: 1;
`;

export const FilterWeightItem = styled.div<{ isSelected?: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: ${({ isSelected = false }) => isSelected && 'rgb(234, 224, 215)'};
  color: ${({ isSelected = false }) => !isSelected && 'rgb(234, 224, 215)'};
  border-radius: 4px;
  padding: 2px 4px;
  width: fit-content;
  white-space: nowrap;
  cursor: pointer;
  & > * svg {
    position: absolute;
    width: 16px;
    height: 16px;
  }
`;

export const FilterWeightItemCircle = styled.div<{ background: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ background }) => background};
`;
