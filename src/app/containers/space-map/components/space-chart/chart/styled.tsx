import styled from '@emotion/styled';
import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import { COLOR_PALLETTE } from 'global/pallette';

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

export const StyledWeightFilterWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  z-index: 1;
`;

export const StyledWeightFilter = styled.div`
  display: flex;
  gap: 1em;
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

export const StyledWeightWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  color: ${COLOR_PALLETTE.MAIN_WHITE};
  & > span {
    display: flex;
    align-items: center;
  }
`;

export const LightTooltip = muiStyled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    padding: 12,
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '18px',
    maxWidth: 190,
  },
  [`& .${tooltipClasses.arrow}`]: { color: theme.palette.common.white },
}));
