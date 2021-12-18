import styled from '@emotion/styled';

export const TabSectionWrapper = styled.div`
  background-color: white;
  overflow: hidden;
`;

export const TabContentWrapper = styled.div`
  padding-top: 24px;
  overflow: hidden;
  height: calc(100% - 72px);
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

export const TabContent = styled.div`
  width: calc(100% - 48px);
`;
