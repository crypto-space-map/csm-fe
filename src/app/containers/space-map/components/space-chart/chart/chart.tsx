import { useEffect, useLayoutEffect, useRef } from 'react';

import { select } from 'd3';

import { useSpaceMap } from 'app/containers/space-map/hooks';

import {
  circlesSimulation,
  createBaseMap,
  createCategoryPacks,
  generateCategoryPacks,
  categoriesLabels,
  fundsTooltips,
} from '../utils';
import { generateFundsLegend } from '../utils/circles-legend';
import { generateProjectLinks } from '../utils/projects-links';
import { ChartWrapper, RandomSvg } from './styled';

export const SpaceChart = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const {
    filters: { mCapFrom, mCapTo, exchanges },
  } = useSpaceMap();

  const {
    fetchSpaceMapData,
    fetchPartnershipsData,
    spaceMapData: { tree, maxMarketCap, minMarketCap },
    fetchingMapData: loading,
    loadMapDataError,
    projectPartnerships: { data: partnerships },
  } = useSpaceMap();

  useEffect(() => {
    if (!tree && !loading && !loadMapDataError) {
      fetchSpaceMapData();
    }
  }, [fetchSpaceMapData, tree, loading, loadMapDataError]);

  useLayoutEffect(() => {
    const width = wrapperRef.current?.offsetWidth;
    const height = wrapperRef.current?.offsetHeight;

    const IS_RENDER_PROPS_AVAILABLE =
      width && height && svgRef.current && tree && maxMarketCap && minMarketCap;

    if (IS_RENDER_PROPS_AVAILABLE) {
      const links = [
        {
          index: 0,
          source: {
            index: 4,
            x: width / 2,
            y: height / 2,
            vy: 0.0005692950239992549,
            vx: 0.00025140599519051697,
          },
          target: {
            index: 3,
            x: 668.13139065013434,
            y: 18.713217047418286,
            vy: -0.0004882940833094279,
            vx: -0.00040635786001643815,
          },
        },
        {
          index: 0,
          source: {
            index: 4,
            x: width / 2,
            y: height / 2,
            vy: 0.0005692950239992549,
            vx: 0.00025140599519051697,
          },
          target: {
            index: 3,
            x: 168.13139065013434,
            y: 18.713217047418286,
            vy: -0.0004882940833094279,
            vx: -0.00040635786001643815,
          },
        },
        {
          index: 0,
          source: {
            index: 4,
            x: width / 2,
            y: height / 2,
            vy: 0.0005692950239992549,
            vx: 0.00025140599519051697,
          },
          target: {
            index: 3,
            x: 468.13139065013434,
            y: 18.713217047418286,
            vy: -0.0004882940833094279,
            vx: -0.00040635786001643815,
          },
        },
      ];

      const map = createBaseMap({ width, height, ref: svgRef });
      const svg = select(map);
      const wrapper = select(wrapperRef.current);
      const categoriesPacked = createCategoryPacks(tree, maxMarketCap, width, height);
      const simulation = circlesSimulation({
        nodes: categoriesPacked,
        width,
        height,
        links,
      });

      const nodes = simulation.nodes();

      console.log(nodes);

      //

      // clear for rerender
      svg.selectAll('g').remove();
      wrapper.selectAll('div').remove();

      const fundsTooltip = fundsTooltips({ ref: wrapperRef, nodes });

      // TODO  убрал тк нет актуальных данных (выглядит не оч)
      // generateFundsLegend({ svg, nodes });

      const link = svg
        .append('g')
        .classed('TEST123', true)
        .selectAll('TEST123')
        .data(links)
        .enter()
        .append('line')
        .classed('TEST123', true)
        .join('line')
        .attr('stroke', '#ff0202')
        .attr('stroke-width', 2);

      generateCategoryPacks<typeof fetchPartnershipsData>({
        svg,
        nodes,
        fundsTooltip,
        mCapFrom,
        mCapTo,
        exchanges,
        maxMarketCap,
        minMarketCap,
        fetchPartnershipsData,
      });

      // generateProjectLinks({ simulation, partnerships });

      categoriesLabels({ ref: svgRef, nodes });

      simulation.on('tick', () => {
        link
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y);
      });
      simulation.alpha(0.5).restart();
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
    partnerships,
    fetchPartnershipsData,
  ]);

  return (
    <ChartWrapper ref={wrapperRef}>
      <RandomSvg ref={svgRef} />
    </ChartWrapper>
  );
};
