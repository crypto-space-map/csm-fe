import { StatisticDetailDataDTO, StatisticTypes, GenerateDataProps } from './types';

const thousand = 1000;
const million = thousand * thousand;
const billion = thousand * thousand * thousand;

const titles = {
  marketPrice: 'Market Price',
  priceChangePercentageDay: '24H Change',
  priceChangePercentageWeek: '7D Change',
  website: 'Website',
  marketCap: 'Market Cap',
  totalVolume: 'Total Volume',
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

const optionsOrder = Object.keys(options) as Array<keyof StatisticDetailDataDTO>;

const supplyStatistic = [options.supplyCirculating, options.supplyTotal];
const percentageStatistic = [options.priceChangePercentageDay, options.priceChangePercentageWeek];

export const roundNumber = (value: number, countAfterPoint = 2) =>
  parseFloat((Math.round(value * 100) / 100).toFixed(countAfterPoint));

const transformThousandNumber = (value: number) =>
  String(value).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');

export const getTransformedPrice = (value: number, countAfterPoint = 2) => {
  const negativePart = value < 0 ? '-' : '';
  const positiveValue = value < 0 ? -1 * value : value;
  if (positiveValue >= billion) {
    const transformedValue = roundNumber(positiveValue / billion, countAfterPoint);
    return `${negativePart}$ ${transformedValue} B`;
  }
  if (positiveValue >= million) {
    const transformedValue = roundNumber(positiveValue / million, countAfterPoint);
    return `${negativePart}$ ${transformedValue} M`;
  }
  if (positiveValue >= thousand) {
    const roundedValue = roundNumber(positiveValue);
    return `${negativePart}$ ${transformThousandNumber(roundedValue)} M`;
  }

  return `${negativePart}$ ${roundNumber(positiveValue, countAfterPoint)}`;
};

const getTransformedBtc = (value: number) => `${value} BTC`;

const getTransformedPercentage = (value: number) => `${roundNumber(value)}%`;

export const generateOptions = (data: StatisticDetailDataDTO): GenerateDataProps[] =>
  optionsOrder.map(item => {
    if (supplyStatistic.includes(item)) {
      const { value, percentage } = data[item];
      const secondValue =
        item === options.supplyTotal
          ? getTransformedPrice(percentage)
          : getTransformedPercentage(percentage);
      return {
        title: titles[item],
        mainValue: getTransformedPrice(value),
        secondValue,
        type: StatisticTypes.COMMON,
      };
    }
    if (percentageStatistic.includes(item)) {
      const { value, percentage } = data[item];
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
    const { usd, btc } = data[item];
    const secondValue = item === options.marketPrice ? btc.toFixed(4) : roundNumber(btc);

    return {
      title: titles[item],
      mainValue: getTransformedPrice(usd),
      secondValue: getTransformedBtc(secondValue),
      type: StatisticTypes.COMMON,
    };
  });
