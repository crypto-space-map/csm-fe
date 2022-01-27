import { memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { HierarchyCircularNode } from 'd3';

import { useSpaceMap } from 'app/containers/space-map/hooks';
import { useWindowSize } from 'hooks/use-screen-size';

import { PackedCategories } from '../types';
import { fundsTooltips } from '../utils';
import { generateFundsLegend } from '../utils/circles-legend';
import { getCircleCoord, getIncludesProjects } from '../utils/helpers';
import { generateProjectLinks } from '../utils/projects-links';
import { generateProjectTooltips } from '../utils/projects-titles';
import { useChart } from '../utils/use-chart';
import { initZoomedElement } from '../utils/zoom';
import { GCircles } from './g-circles';
import { GLabels } from './g-labels';
import { GLinks } from './g-links';
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
    filters: { mCapFrom, mCapTo, exchanges },
    fetchingMapData: loading,
    loadMapDataError,
    projectPartnerships,
    projectPartnershipsLoading,
    fetchPartnershipsData,
    setProjectName,
    selectedProject,
  } = useSpaceMap();

  const setProject = useCallback(
    val => {
      setMapCurrentProject(val);
      setProjectName(val.data?.projectId);
      handleClick(val.data?.projectId);
    },
    [setProjectName, handleClick]
  );

  const { packedCategories, simulation, simulatedCircles } = useChart({ width, height, tree, maxMarketCap });

  useEffect(() => {
    fetchSpaceMapData();
  }, [fetchSpaceMapData]);

  useEffect(() => {
    if (!selectedProject) {
      setMapCurrentProject(null);
    }
  }, [selectedProject]);

  initZoomedElement(svgRef);

  useEffect(() => {
    simulation?.restart();
  }, [simulation, windowSize]);

  const handleChange = (value: typeof currentProject) => setMapCurrentProject(value);

  console.log({ currentProject });

  return (
    <ChartWrapper ref={wrapperRef}>
      <RandomSvg ref={svgRef}>
        <g>
          {currentProject && (
            <GLinks nodes={simulatedCircles} simulation={simulation} currentProject={currentProject} />
          )}
          <GCircles nodes={simulatedCircles} setCurrentProject={handleChange} />
          <GLabels nodes={simulatedCircles} />
        </g>
      </RandomSvg>
    </ChartWrapper>
  );
});
