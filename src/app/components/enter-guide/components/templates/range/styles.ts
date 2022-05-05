import styled from '@emotion/styled';

const absoluteDescriptionLeftExtra = 400;

export const BlockDescriptionWrapper = styled.div<{ left: number }>`
  position: absolute;
  top: 140px;
  ${props => props.left === 0 && 'display: none;'}
  left: ${props => `${props.left + absoluteDescriptionLeftExtra}px`};
`;
