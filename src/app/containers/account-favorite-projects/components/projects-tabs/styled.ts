import styled from '@emotion/styled';

export const StyledTabsButtonContainer = styled.div<{ showShadow: boolean }>`
  display: grid;
  grid-auto-flow: column;
  & > :nth-of-type(1) {
    transition: 0.2s linear;
    box-shadow: ${({ showShadow = false }) => showShadow && '-1px -1px 28.5px 25.5px #242424'};
  }
`;

export const TabsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
  max-width: inherit;
  padding-right: 15px;
`;

export const TabActionsContainer = styled.div`
  display: grid;
  gap: 0 30px;
  grid-auto-flow: column;
  align-items: center;
`;
