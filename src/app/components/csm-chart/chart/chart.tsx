import { useEffect, useRef } from 'react';

import { select } from 'd3';

import { SimulationNodeDatumRadial } from '../types';
import {
  circlesSimulation,
  createBaseMap,
  createCategoryPacks,
  generateCategoryPacks,
  categoriesLabels,
} from '../utils';
import { data } from './mock-data';
import { ChartWrapper, RandomSvg } from './styled';

export const CSMap = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const width = wrapperRef.current?.offsetWidth;
    const height = wrapperRef.current?.offsetHeight;

    if (width && height && svgRef.current) {
      const map = createBaseMap({ width, height, ref: svgRef });
      const svg = select(map);
      const categoriesPacked = createCategoryPacks(data);
      const nodes = circlesSimulation({
        nodes: categoriesPacked,
        width,
        height,
      }) as SimulationNodeDatumRadial[];

      generateCategoryPacks({ svg, nodes });

      categoriesLabels({ ref: svgRef, nodes });
    }
  }, [wrapperRef.current?.offsetWidth, wrapperRef.current?.offsetHeight]);

  return (
    <ChartWrapper ref={wrapperRef}>
      <RandomSvg ref={svgRef} />
    </ChartWrapper>
  );
};
