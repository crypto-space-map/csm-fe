export enum StatisticTypes {
  COMMON,
  PERCENTAGE,
  SUPPLY,
  WEBSITE,
}

const thousand = 1000;
const million = thousand * thousand;
const billion = thousand * thousand * thousand;

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

const optionsOrder = Object.keys(options);

const supplyStatistic = [options.supplyCirculating, options.supplyTotal];
const percentageStatistic = [options.priceChangePercentageDay, options.priceChangePercentageWeek];

export const roundNumber = (value: number, countAfterPoint = 2) =>
  parseFloat((Math.round(value * 100) / 100).toFixed(countAfterPoint));

const transformThousandNumber = (value: number) =>
  String(value).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');

export const getTransformedPrice = (value: number) => {
  if (value >= billion) {
    const transformedValue = roundNumber(value / billion);
    return `$${transformedValue} B`;
  }
  if (value >= million) {
    const transformedValue = roundNumber(value / million);
    return `$${transformedValue} M`;
  }
  if (value >= thousand) {
    const roundedValue = roundNumber(value);
    return `$${transformThousandNumber(roundedValue)} M`;
  }

  return roundNumber(value);
};

const getTransformedBtc = (value: number, countAfterPoint: number) =>
  `${roundNumber(value, countAfterPoint)} BTC`;

const generateOptions = <T extends >(data) =>
  optionsOrder.map(item => {
    if (supplyStatistic.includes(item)) {
      return { ...statisticDetailData[item], type: StatisticTypes.SUPPLY };
    }
    if (percentageStatistic.includes(item)) {
      return { ...statisticDetailData[item], type: StatisticTypes.PERCENTAGE };
    }
    if (item === options.website) {
      return { ...statisticDetailData[item], type: StatisticTypes.WEBSITE };
    }
    if (item === options.marketPrice) {
      return { ...statisticDetailData[item], type: StatisticTypes.WEBSITE };
    }

    return { ...statisticDetailData[item], type: StatisticTypes.COMMON };
  });
