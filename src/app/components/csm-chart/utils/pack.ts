import * as d3 from 'd3';

import { PackType } from '../types';

export const pack = ({ data, width, height }: PackType) => {
  const partition = d3
    .pack()
    .size([width * 2, height])
    .padding(26);
  const parsedData = d3.hierarchy(data).sum(d => d.value);

  return partition(parsedData);
};
