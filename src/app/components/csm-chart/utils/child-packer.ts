import { pack, hierarchy } from 'd3';

import { SimulationNodeDatumRadial } from '../types';

const CIRCLES_PADDING = 30;

export const packedChild = (data: SimulationNodeDatumRadial, r: number) =>
  pack()
    .size([r * 2, r * 2]) /** Set pack size by parent radius */
    .padding(CIRCLES_PADDING)(
    hierarchy<SimulationNodeDatumRadial>(data)
      .sum(d => d.value)
      .sort(
        (a, b) => (b.value || 1) - (a?.value || 0)
      ) /** Aggregated numeric value as calculated by sum(value) or count(), if previously invoked. */
  );
