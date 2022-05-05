import { useState, useEffect } from 'react';

import { HelloCosmo as HelloCosmoIcon } from 'assets';

import { StyledHelloCosmo, StyledTooltip } from './styles';

interface HelloCosmoProps {
  handleClick: () => void;
  isShowGuide: boolean;
}

export const HelloCosmo = ({ handleClick, isShowGuide }: HelloCosmoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFirstAnimationDone, setIsFirstAnimationDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
      setIsFirstAnimationDone(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (isFirstAnimationDone) setIsVisible(!isShowGuide);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowGuide]);

  return (
    <StyledHelloCosmo onClick={handleClick} isVisible={isVisible}>
      <StyledTooltip>
        <span>Hi! I can help</span>
      </StyledTooltip>
      <HelloCosmoIcon />
    </StyledHelloCosmo>
  );
};
