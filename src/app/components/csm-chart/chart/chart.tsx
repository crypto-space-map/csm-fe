import { useEffect, useRef } from 'react';

import { select } from 'd3';

import { useSpaceMap } from 'app/containers/pages/space-map/hooks';

import {
  circlesSimulation,
  createBaseMap,
  createCategoryPacks,
  generateCategoryPacks,
  categoriesLabels,
  fundsTooltips,
} from '../utils';
import { generateFundsLegend } from '../utils/circles-legend';
import { ChartWrapper, RandomSvg } from './styled';

export const CSMap = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const {
    fetchSpaceMapData,
    spaceMapData: { tree, maxMarketCap, minMarketCap },
    fetchingMapData: loading,
  } = useSpaceMap();

  useEffect(() => {
    if (!tree && !loading) {
      fetchSpaceMapData();
    }
  }, [fetchSpaceMapData, tree, loading]);

  useEffect(() => {
    const width = wrapperRef.current?.offsetWidth;
    const height = wrapperRef.current?.offsetHeight;
    if (width && height && svgRef.current && tree && maxMarketCap) {
      const map = createBaseMap({ width, height, ref: svgRef });
      const svg = select(map);
      const categoriesPacked = createCategoryPacks(tree, maxMarketCap);
      const nodes = circlesSimulation({
        nodes: categoriesPacked,
        width,
        height,
      });

      const fundsTooltip = fundsTooltips({ ref: wrapperRef, nodes });

      generateFundsLegend({ svg, nodes });

      generateCategoryPacks({ svg, nodes, fundsTooltip });

      categoriesLabels({ ref: svgRef, nodes });
    }
  }, [
    wrapperRef.current?.offsetWidth,
    wrapperRef.current?.offsetHeight,
    svgRef,
    tree,
    maxMarketCap,
    minMarketCap,
  ]);

  return (
    <ChartWrapper ref={wrapperRef}>
      <RandomSvg ref={svgRef} />
    </ChartWrapper>
  );
};
