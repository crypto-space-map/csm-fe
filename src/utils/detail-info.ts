import { THOUSAND_REG_EXP, NUMBER_WITH_E, SMALL_NUMBER_WITH_ZERO } from './reg-exp';

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

export const getFixedNumber = (value: number, countAfterPoint = 2) =>
  parseFloat((Math.round(value * 100) / 100).toFixed(countAfterPoint));

const transformThousandNumber = (value: number | string) => String(value).replace(THOUSAND_REG_EXP, '$1');

export const roundNumber = (value: number, countAfterPoint = 2) => {
  const numberSign = value < 0 ? -1 : 1;
  const positiveValue = value < 0 ? -1 * value : value;
  const isFloatNumber = !!positiveValue && !Number.isInteger(positiveValue);

  if (String(value).includes('e')) {
    const [mainPartOfNumber, degree] = String(positiveValue).replace(NUMBER_WITH_E, '$1,$3').split(',');
    const sign = numberSign === -1 ? '-' : '';
    const zeros = String(10 ** +degree).slice(2); // получаем количество нулей без 2-х первых символов
    const fixedNumber = getFixedNumber(+mainPartOfNumber, countAfterPoint) * 100; // получаем целое число

    return `${sign}0.${zeros}${fixedNumber}`;
  }

  if ((positiveValue > 1 || positiveValue * 100 > 1) && isFloatNumber) {
    return getFixedNumber(positiveValue, countAfterPoint) * numberSign;
  }

  if (isFloatNumber) {
    const zeroCount = String(positiveValue).replace(SMALL_NUMBER_WITH_ZERO, '$2').length;
    const factor = 10 ** zeroCount;
    return (
      parseFloat((getFixedNumber(positiveValue * factor, countAfterPoint) / factor).toFixed(zeroCount + 2)) *
      numberSign
    );
  }

  return value;
};

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
