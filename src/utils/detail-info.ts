import { THOUSAND_REG_EXP } from './reg-exp';

const http = 'http://';
const https = 'https://';
const thousand = 1000;
const million = thousand * thousand;
const billion = thousand * thousand * thousand;

export const getProductNameFromPath = (path: string, type: 'fund' | 'project') => {
  if (path.includes(type)) {
    const parts = path.split('/');
    return parts[parts.length - 1];
  }
  return '';
};

export const cutLink = (link: string) =>
  link.includes('http://') ? link.replace(http, '') : link.replace(https, '');

export const roundNumber = (value: number, countAfterPoint = 2) =>
  parseFloat((Math.round(value * 100) / 100).toFixed(countAfterPoint));

const transformThousandNumber = (value: number) => String(value).replace(THOUSAND_REG_EXP, '$1,');

export const getTransformedPrice = (value: number, withUnit = true, countAfterPoint = 2) => {
  const negativePart = value < 0 ? '-' : '';
  const positiveValue = value < 0 ? -1 * value : value;
  const unit = withUnit ? '$' : '';
  if (positiveValue >= billion) {
    const transformedValue = roundNumber(positiveValue / billion, countAfterPoint);
    return `${negativePart}${unit} ${transformedValue} B`;
  }
  if (positiveValue >= million) {
    const transformedValue = roundNumber(positiveValue / million, countAfterPoint);
    return `${negativePart}${unit} ${transformedValue} M`;
  }
  if (positiveValue >= thousand) {
    const roundedValue = roundNumber(positiveValue);
    return `${negativePart}${unit} ${transformThousandNumber(roundedValue)}`;
  }
  return `${negativePart}${unit} ${roundNumber(positiveValue, countAfterPoint)}`;
};

export const getPersentageVolume = (volume: number, totalVolume: number) => {
  if (volume && totalVolume) return Number(((volume / totalVolume) * 100).toFixed(2));
  return null;
};
