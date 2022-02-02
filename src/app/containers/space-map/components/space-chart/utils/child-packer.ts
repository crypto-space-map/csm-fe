import { pack, hierarchy, HierarchyCircularNode } from 'd3';

import { PackedCategories, PackedNodes } from '../types';

const CIRCLES_PADDING = 5;

export const packedChild = (data: PackedNodes | PackedCategories) =>
  pack()
    .size([data.r * 2, data.r * 2]) /** Set pack size by parent radius */
    .padding(CIRCLES_PADDING)(
    hierarchy<PackedCategories>(data as PackedCategories)
      .sum(d => d.marketCap)
      .sort(
        (a, b) => (b.value || 1) - (a?.value || 0)
      ) /** Aggregated numeric value as calculated by sum(value) or count(), if previously invoked. */
  ) as HierarchyCircularNode<PackedCategories>;
