import { pack, hierarchy } from 'd3';

import { SimulationNodeDatumRadial } from '../types';

export const packedChild = (data: SimulationNodeDatumRadial, r: number) =>
  pack()
    .size([r * 2, r * 2])
    .padding(30)(
    hierarchy(data)
      .sum(d => d.value)
      //   Aggregated numeric value as calculated by sum(value) or count(), if previously invoked.
      .sort((a, b) => b.value - a.value)
  );
