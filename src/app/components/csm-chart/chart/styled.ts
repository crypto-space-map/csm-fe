import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

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

export const ChartWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  & .tooltip {
    background-color: red;
  }
`;

export const RandomSvg = styled.svg`
  width: 100%;
  height: 100%;
  & .fund {
    cursor: pointer;
    transition: 0.2s linear;
    animation: ${circleAnimation} 0.5s linear;
    &:hover {
      overflow: auto;
      stroke-dasharray: 1 1;
    }
  }
  & .category-labels {
    & .label-text {
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      fill: #ffffff;
      pointer-events: none;
      text-anchor: middle;
    }
  }
`;
