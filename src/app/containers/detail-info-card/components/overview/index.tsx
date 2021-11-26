import { memo } from 'react';

import { TradingWidget } from 'app/components/trading-widget';

import { scriptSRC, widgetOptions, containerId } from './constants';
import { OverviewWrapper } from './styles';

const symbol = 'KUCOIN:CEREUSDT';

export const Overview = memo(() => (
  <OverviewWrapper>
    <div>
      <TradingWidget
        scriptSRC={scriptSRC}
        containerId={containerId}
        widgetOptions={widgetOptions}
        symbol={symbol}
      />
    </div>
  </OverviewWrapper>
));
