import styled from '@emotion/styled';

const absoluteDescriptionLeftExtra = 45;

export const BlockDescriptionWrapper = styled.div<{ right: number }>`
  position: absolute;
  top: 140px;
  ${props => props.right === 0 && 'display: none;'}
  left: ${props => `${props.right + absoluteDescriptionLeftExtra}px`};
`;
