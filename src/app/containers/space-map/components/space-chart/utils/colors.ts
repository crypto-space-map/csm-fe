import { scaleQuantize, interpolateCool } from 'd3';

const colorArray = [...Array(100).keys()].map(item => interpolateCool(item / 100));

// const colorArray = [
//   '#78939C',
//   '#9DD2F8',
//   ' #A9F89D',
//   '#FCEB92',
//   '#FF8585',
//   '#FDA1FF',
//   '#E0772B',
//   '#E535D4',
//   '#F64848',
//   '#B41F54',
//   '#B02727',
// ];
/** Массив цветов от Жени  */

export const color = scaleQuantize()
  .domain([0, 100])
  .range(colorArray as Iterable<number>);
