export const data = {
  marketPrice: { usd: 149.89, btc: 0.00348365 },
  marketCap: { usd: 46172009808, btc: 1074272 },
  priceChangePercentage: {
    '24h': { value: -18.703080002405, percentage: -11.09392 },
    '7d': { value: -8.330775902328375, percentage: -12.487 },
  },
  website: 'https://solana.com/',
  totalVolume: { usd: 2655656940, btc: 61723 },
  supply: {
    circulating: { value: 309418672.787748, percentage: 60.88749775553659 },
    total: { value: 508180963.57, percentage: 76171244629.5073 },
  },
  name: 'Solana',
  symbol: 'sol',
  icon: 'https://assets.coingecko.com/coins/images/4128/thumb/Solana.jpg?1635329178',
  rank: 5,
};

export const headerDetailData = {
  name: 'Solana',
  symbol: 'sol',
  icon: 'https://assets.coingecko.com/coins/images/4128/thumb/Solana.jpg?1635329178',
  rank: 5,
};

export const statisticDetailData = {
  marketPrice: { usd: 149.89, btc: 0.00348365 },
  marketCap: { usd: 46172009808, btc: 1074272 },
  /* priceChangePercentage: {
    '24h': { value: -18.703080002405, percentage: -11.09392 },
    '7d': { value: -8.330775902328375, percentage: -12.487 },
  }, */
  priceChangePercentageDay: { value: -18.703080002405, percentage: -11.09392 },
  priceChangePercentageWeek: { value: -8.330775902328375, percentage: -12.487 },

  website: 'https://solana.com/',
  totalVolume: { usd: 2655656940, btc: 61723 },
  /* supply: {
    circulating: { value: 309418672.787748, percentage: 60.88749775553659 },
    total: { value: 508180963.57, percentage: 76171244629.5073 },
  }, */
  supplyCirculating: { value: 309418672.787748, percentage: 60.88749775553659 },
  supplyTotal: { value: 508180963.57, percentage: 76171244629.5073 },
};

const statisticTypes = {
  common: 'common',
  percentage: 'percentage',
  supply: 'supply',
  website: 'website',
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

const optionsOrder = Object.keys(options);

const supplyStatistic = [options.supplyCirculating, options.supplyTotal];
const percentageStatistic = [options.priceChangePercentageDay, options.priceChangePercentageWeek];

const generateOptions = optionsOrder.map(item => {
  if (supplyStatistic.includes(item)) {
    return { ...statisticDetailData[item], type: statisticTypes.supply };
  }
  if (percentageStatistic.includes(item)) {
    return { ...statisticDetailData[item], type: statisticTypes.percentage };
  }
  if (percentageStatistic.includes(item)) {
    return { ...statisticDetailData[item], type: statisticTypes.percentage };
  }
  if (item === options.website) {
    return { ...statisticDetailData[item], type: statisticTypes.website };
  }

  return { ...statisticDetailData[item], type: statisticTypes.common };
});

/* 
const options = [
  {
    title: 'Market Price',
    firstCount: `$12.10`, // к числу прибавляем $
    secondCount: '0.0035 BTC', // округляем до 4-й цифры и добавляем BTC
    type: 'simple',
  },
]; */

/* 
marketPrice
marketCap
totalVolume
*/

/* 
supply circulating
supply total
*/

/* website */

/* 
24h
7h
*/
