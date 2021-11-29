import { useEffect, useRef } from 'react';

import { select } from 'd3';

import { useSpaceMap } from 'app/containers/pages/ space-map/hooks';

import { SimulationNodeDatumRadial } from '../types';
import {
  circlesSimulation,
  createBaseMap,
  createCategoryPacks,
  generateCategoryPacks,
  categoriesLabels,
  circleShadow,
  fundsTooltips,
} from '../utils';
import { generateFundsLegend } from '../utils/circles-legend';
// import { data } from './mock-data';
import { ChartWrapper, RandomSvg } from './styled';

export const CSMap = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const {
    fetchSpaceMapData,
    spaceMapData: { data: csmData, loading },
  } = useSpaceMap();

  useEffect(() => {
    if (!csmData && !loading) {
      fetchSpaceMapData();
    }
  }, [fetchSpaceMapData, csmData, loading]);

  useEffect(() => {
    const width = wrapperRef.current?.offsetWidth;
    const height = wrapperRef.current?.offsetHeight;
    if (width && height && svgRef.current && csmData) {
      const map = createBaseMap({ width, height, ref: svgRef });
      const svg = select(map);
      const categoriesPacked = createCategoryPacks(csmData);
      const nodes = circlesSimulation({
        nodes: categoriesPacked,
        width,
        height,
      }) as SimulationNodeDatumRadial[];

      const fundsTooltip = fundsTooltips({ ref: wrapperRef, nodes });

      generateFundsLegend({ svg, nodes });

      generateCategoryPacks({ svg, nodes, fundsTooltip });

      categoriesLabels({ ref: svgRef, nodes });

      circleShadow(svg);
    }
  }, [wrapperRef.current?.offsetWidth, wrapperRef.current?.offsetHeight, svgRef, csmData]);

  return (
    <ChartWrapper ref={wrapperRef}>
      <RandomSvg ref={svgRef} />
    </ChartWrapper>
  );
};
