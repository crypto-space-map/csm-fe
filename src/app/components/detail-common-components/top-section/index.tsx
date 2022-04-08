import { ReactNode } from 'react';

import { StyledTopSection } from './styles';

interface TopSectionProps {
  children: ReactNode;
  isHide: boolean;
}

export const TopSection = ({ children, isHide }: TopSectionProps) => (
  <StyledTopSection isHide={isHide}>{children}</StyledTopSection>
);
