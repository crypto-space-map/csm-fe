import { scaleQuantize, interpolateCool } from 'd3';

const colorArray = [...Array(99).keys()].map(item => interpolateCool(item / 100));

export const color = scaleQuantize()
  .domain([0, 2])
  .range(colorArray as Iterable<number>);
