import { memo, useCallback, useEffect, useRef, useState } from 'react';

import { HierarchyCircularNode } from 'd3';

import { useSpaceMap } from 'app/containers/space-map/hooks';
import { useWindowSize } from 'hooks/use-screen-size';

import { PackedCategories } from '../types';
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
    spaceMapData: { tree, maxMarketCap },
    setProjectName,
    selectedProject,
    fetchPartnershipsData,
  } = useSpaceMap();

  const setProject = useCallback(
    val => {
      setMapCurrentProject(val);
      setProjectName(val.data?.projectId);
      handleClick(val.data?.projectId);
      fetchPartnershipsData(val.data?.projectId);
    },
    [setProjectName, handleClick, fetchPartnershipsData]
  );

  const { simulation, simulatedCircles } = useChart({ width, height, tree, maxMarketCap });

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

  // console.log(currentProject);

  return (
    <ChartWrapper ref={wrapperRef}>
      <RandomSvg ref={svgRef}>
        <g>
          {currentProject && <GLinks data={simulatedCircles} currentProject={currentProject} />}
          <GCircles data={simulatedCircles} setCurrentProject={setProject} />
          <GLabels data={simulatedCircles} />
        </g>
      </RandomSvg>
    </ChartWrapper>
  );
});
