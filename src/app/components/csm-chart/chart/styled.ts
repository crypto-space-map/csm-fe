import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { COLOR_PALLETTE } from 'global/pallette';

const circleAnimation = keyframes`
   0% {
      -webkit-transform: matrix(4, 0, 0, 4, -120, -120);
      stroke-width: 1;
      opacity: 0;
    }

    100% {
      -webkit-transform: matrix(1, 0, 0, 0, 0);
      stroke-width: 0.25;
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

export const ChartWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  & .tooltip {
    position: absolute;
    padding: 4px 10px;
    border-radius: 18px;
    background-color: ${COLOR_PALLETTE.MAIN_WHITE};
    font-size: 12px;
    line-height: 17px;
    opacity: 0;
    pointer-events: none;
    &.tooltip--hovered {
      animation: ${showAnimation} 0.5s forwards;
    }
  }
`;

export const RandomSvg = styled.svg`
  width: 100%;
  height: 100%;
  & .fund {
    cursor: pointer;
    transition: 0.2s linear;
    animation: ${circleAnimation} 0.3s linear;
  }
  & .category {
    & .label-text {
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      fill: ${COLOR_PALLETTE.MAP_LABELS};
      pointer-events: none;
      text-anchor: middle;
      &.child {
        font-size: 12px;
        line-height: 16px;
        fill: ${COLOR_PALLETTE.MAP_LABELS};
      }
    }
  }
  & .category-labels {
    & .label-text {
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      fill: ${COLOR_PALLETTE.MAP_LABELS};
      pointer-events: none;
      text-anchor: middle;
    }
  }
`;
