import { ArrowIcon } from 'assets';
import { IconButton, SVGWrapper } from 'common/components';

import { StyledTabsButtonContainer } from './styled';

type TabsButtonContainerProps = {
  onPrevClick: () => void;
  onNextClick: () => void;
  showShadow: boolean;
};

export const TabsButtonContainer = ({
  onNextClick,
  onPrevClick,
  showShadow = false,
}: TabsButtonContainerProps) => (
  <StyledTabsButtonContainer showShadow={showShadow}>
    <IconButton variant="text" onClick={onPrevClick}>
      <SVGWrapper transform="rotate(90)" fill="white">
        <ArrowIcon />
      </SVGWrapper>
    </IconButton>
    <IconButton variant="text" onClick={onNextClick}>
      <SVGWrapper transform="rotate(-90)" fill="white">
        <ArrowIcon />
      </SVGWrapper>
    </IconButton>
  </StyledTabsButtonContainer>
);
