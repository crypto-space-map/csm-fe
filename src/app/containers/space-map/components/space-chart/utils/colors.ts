import { scaleQuantize, interpolateCool } from 'd3';

const colorArray = [...Array(400).keys()].map(item => interpolateCool(item / 100));

export const color = scaleQuantize()
  // в домен внести min max marketCap
  .domain([0, 100000000000])
  .range(colorArray as Iterable<number>);
