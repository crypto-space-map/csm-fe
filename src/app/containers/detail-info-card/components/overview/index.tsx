import { memo } from 'react';

import { useSelector } from 'react-redux';

import { TradingWidget } from 'app/components';

import { selectedProjectTicker, selectedOverviewExtraData } from '../../selectors';
import { ExtraInfo } from './extra-info';
import { OverviewWrapper, TradingWidgetWrapper } from './styles';

export const Overview = memo(() => {
  const ticker = useSelector(selectedProjectTicker);
  const overviewExtraData = useSelector(selectedOverviewExtraData);

  return (
    <OverviewWrapper>
      <TradingWidgetWrapper>
        <TradingWidget symbol={`${ticker}USDT`} />
      </TradingWidgetWrapper>
      {overviewExtraData && <ExtraInfo {...overviewExtraData} />}
    </OverviewWrapper>
  );
});
