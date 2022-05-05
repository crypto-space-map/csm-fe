import { useEffect } from 'react';

import { TemplateProps } from '../../../types';
import { ButtonsGroup } from '../../buttons-group';
import {
  StyledIntroduceContentWrapper,
  StyledContent,
  StyledGreeting,
  StyledExchanges,
  StyledInfo,
} from './styles';

export const Introduce = ({
  onClose,
  onNextClick,
  setSizeOptions,
}: Pick<TemplateProps, 'onClose' | 'onNextClick' | 'setSizeOptions'>) => {
  useEffect(() => {
    setSizeOptions(null);
  }, [setSizeOptions]);

  return (
    <StyledIntroduceContentWrapper>
      <StyledContent>
        <StyledGreeting>Hello there!</StyledGreeting>
        <StyledInfo>
          Welcome to CSM where you can find aggreagated info about projects from 6 exchanges:
        </StyledInfo>
        <StyledExchanges>Binance, Coinbase, Huobi, Kucoin, Ftx and Coinlist</StyledExchanges>
        <StyledInfo>
          Save your time with CSM: categories, competitors, investors and partners, filters and many more
          right on the 1 screen. No more Excel sheets or tons of browser tabs.
        </StyledInfo>
      </StyledContent>
      <ButtonsGroup
        leftButtonText="Close"
        rightButtonText="Let's dive deeper"
        leftHandler={onClose}
        rightHandler={onNextClick}
      />
    </StyledIntroduceContentWrapper>
  );
};
