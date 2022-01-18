import { memo, ReactNode } from 'react';

import { StyledTabContent } from './styles';

interface TabContentProps {
  children: ReactNode;
  show: boolean;
}

export const TabContent = memo(({ children, show }: TabContentProps) => (
  <StyledTabContent show={show}>{children}</StyledTabContent>
));
