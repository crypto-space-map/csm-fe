import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { HierarchyCircularNode } from 'd3';

import { useSpaceMap } from 'app/containers/space-map/hooks';
import { useWindowSize } from 'hooks/use-screen-size';

import { PackedCategories } from '../types';
import { getAllProjects, getIncludesProjects } from '../utils/helpers';
import { useChart } from '../utils/use-chart';
import { initZoomedElement } from '../utils/zoom';
import { GCircles } from './g-circles';
import { GLabels } from './g-labels';
import { GLinks } from './g-links';
import { GPartnersLegend } from './g-partners-legend';
import { ChartWrapper, RandomSvg } from './styled';

type SpaceChartProps = {
  handleClick: (val: string) => void;
};

export const SpaceChart = memo<SpaceChartProps>(({ handleClick }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const width = wrapperRef.current?.offsetWidth || 0;
  const height = wrapperRef.current?.offsetHeight || 0;

  const [currentProject, setMapCurrentProject] = useState<HierarchyCircularNode<PackedCategories> | null>(
    null
  );

  const windowSize = useWindowSize();

  const {
    fetchSpaceMapData,
    spaceMapData: { tree, maxMarketCap },
    setProjectName,
    selectedProject,
    projectPartnerships,
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

  const allProjects = useMemo(() => getAllProjects(simulatedCircles || []), [simulatedCircles]);

  const foundedProjects = getIncludesProjects(allProjects, [...new Set(projectPartnerships)]);

  useEffect(() => {
    fetchSpaceMapData();
  }, [fetchSpaceMapData]);

  useEffect(() => {
    if (!selectedProject) {
      setMapCurrentProject(null);
    }
    if (selectedProject !== currentProject?.data.projectId) {
      const target = allProjects.find(({ data: { projectId } }) => projectId === selectedProject);
      setMapCurrentProject(target || null);
    }
  }, [allProjects, currentProject?.data.projectId, selectedProject]);

  useEffect(() => {
    simulation?.restart();
  }, [simulation, windowSize]);

  initZoomedElement(svgRef);

  return (
    <ChartWrapper ref={wrapperRef}>
      <RandomSvg ref={svgRef}>
        <g>
          {currentProject && <GLinks data={foundedProjects} currentProject={currentProject} />}
          <GCircles data={simulatedCircles} setCurrentProject={setProject} />
          <GLabels data={simulatedCircles} />
        </g>
        <GPartnersLegend width={width} />
      </RandomSvg>
    </ChartWrapper>
  );
});
