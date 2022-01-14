import { useEffect, useMemo, useState } from 'react';

import { Simulation } from 'd3';

import { circlesSimulation, createCategoryPacks } from '.';
import { PackedCategories, UseChartProps } from '../types';
import { packedChild } from './child-packer';

export function useChart({ width, height, maxMarketCap, tree }: UseChartProps) {
  const [packedCategories, setPackedCategories] = useState<PackedCategories[]>([]);
  const [simulation, setSimulation] = useState<Simulation<PackedCategories, undefined>>();
  useEffect(() => {
    if (width && height && tree && maxMarketCap) {
      setPackedCategories(createCategoryPacks(tree, maxMarketCap, width, height));
    }
  }, [width, height, maxMarketCap, tree]);

  useEffect(() => {
    if (packedCategories && width && height) {
      setSimulation(circlesSimulation({ packedCategories, width, height }));
    }
  }, [packedCategories, width, height]);

  const simulatedCircles = useMemo(
    () => simulation?.nodes().map(item => packedChild(item, item.r)),
    [simulation]
  );

  return {
    packedCategories,
    simulation,
    simulatedCircles,
  };
}
