import { interpolateRgbBasis } from 'd3';

const colorArray = [
  '#78939C',
  '#9DD2F8',
  '#A9F89D',
  '#FCEB92',
  '#FF8585',
  '#FDA1FF',
  '#E0772B',
  '#E535D4',
  '#F64848',
  '#B41F54',
  '#B02727',
];

export const color = interpolateRgbBasis(colorArray);
