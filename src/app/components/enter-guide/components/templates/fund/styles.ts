import styled from '@emotion/styled';

const absoluteDescriptionLeftExtra = 60;

export const BlockDescriptionWrapper = styled.div<{ right: number }>`
  position: absolute;
  top: 110px;
  ${props => props.right === 0 && 'display: none;'}
  left: ${props => `${props.right + absoluteDescriptionLeftExtra}px`};
`;
