import { memo, useEffect } from 'react';

import { Box, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import { TradingWidget } from 'app/components';

import * as selectors from '../../selectors';
import { useDispatchAction } from '../../slice';
import { scriptSRC, widgetOptions, containerId } from './constants';
import { OverviewWrapper } from './styles';

export const Overview = memo(() => {
  const overviewTradingStock = useSelector(selectors.overviewTradingStock);
  const overviewTradingStockLoading = useSelector(selectors.overviewTradingStockLoading);

  const { fetchOverviewTradingStock } = useDispatchAction();
  useEffect(() => {
    fetchOverviewTradingStock();
  }, [fetchOverviewTradingStock]);

  if (overviewTradingStockLoading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <OverviewWrapper>
      <div>
        <TradingWidget
          scriptSRC={scriptSRC}
          containerId={containerId}
          widgetOptions={widgetOptions}
          symbol={`${overviewTradingStock}:CEREUSDT`}
        />
      </div>
    </OverviewWrapper>
  );
});
