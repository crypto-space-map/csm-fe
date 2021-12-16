import styled from '@emotion/styled';

export const StyledProjectCard = styled.div<{ color?: 'black' | 'white' }>`
  display: grid;
  padding: 14px 14px 16px;
  border-radius: 8px;
  background-color: ${({ color = 'white' }) => color};
`;

export const StyledProjectCardContainer = styled.div`
  display: grid;
  gap: 6px 0;
  padding: 32px 0;
`;
