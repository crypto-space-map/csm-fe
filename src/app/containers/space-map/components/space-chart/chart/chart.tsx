import { memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { HierarchyCircularNode, select } from 'd3';

import { useSpaceMap } from 'app/containers/space-map/hooks';
import { useWindowSize } from 'hooks/use-screen-size';

import { PackedCategories } from '../types';
import { createBaseMap, generateCategoryPacks, categoriesLabels, fundsTooltips } from '../utils';
import { generateFundsLegend } from '../utils/circles-legend';
import { getCircleCoord, getIncludesProjects } from '../utils/helpers';
import { generateProjectLinks } from '../utils/projects-links';
import { generateProjectTooltips } from '../utils/projects-titles';
import { useChart } from '../utils/use-chart';
import { ChartWrapper, RandomSvg } from './styled';

type SpaceChartProps = {
  handleClick: (val: string) => void;
};

export const SpaceChart = memo<SpaceChartProps>(({ handleClick }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const width = wrapperRef.current?.offsetWidth;
  const height = wrapperRef.current?.offsetHeight;

  const [currentProject, setMapCurrentProject] = useState<HierarchyCircularNode<PackedCategories> | null>(
    null
  );

  const windowSize = useWindowSize();

  const {
    fetchSpaceMapData,
    spaceMapData: { tree, maxMarketCap, minMarketCap },
    filters: { mCapFrom, mCapTo, exchanges, currentProject: reducerCurrentProject },
    fetchingMapData: loading,
    loadMapDataError,
    projectPartnerships,
    projectPartnershipsLoading,
    fetchPartnershipsData,
    setCurrentInputProject,
  } = useSpaceMap();

  const setProject = useCallback(
    val => {
      setMapCurrentProject(val);
      setCurrentInputProject(val.data?.projectId);
      handleClick(val.data?.projectId);
    },
    [setCurrentInputProject, handleClick]
  );

  const { packedCategories, simulation } = useChart({ width, height, tree, maxMarketCap });

  useEffect(() => {
    if (!tree && !loading && !loadMapDataError) {
      fetchSpaceMapData();
    }
  }, [fetchSpaceMapData, tree, loading, loadMapDataError]);

  useLayoutEffect(() => {
    const IS_RENDER_PROPS_AVAILABLE = width && height && maxMarketCap && minMarketCap && simulation;

    if (IS_RENDER_PROPS_AVAILABLE) {
      const nodes = simulation.nodes();

      const map = createBaseMap({ ref: svgRef });
      const svg = select(map.node());

      const fundsTooltip = fundsTooltips({ ref: wrapperRef, nodes });

      generateFundsLegend({ ref: svgRef, width });

      const targetPartnerships =
        ((projectPartnerships.length || currentProject) && [
          ...projectPartnerships,
          currentProject?.data.projectId || '',
        ]) ||
        [];

      const circles = generateCategoryPacks({
        svg,
        nodes,
        fundsTooltip,
        mCapFrom,
        mCapTo,
        exchanges,
        maxMarketCap,
        minMarketCap,
        projectPartnerships: targetPartnerships,
        fetchPartnershipsData,
        setProject,
      });

      categoriesLabels({ svg, nodes });

      if (reducerCurrentProject !== currentProject?.data.projectId) {
        const foundedProject = circles.find(item => item.data.projectId === reducerCurrentProject) || null;
        setMapCurrentProject(foundedProject);
        handleClick(foundedProject?.data.projectId || '');
      }

      const isLinksDataPresence =
        projectPartnerships && projectPartnerships.length && currentProject && !projectPartnershipsLoading;

      if (isLinksDataPresence) {
        const foundedProjects = getIncludesProjects(circles, [...new Set(projectPartnerships)]);

        const link = generateProjectLinks({
          svg,
          foundedProjects,
        });

        const tooltip = generateProjectTooltips({ svg, foundedProjects });

        simulation.on('tick', () => {
          link
            .attr('x1', getCircleCoord(currentProject, 'x'))
            .attr('y1', getCircleCoord(currentProject, 'y'))
            .attr('x2', d => getCircleCoord(d, 'x'))
            .attr('y2', d => getCircleCoord(d, 'y'));

          link.exit().remove();

          tooltip
            .attr('x', d => getCircleCoord(d, 'x'))
            .attr('y', d => getCircleCoord(d, 'y'))
            .html(item => `<span>${item.data?.name || ''}</span>`)
            .style('font-size', 3);
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
    windowSize,
    reducerCurrentProject,
    handleClick,
  ]);

  return (
    <ChartWrapper ref={wrapperRef}>
      <RandomSvg ref={svgRef} />
    </ChartWrapper>
  );
});
