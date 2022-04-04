import { memo, useMemo, useCallback } from 'react';

import { useSelector } from 'react-redux';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';

import { useDispatchAction as notifierUseDispatchAction } from 'store/notifier/slice';
import { copyText } from 'utils/detail-info';

import { selectedOverviewExtraData } from '../../selectors';
import { MaxVolumeExchangeProps } from '../../types';
import { widgetOptions } from './constants';
import { ExtraInfo } from './extra-info';
import { OverviewWrapper, TradingWidgetWrapper } from './styles';

const copyMessage = 'Explorer was copied';

export const Overview = memo(() => {
  const overviewExtraData = useSelector(selectedOverviewExtraData);
  const maxVolumeExchangeOptions = overviewExtraData?.maxVolumeExchange ?? ({} as MaxVolumeExchangeProps);
  const { targetTicker, baseTicker, identifier } = maxVolumeExchangeOptions;
  const exchange = (identifier ?? '').toUpperCase();

  const { addNotify } = notifierUseDispatchAction();

  const isShowWidget = useMemo(
    () => targetTicker && baseTicker && identifier,
    [baseTicker, identifier, targetTicker]
  );

  const handleCopyClick = useCallback(
    (text: string) => {
      if (text) {
        copyText(text);
        addNotify({ message: copyMessage, type: 'success' });
      }
    },
    [addNotify]
  );
  return (
    <OverviewWrapper>
      <TradingWidgetWrapper>
        {isShowWidget && (
          <AdvancedRealTimeChart symbol={`${exchange}:${baseTicker}${targetTicker}`} {...widgetOptions} />
        )}
      </TradingWidgetWrapper>
      {overviewExtraData && <ExtraInfo {...overviewExtraData} handleCopyClick={handleCopyClick} />}
    </OverviewWrapper>
  );
});
