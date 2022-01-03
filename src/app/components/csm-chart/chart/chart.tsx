import { useEffect, useLayoutEffect, useRef } from 'react';

import { select } from 'd3';
import { useSelector } from 'react-redux';

import { useSpaceMap } from 'app/containers/space-map/hooks';
import { selectMapData } from 'app/containers/space-map/selectors';

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

export const SpaceChart = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const {
    filters: { mCapFrom, mCapTo, exchanges },
  } = useSelector(selectMapData);

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

  useLayoutEffect(() => {
    const width = wrapperRef.current?.offsetWidth;
    const height = wrapperRef.current?.offsetHeight;

    const IS_RENDER_PROPS_AVAILABLE =
      width && height && svgRef.current && tree && maxMarketCap && minMarketCap;

    if (IS_RENDER_PROPS_AVAILABLE) {
      const map = createBaseMap({ width, height, ref: svgRef });
      const svg = select(map);
      const wrapper = select(wrapperRef.current);
      const categoriesPacked = createCategoryPacks(tree, maxMarketCap);
      const nodes = circlesSimulation({
        nodes: categoriesPacked,
        width,
        height,
      });
      // clear for rerender
      svg.selectAll('g').remove();
      wrapper.selectAll('div').remove();

      const fundsTooltip = fundsTooltips({ ref: wrapperRef, nodes });

      // TODO  убрал тк нет актуальных данных (выглядит не оч)
      // generateFundsLegend({ svg, nodes });

      generateCategoryPacks({
        svg,
        nodes,
        fundsTooltip,
        mCapFrom,
        mCapTo,
        exchanges,
        maxMarketCap,
        minMarketCap,
      });

      categoriesLabels({ ref: svgRef, nodes });
    }
  }, [
    wrapperRef.current?.offsetWidth,
    wrapperRef.current?.offsetHeight,
    svgRef,
    tree,
    maxMarketCap,
    minMarketCap,
    mCapFrom,
    mCapTo,
    exchanges,
  ]);

  return (
    <ChartWrapper ref={wrapperRef}>
      <RandomSvg ref={svgRef} />
    </ChartWrapper>
  );
};
