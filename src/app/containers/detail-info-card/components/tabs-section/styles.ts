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
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

export const TabContent = styled.div<{ show?: boolean }>`
  width: calc(100% - 48px);
  display: ${props => (props.show ? 'block' : 'none')};
`;
