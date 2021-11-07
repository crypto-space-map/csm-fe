import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const CIRCLE_RADIUS = {
  MIN: '3px',
  MAX: '8px',
};

const animation = '0.9s linear infinite';

const zooming = (position: number) => {
  switch (position) {
    case 1:
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
    case 2:
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
    case 3:
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
    animation: ${zooming(1)} ${animation};
  }
  & :nth-of-type(1) {
    animation: ${zooming(2)} ${animation};
  }
  & :nth-of-type(3) {
    animation: ${zooming(3)} ${animation};
  }
`;
