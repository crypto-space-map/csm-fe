import { memo, ReactNode } from 'react';

import { DetailWrapper, TransitionWrapper, StyledVeil } from './styles';

interface DetailCardWrapperProps {
  children: ReactNode;
  isShow: boolean;
  isHide: boolean;
  isShowGuide: boolean;
}

export const DetailCardWrapper = memo(
  ({ children, isShow, isHide, isShowGuide }: DetailCardWrapperProps) => (
    <TransitionWrapper isOpen={isShow} isHide={isHide}>
      {isShowGuide && <StyledVeil />}
      <DetailWrapper id="card-block">{children}</DetailWrapper>
    </TransitionWrapper>
  )
);
