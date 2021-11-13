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

      svg
        .append('g')
        .classed('centroids', true)
        .selectAll('circle')
        .data(nodes)
        .join('circle')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', d => d.r)
        .attr('fill', 'none')
        .attr('stroke', 'white')
        .attr('stroke-dasharray', '10,10')
        .attr('stroke-width', 1);
    }
  }, [wrapperRef.current?.offsetWidth, wrapperRef.current?.offsetHeight]);

  return (
    <ChartWrapper ref={wrapperRef}>
      <RandomSvg ref={svgRef} />
    </ChartWrapper>
  );
};
