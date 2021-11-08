import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const CIRCLE_RADIUS = {
  MIN: '3px',
  MAX: '8px',
};

enum circlePosition {
  BOTTOM_LEFT = 1,
  TOP = 2,
  BOTTOM_RIGHT = 3,
}

const animation = '0.9s linear infinite';

const zooming = (position: circlePosition) => {
  switch (position) {
    case (position = circlePosition.BOTTOM_LEFT):
      return keyframes`
        0%{
            r: ${CIRCLE_RADIUS.MIN}; 
        }
        25%{
            r: ${CIRCLE_RADIUS.MAX}; 
        }
        55%{
            r: ${CIRCLE_RADIUS.MIN}; 
        }
        100% {
            r: ${CIRCLE_RADIUS.MIN}; 
        }
      `;
    case (position = circlePosition.TOP):
      return keyframes`
        0%{
            r: ${CIRCLE_RADIUS.MIN}; 
        }
        25%{
            r: ${CIRCLE_RADIUS.MIN}; 
        }
        50%{
            r: ${CIRCLE_RADIUS.MAX}; 
        }
        80% {
            r: ${CIRCLE_RADIUS.MIN}; 
        }
        100% {
            r: ${CIRCLE_RADIUS.MIN}; 
        }
    `;
    case (position = circlePosition.BOTTOM_RIGHT):
      return keyframes`
        0%{
            r: ${CIRCLE_RADIUS.MIN}; 
        }
        50%{
            r: ${CIRCLE_RADIUS.MIN}; 
        }
        75%{
            r: ${CIRCLE_RADIUS.MAX}; 
        }
        100% {
            r: ${CIRCLE_RADIUS.MIN}; 
        }
    `;
    default:
      return keyframes``;
  }
};

export const StyledLoader = styled.svg`
  overflow: visible;
  /* special arrangement of circles in svg */
  & :nth-of-type(2) {
    animation: ${zooming(circlePosition.BOTTOM_LEFT)} ${animation};
  }
  & :nth-of-type(1) {
    animation: ${zooming(circlePosition.TOP)} ${animation};
  }
  & :nth-of-type(3) {
    animation: ${zooming(circlePosition.BOTTOM_RIGHT)} ${animation};
  }
`;
