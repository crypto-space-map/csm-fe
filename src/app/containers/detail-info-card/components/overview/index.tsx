import { memo, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { TradingWidget } from 'app/components';

import { selectedProjectTicker, selectedOverviewExtraData } from '../../selectors';
import { useDispatchAction } from '../../slice';
import { ExtraInfo } from './extra-info';
import { OverviewWrapper, TradingWidgetWrapper } from './styles';

export const Overview = memo(() => {
  const ticker = useSelector(selectedProjectTicker);
  const overviewExtraData = useSelector(selectedOverviewExtraData);

  const { fetchOverviewTradingStock } = useDispatchAction();
  useEffect(() => {
    fetchOverviewTradingStock();
  }, [fetchOverviewTradingStock]);

  return (
    <OverviewWrapper>
      <TradingWidgetWrapper>
        <TradingWidget symbol={`${ticker}USDT`} />
      </TradingWidgetWrapper>
      {overviewExtraData && <ExtraInfo {...overviewExtraData} />}
    </OverviewWrapper>
  );
});
