import { memo, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { TradingWidget } from 'app/components';
import { Loader } from 'common/components/loader';

import * as selectors from '../../selectors';
import { useDispatchAction } from '../../slice';
import { OverviewWrapper, LoaderWrapper } from './styles';

export const Overview = memo(() => {
  const overviewTradingStock = useSelector(selectors.overviewTradingStock);
  const overviewTradingStockLoading = useSelector(selectors.overviewTradingStockLoading);

  const { fetchOverviewTradingStock } = useDispatchAction();
  useEffect(() => {
    fetchOverviewTradingStock();
  }, [fetchOverviewTradingStock]);

  if (overviewTradingStockLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  return (
    <OverviewWrapper>
      <div>
        <TradingWidget symbol={`${overviewTradingStock}:CEREUSDT`} />
      </div>
    </OverviewWrapper>
  );
});
