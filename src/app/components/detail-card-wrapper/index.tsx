import { memo, ReactNode } from 'react';

import { DetailWrapper, TransitionWrapper } from './styles';

interface DetailCardWrapperProps {
  children: ReactNode;
  show: boolean;
}

export const DetailCardWrapper = memo(({ children, show }: DetailCardWrapperProps) => (
  <TransitionWrapper open={show}>
    <DetailWrapper>{children}</DetailWrapper>
  </TransitionWrapper>
));
