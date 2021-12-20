import { TradingWidgetProps } from './types';

export const scriptSRC = 'https://s3.tradingview.com/tv.js';
export const containerId = 'tradingview_widget';

export const widgetOptions: TradingWidgetProps = {
  width: '100%',
  height: '100%',
  interval: '60',
  range: undefined,
  timezone: 'Etc/UTC',
  theme: 'light',
  style: '1',
  locale: 'en',
  toolbar_bg: '#f1f3f6',
  enable_publishing: false,
  hide_top_toolbar: false,
  hide_legend: false,
  withdateranges: true,
  hide_side_toolbar: true,
  allow_symbol_change: true,
  save_image: false,
  details: false,
  hotlist: false,
  calendar: false,
  show_popup_button: false,
  popup_width: '600',
  popup_height: '400',
  watchlist: undefined,
  studies: undefined,
};
