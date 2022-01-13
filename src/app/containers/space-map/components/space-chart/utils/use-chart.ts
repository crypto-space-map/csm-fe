import { useEffect, useMemo, useState } from 'react';

import { circlesSimulation, createCategoryPacks } from '.';
import { PackedCategories, UseChartProps } from '../types';
import { packedChild } from './child-packer';

export function useChart({ width, height, maxMarketCap, tree }: UseChartProps) {
  const [packedCategories, setPackedCategories] = useState<PackedCategories[]>([]);
  useEffect(() => {
    if (width && height && tree && maxMarketCap) {
      setPackedCategories(createCategoryPacks(tree, maxMarketCap, width, height));
    }
  }, [width, height, maxMarketCap, tree]);

  const simulation = useMemo(() => circlesSimulation({ packedCategories }), [packedCategories]);

  const simulatedCircles = useMemo(
    () => simulation.nodes().map(item => packedChild(item, item.r)),
    [simulation]
  );

  return {
    packedCategories,
    simulation,
    simulatedCircles,
  };
}
