import styled from '@emotion/styled';
import { scrollBarStyles } from 'global/styles';

export const TabSectionWrapper = styled.div`
  background-color: white;
  overflow: hidden;
  height: 100%;
`;

export const TabContentWrapper = styled.div`
  overflow: hidden;
  height: calc(100% - 45px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  ${scrollBarStyles}
`;

export const StyledTabContent = styled.div<{ show?: boolean }>`
  width: calc(100% - 48px);
  display: ${props => (props.show ? 'block' : 'none')};
`;
