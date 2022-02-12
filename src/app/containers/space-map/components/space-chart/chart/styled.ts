import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

import { ChartTooltipProps } from './types';

const lineAnimation = keyframes`
   from {
    stroke-dashoffset: 4000;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

export const ProjectTooltip = styled.div`
  position: fixed;
  padding: 4px 10px;
  border-radius: 18px;
  background-color: ${COLOR_PALLETTE.MAIN_WHITE};
  font-size: 12px;
  line-height: 17px;
  pointer-events: none;
  visibility: hidden;
  z-index: 2;
  overflow: hidden;
  animation: tooltipShowAnimation 1s linear;

  @keyframes tooltipShowAnimation {
    0%,
    99% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ParentLabelsText = styled.text`
  width: 100%;
  height: 100%;
  font-weight: bold;
  font-size: 10px;
  line-height: 22px;
  fill: ${COLOR_PALLETTE.MAP_LABELS};
  pointer-events: none;
  text-anchor: middle;
  text-shadow: -7px 0px 18px #4a4a4a;
`;

export const ChildLabelsText = styled(ParentLabelsText)<{ fontSize?: number }>`
  font-size: ${({ fontSize = 5 }) => `${fontSize}px`};
  word-wrap: break-word;
`;

export const ProjectLink = styled.line`
  animation: ${lineAnimation} 1s linear alternate;
  stroke-dasharray: 0;
`;

export const RandomSvg = styled.svg`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  cursor: grab;
  overflow: visible;
  transition: all 0.2s linear;

  &:active {
    cursor: grabbing;
  }
  & circle:not(:active) {
    transition: 0.2s linear;
    cursor: pointer;
  }
`;

export const StyledChartTooltip = styled.div<Omit<ChartTooltipProps, 'text'>>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 9px;
  background-color: ${COLOR_PALLETTE.MAIN_WHITE};
  border-radius: 18px;
  font-size: 12px;
  font-weight: normal;
`;

export const StyledLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  background-color: ${COLOR_PALLETTE.MAIN_WHITE};
  width: fit-content;
  padding: 0.1em;
  border-radius: 1em;
`;

export const CursorGTag = styled.g`
  cursor: pointer;
`;
