import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

const circleAnimation = keyframes`
   0% {
      opacity: 0;
    }

    100% {
      -webkit-transform: matrix(1, 0, 0, 0, 0);
      opacity: 1;
    }
`;
const showAnimation = keyframes`
    0% ,99% {
      opacity: 0;}
    100% {
      opacity: 1;
    }
`;

const lineAnimation = keyframes`
   from {
    stroke-dashoffset: 4000;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  & .tooltip {
    position: fixed;
    padding: 4px 10px;
    border-radius: 18px;
    background-color: ${COLOR_PALLETTE.MAIN_WHITE};
    font-size: 12px;
    line-height: 17px;
    opacity: 0;
    pointer-events: none;
    z-index: 2;
    overflow: hidden;
    &.tooltip--hovered {
      animation: ${showAnimation} 1s forwards;
    }
  }
`;

export const ParentLabelsText = styled.text`
  width: 100%;
  height: 100%;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  fill: ${COLOR_PALLETTE.MAP_LABELS};
  pointer-events: none;
  text-anchor: middle;
  text-shadow: -7px 0px 18px #4a4a4a;
`;

export const ProjectLink = styled.line`
  animation: ${lineAnimation} 1s linear alternate;
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
