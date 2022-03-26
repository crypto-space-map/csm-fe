import { memo } from 'react';

import { useSelector } from 'react-redux';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';

import { selectedProjectTicker, selectedOverviewExtraData } from '../../selectors';
import { widgetOptions } from './constants';
import { ExtraInfo } from './extra-info';
import { OverviewWrapper, TradingWidgetWrapper } from './styles';

export const Overview = memo(() => {
  const ticker = useSelector(selectedProjectTicker);
  const overviewExtraData = useSelector(selectedOverviewExtraData);
  const maxVolumeExchange = (overviewExtraData?.maxVolumeExchange ?? '').toUpperCase();

  return (
    <OverviewWrapper>
      <TradingWidgetWrapper>
        <AdvancedRealTimeChart symbol={`${maxVolumeExchange}:${ticker}USDT`} {...widgetOptions} />
      </TradingWidgetWrapper>
      {overviewExtraData && <ExtraInfo {...overviewExtraData} />}
    </OverviewWrapper>
  );
});
