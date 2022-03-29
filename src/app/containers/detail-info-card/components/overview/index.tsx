import { memo, useMemo } from 'react';

import { useSelector } from 'react-redux';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';

import { selectedOverviewExtraData } from '../../selectors';
import { MaxVolumeExchangeProps } from '../../types';
import { widgetOptions } from './constants';
import { ExtraInfo } from './extra-info';
import { OverviewWrapper, TradingWidgetWrapper } from './styles';

export const Overview = memo(() => {
  const overviewExtraData = useSelector(selectedOverviewExtraData);
  const maxVolumeExchangeOptions = overviewExtraData?.maxVolumeExchange ?? ({} as MaxVolumeExchangeProps);
  const { targetTicker, baseTicker, identifier } = maxVolumeExchangeOptions;
  const exchange = (identifier ?? '').toUpperCase();
  const isShowWidget = useMemo(
    () => targetTicker && baseTicker && identifier,
    [baseTicker, identifier, targetTicker]
  );

  return (
    <OverviewWrapper>
      <TradingWidgetWrapper>
        {isShowWidget && (
          <AdvancedRealTimeChart symbol={`${exchange}:${baseTicker}${targetTicker}`} {...widgetOptions} />
        )}
      </TradingWidgetWrapper>
      {overviewExtraData && <ExtraInfo {...overviewExtraData} />}
    </OverviewWrapper>
  );
});
