export type ColorTheme = 'light' | 'dark';

export type TradingWidgetProps = {
  width?: number | string;
  height?: number | string;
  autosize?: boolean;
  symbol?: string;
  interval?: '1' | '3' | '5' | '15' | '30' | '60' | '120' | '180' | '240' | 'D' | 'W';
  range?: '1D' | '5D' | '1M' | '3M' | '6M' | 'YTD' | '12M' | '60M' | 'ALL';
  timezone?: string;
  theme?: ColorTheme;
  style?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
  locale?: string;
  toolbar_bg?: string;
  enable_publishing?: boolean;
  withdateranges?: boolean;
  hide_top_toolbar?: boolean;
  hide_legend?: boolean;
  hide_side_toolbar?: boolean;
  allow_symbol_change?: boolean;
  save_image?: boolean;
  details?: boolean;
  hotlist?: boolean;
  calendar?: boolean;
  show_popup_button?: boolean;
  popup_width?: string;
  popup_height?: string;
  watchlist?: string[];
  studies?: string[];

  container_id?: string;
  children?: never;
};
