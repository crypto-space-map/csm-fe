import { memo, ReactNode } from 'react';

import { DetailWrapper, TransitionWrapper } from './styles';

interface DetailCardWrapperProps {
  children: ReactNode;
  isShow: boolean;
  isHide: boolean;
}

export const DetailCardWrapper = memo(({ children, isShow, isHide }: DetailCardWrapperProps) => (
  <TransitionWrapper isOpen={isShow} isHide={isHide}>
    <DetailWrapper>{children}</DetailWrapper>
  </TransitionWrapper>
));
