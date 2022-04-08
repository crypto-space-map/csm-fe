import { roundNumber, getTransformedPrice } from 'utils/detail-info';

import {
  StatisticDetailDataDTO,
  StatisticTypes,
  GenerateDataProps,
  CommonStatistic,
  PercentageStatistic,
} from './types';

export const emptyValue = '--';

const titles = {
  marketPrice: 'Market Price',
  priceChangePercentageDay: '24H Change',
  priceChangePercentageWeek: '7D Change',
  website: 'Website',
  marketCap: 'Market Cap',
  totalVolume: '24H Volume',
  supplyCirculating: 'Circ. Supply',
  supplyTotal: 'Total Supply',
};

const options = {
  marketPrice: 'marketPrice',
  priceChangePercentageDay: 'priceChangePercentageDay',
  priceChangePercentageWeek: 'priceChangePercentageWeek',
  website: 'website',
  marketCap: 'marketCap',
  totalVolume: 'totalVolume',
  supplyCirculating: 'supplyCirculating',
  supplyTotal: 'supplyTotal',
};

const supplyStatistic = [options.supplyCirculating, options.supplyTotal];
const percentageStatistic = [options.priceChangePercentageDay, options.priceChangePercentageWeek];

const getTransformedBtc = (value: number | string) => `${value} BTC`;

const getTransformedPercentage = (value: number) => `${roundNumber(value)}%`;

export const generateOptions = (data: StatisticDetailDataDTO): GenerateDataProps[] => {
  const dataOptions = Object.keys(data) as Array<keyof StatisticDetailDataDTO>;

  const res = dataOptions.map(item => {
    if (supplyStatistic.includes(item)) {
      const { value, percentage } = data[item] as PercentageStatistic;
      const secondValue =
        item === options.supplyTotal
          ? getTransformedPrice(percentage ?? 0)
          : getTransformedPercentage(percentage ?? 0);
      return {
        id: item,
        title: titles[item],
        mainValue: value ? getTransformedPrice(value, false) : null,
        secondValue: percentage ? secondValue : null,
        type: StatisticTypes.COMMON,
      };
    }
    if (percentageStatistic.includes(item)) {
      const { value, percentage } = data[item] as PercentageStatistic;
      return {
        id: item,
        title: titles[item],
        mainValue: percentage ? String(roundNumber(percentage)) : null,
        secondValue: value ? String(roundNumber(value, 4)) : null,
        type: StatisticTypes.PERCENTAGE,
      };
    }
    if (item === options.website) {
      const value = data[item] as string;
      return {
        id: item,
        title: titles[item],
        mainValue: value,
        type: StatisticTypes.WEBSITE,
      };
    }

    const { usd, btc } = data[item] as CommonStatistic;
    const btcValue = btc ?? 0;

    const secondValue = roundNumber(btcValue, 4);
    return {
      id: item,
      title: titles[item],
      mainValue: usd ? getTransformedPrice(usd) : null,
      secondValue: btc ? getTransformedBtc(secondValue) : null,
      type: StatisticTypes.COMMON,
    };
  });
  return res;
};

export const switchElementPosition = (arr: GenerateDataProps[]) => {
  const websiteIndex = arr.findIndex(item => item.id === options.website);
  const mcapIndex = arr.findIndex(item => item.id === options.marketCap);
  if (websiteIndex !== -1 && mcapIndex !== -1) {
    [arr[mcapIndex], arr[websiteIndex]] = [arr[websiteIndex], arr[mcapIndex]];
  }
  return arr;
};
