export enum StatisticTypes {
  COMMON = 'COMMON',
  PERCENTAGE = 'PERCENTAGE',
  SUPPLY = 'SUPPLY',
  WEBSITE = 'WEBSITE',
}

export interface CommonStatistic {
  usd: number | null;
  btc: number | null;
}

export interface PercentageStatistic {
  value: number | null;
  percentage: number | null;
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
  mainValue: string | null;
  secondValue?: string | null;
  type: StatisticTypes;
}

export interface StatisticItemProps {
  title: string;
  mainValue: string | null;
  secondValue?: string | null;
}
