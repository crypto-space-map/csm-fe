import styled from '@emotion/styled';

const absoluteDescriptionLeftExtra = 360;

export const BlockDescriptionWrapper = styled.div<{ left: number }>`
  position: absolute;
  top: 110px;
  ${props => props.left === 0 && 'display: none;'};
  left: ${props => `${props.left - absoluteDescriptionLeftExtra}px`};
`;
