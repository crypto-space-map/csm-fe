export enum StatisticTypes {
  COMMON = 'COMMON',
  PERCENTAGE = 'PERCENTAGE',
  SUPPLY = 'SUPPLY',
  WEBSITE = 'WEBSITE',
}

export interface CommonStatistic {
  usd: number;
  btc: number;
}

export interface PercentageStatistic {
  value: number;
  percentage: number;
}

export interface StatisticDetailDataDTO {
  marketPrice?: CommonStatistic;
  priceChangePercentageDay?: PercentageStatistic;
  priceChangePercentageWeek?: PercentageStatistic;
  website: string;
  marketCap?: CommonStatistic;
  totalVolume?: CommonStatistic;
  supplyCirculating?: PercentageStatistic;
  supplyTotal?: PercentageStatistic;
}

export interface GenerateDataProps {
  title: string;
  mainValue: string;
  secondValue?: string;
  type: StatisticTypes;
}

export interface StatisticItemProps {
  title: string;
  mainValue: string;
  secondValue?: string;
}
