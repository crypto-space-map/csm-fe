import { memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { HierarchyCircularNode, select } from 'd3';

import { useSpaceMap } from 'app/containers/space-map/hooks';

import { PackedCategories } from '../types';
import { createBaseMap, generateCategoryPacks, categoriesLabels, fundsTooltips } from '../utils';
import { generateFundsLegend } from '../utils/circles-legend';
import { getCircleCord } from '../utils/helpers';
import { generateProjectLinks } from '../utils/projects-links';
import { useChart } from '../utils/use-chart';
import { ChartWrapper, RandomSvg } from './styled';

export const SpaceChart = memo(() => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const width = wrapperRef.current?.offsetWidth;
  const height = wrapperRef.current?.offsetHeight;

  const [currentProject, setCurrentProject] = useState<HierarchyCircularNode<PackedCategories> | null>(null);

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
    projectPartnershipsLoading,
  } = useSpaceMap();

  const { packedCategories, simulation } = useChart({ width, height, tree, maxMarketCap });

  useEffect(() => {
    if (!tree && !loading && !loadMapDataError) {
      fetchSpaceMapData();
    }
  }, [fetchSpaceMapData, tree, loading, loadMapDataError]);

  useLayoutEffect(() => {
    const IS_RENDER_PROPS_AVAILABLE = width && height && maxMarketCap && minMarketCap && simulation;

    if (IS_RENDER_PROPS_AVAILABLE) {
      const map = createBaseMap({ width, height, ref: svgRef });
      const svg = select(map);
      const wrapper = select(wrapperRef.current);

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
        projectPartnerships:
          (projectPartnerships && [...projectPartnerships, currentProject?.data.projectId || '']) || null,
        fetchPartnershipsData,
        setProject,
      });

      categoriesLabels({ ref: svgRef, nodes });

      if (
        projectPartnerships &&
        projectPartnerships.length &&
        currentProject &&
        !projectPartnershipsLoading
      ) {
        const link = generateProjectLinks({
          svg,
          nodes: circles,
          projectPartnerships,
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
    maxMarketCap,
    minMarketCap,
    mCapFrom,
    mCapTo,
    exchanges,
    projectPartnerships,
    fetchPartnershipsData,
    setProject,
    currentProject,
    projectPartnershipsLoading,
    packedCategories,
    width,
    height,
    simulation,
  ]);

  return (
    <ChartWrapper ref={wrapperRef}>
      <RandomSvg ref={svgRef} />
    </ChartWrapper>
  );
});
