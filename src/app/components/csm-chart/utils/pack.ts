import * as d3 from 'd3';

import { PackType } from '../types';

export const pack = ({ data, width, height }: PackType) =>
  d3.pack().size([width, height]).padding(3)(
    d3
      .hierarchy(data)
      .sum(d => d.value)
      .sort((a, b) => b.value - a.value)
  );
