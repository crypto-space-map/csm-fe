import { useEffect, useMemo } from 'react';

import { useWindowSize } from 'hooks/use-screen-size';

import { circlesSimulation, createCategoryPacks } from '.';
import { UseChartProps } from '../types';
import { packedChild } from './child-packer';

export function useChart({ width, height, maxMarketCap, minMarketCap, tree }: UseChartProps) {
  const windowSize = useWindowSize();

  const packedCategories = useMemo(() => {
    if (width && height && tree && maxMarketCap && minMarketCap) {
      return createCategoryPacks(tree, width, height);
    }
    return [];
  }, [height, maxMarketCap, minMarketCap, tree, width]);

  const simulation = useMemo(() => {
    if (packedCategories && width && height) {
      return circlesSimulation({ packedCategories, width, height });
    }
    return null;
  }, [packedCategories, width, height]);

  const simulatedCircles = useMemo(() => simulation?.nodes().map(item => packedChild(item)), [simulation]);

  useEffect(() => {
    simulation?.tick();
  }, [simulation, windowSize]);

  return {
    simulatedCircles,
  };
}
