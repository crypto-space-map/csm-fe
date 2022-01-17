import { roundNumber, getTransformedPrice } from 'utils/detail-info';

import {
  StatisticDetailDataDTO,
  StatisticTypes,
  GenerateDataProps,
  CommonStatistic,
  PercentageStatistic,
} from './types';

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

const getTransformedBtc = (value: number) => `${value} BTC`;

const getTransformedPercentage = (value: number) => `${roundNumber(value)}%`;

export const generateOptions = (data: StatisticDetailDataDTO): GenerateDataProps[] => {
  const dataOptions = Object.keys(data) as Array<keyof StatisticDetailDataDTO>;

  return dataOptions.map(item => {
    if (supplyStatistic.includes(item)) {
      const { value, percentage } = data[item] as PercentageStatistic;
      const secondValue =
        item === options.supplyTotal
          ? getTransformedPrice(percentage)
          : getTransformedPercentage(percentage);
      return {
        title: titles[item],
        mainValue: getTransformedPrice(value, false),
        secondValue,
        type: StatisticTypes.COMMON,
      };
    }
    if (percentageStatistic.includes(item)) {
      const { value, percentage } = data[item] as PercentageStatistic;
      return {
        title: titles[item],
        mainValue: String(roundNumber(percentage)),
        secondValue: value.toFixed(4),
        type: StatisticTypes.PERCENTAGE,
      };
    }
    if (item === options.website) {
      const value = data[item] as string;
      return {
        title: titles[item],
        mainValue: value,
        type: StatisticTypes.WEBSITE,
      };
    }

    const { usd, btc } = data[item] as CommonStatistic;
    const secondValue = Number(item === options.marketPrice ? btc.toFixed(4) : roundNumber(btc));

    return {
      title: titles[item],
      mainValue: getTransformedPrice(usd),
      secondValue: getTransformedBtc(secondValue),
      type: StatisticTypes.COMMON,
    };
  });
};
