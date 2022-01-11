import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { select } from 'd3';

import { useSpaceMap } from 'app/containers/space-map/hooks';

import { PackedCategories } from '../types';
import {
  circlesSimulation,
  createBaseMap,
  createCategoryPacks,
  generateCategoryPacks,
  categoriesLabels,
  fundsTooltips,
} from '../utils';
import { generateFundsLegend } from '../utils/circles-legend';
import { getCircleCord } from '../utils/helpers';
import { generateProjectLinks } from '../utils/projects-links';
import { ChartWrapper, RandomSvg } from './styled';

export const SpaceChart = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const [currentProject, setCurrentProject] = useState<PackedCategories | null>(null);

  const setProject = useCallback(val => setCurrentProject(val), []);

  const {
    filters: { mCapFrom, mCapTo, exchanges },
  } = useSpaceMap();

  const {
    fetchSpaceMapData,
    fetchPartnershipsData,
    spaceMapData: { tree, maxMarketCap, minMarketCap },
    fetchingMapData: loading,
    loadMapDataError,
    projectPartnerships,
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
      const map = createBaseMap({ width, height, ref: svgRef });
      const svg = select(map);
      const wrapper = select(wrapperRef.current);
      const categoriesPacked = createCategoryPacks(tree, maxMarketCap, width, height);
      const simulation = circlesSimulation({
        nodes: categoriesPacked,
        width,
        height,
      });

      const nodes = simulation.nodes();

      // clear for rerender
      svg.selectAll('g').remove();
      wrapper.selectAll('div').remove();

      const fundsTooltip = fundsTooltips({ ref: wrapperRef, nodes });

      // TODO  убрал тк нет актуальных данных (выглядит не оч)
      // generateFundsLegend({ svg, nodes });

      const circles = generateCategoryPacks({
        svg,
        nodes,
        fundsTooltip,
        mCapFrom,
        mCapTo,
        exchanges,
        maxMarketCap,
        minMarketCap,
        projectPartnerships,
        fetchPartnershipsData,
        setProject,
      });

      // generateProjectLinks({ simulation, partnerships });

      categoriesLabels({ ref: svgRef, nodes });

      if (projectPartnerships && projectPartnerships.length && currentProject) {
        const link = generateProjectLinks({
          svg,
          nodes: circles,
          projectPartnerships: [...projectPartnerships, currentProject.data.projectId],
        });

        simulation.on('tick', () => {
          link
            .attr('x1', getCircleCord(currentProject, 'x'))
            .attr('y1', getCircleCord(currentProject, 'y'))
            .attr('x2', d => getCircleCord(d, 'x'))
            .attr('y2', d => getCircleCord(d, 'y'));
        });
        simulation.restart();
      }
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
    projectPartnerships,
    fetchPartnershipsData,
    setProject,
    currentProject,
  ]);

  return (
    <ChartWrapper ref={wrapperRef}>
      <RandomSvg ref={svgRef} />
    </ChartWrapper>
  );
};
