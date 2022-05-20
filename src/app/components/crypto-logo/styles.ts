import styled from '@emotion/styled';

export const StyledImg = styled.img<{ size: number }>`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
`;
