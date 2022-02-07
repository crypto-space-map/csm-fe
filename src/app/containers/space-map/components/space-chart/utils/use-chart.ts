import { useEffect, useMemo, useState } from 'react';

import { Simulation } from 'd3';

import { circlesSimulation, createCategoryPacks } from '.';
import { PackedNodes, UseChartProps } from '../types';
import { packedChild } from './child-packer';

export function useChart({ width, height, maxMarketCap, minMarketCap, tree }: UseChartProps) {
  const [packedCategories, setPackedCategories] = useState<PackedNodes[]>([]);
  const [simulation, setSimulation] = useState<Simulation<PackedNodes, undefined> | null>(null);
  useEffect(() => {
    if (width && height && tree && maxMarketCap && minMarketCap) {
      setPackedCategories(createCategoryPacks(tree, maxMarketCap, minMarketCap, width, height));
    }
  }, [width, height, maxMarketCap, minMarketCap, tree]);

  useEffect(() => {
    if (packedCategories && width && height) {
      setSimulation(circlesSimulation({ packedCategories, width, height }) || []);
    }
  }, [packedCategories, width, height]);

  const simulatedCircles = useMemo(() => simulation?.nodes().map(item => packedChild(item)), [simulation]);

  return {
    packedCategories,
    simulation,
    simulatedCircles,
  };
}
