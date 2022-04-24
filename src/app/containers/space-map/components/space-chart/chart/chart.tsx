import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { HierarchyCircularNode } from 'd3';
import { Circle, Group, Layer, Stage, Star } from 'react-konva';
import { useSelector } from 'react-redux';

import { selectAuth } from 'app/containers/login/selectors';
import { useSpaceMap } from 'app/containers/space-map/hooks';
import { useWindowSize } from 'hooks/use-screen-size';

import { PackedCategories } from '../types';
import { getAllProjects, getIncludesProjects } from '../utils/helpers';
import { useChart } from '../utils/use-chart';
import { initZoomedElement } from '../utils/zoom';
import { GCircles } from './g-circles';
import { GHeaders } from './g-headers';
import { GLabels } from './g-labels';
import { GLinks } from './g-links';
import { GPartnersLegend } from './g-partners-legend';
import { GTooltips } from './g-tooltips';
import { ChartWrapper, ProjectTooltip, RandomSvg } from './styled';

const NEEDLES_CATEGORIES = ['619b3ca2064df399fced84b1'];

type SpaceChartProps = {
  handleSelectProduct: (val: string) => void;
};

export const SpaceChart = memo<SpaceChartProps>(({ handleSelectProduct }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const isAuth = useSelector(selectAuth);

  const width = wrapperRef.current?.offsetWidth || 0;
  const height = wrapperRef.current?.offsetHeight || 0;

  const [currentProject, setMapCurrentProject] = useState<HierarchyCircularNode<PackedCategories> | null>(
    null
  );

  const windowSize = useWindowSize();

  const {
    fetchSpaceMapData,
    spaceMapData: { tree, maxMarketCap, minMarketCap },
    selectedProject,
    projectPartnerships,
    fetchPartnershipsData,
  } = useSpaceMap();

  const setProject = useCallback(
    val => {
      setMapCurrentProject(val);
      handleSelectProduct(val.data?.projectId);
      fetchPartnershipsData(val.data?.projectId);
    },
    [handleSelectProduct, fetchPartnershipsData]
  );

  const { simulation, simulatedCircles } = useChart({ width, height, tree, maxMarketCap, minMarketCap });

  const allProjects = useMemo(() => getAllProjects(simulatedCircles || []), [simulatedCircles]);

  const foundProjects = getIncludesProjects(allProjects, [...new Set(projectPartnerships)]);

  useEffect(() => {
    if (isAuth) {
      fetchSpaceMapData({
        withoutCategories: NEEDLES_CATEGORIES.join(','),
      });
    }
  }, [fetchSpaceMapData, isAuth]);

  useEffect(() => {
    if (!selectedProject) {
      setMapCurrentProject(null);
    }
    if (selectedProject !== currentProject?.data.projectId) {
      const target = allProjects.find(({ data: { projectId } }) => projectId === selectedProject) || null;
      if (target) {
        setProject(target);
      }
    }
  }, [allProjects, currentProject?.data.projectId, selectedProject, setProject]);

  useEffect(() => {
    simulation?.tick();
  }, [simulation, windowSize]);
  console.log(simulatedCircles);

  // initZoomedElement(svgRef, width, height);
  if (!simulatedCircles?.length) return null;
  return (
    <Stage width={width} height={height}>
      <Layer>
        <GCircles
          selectedProjects={foundProjects}
          data={simulatedCircles}
          setCurrentProject={setProject}
          tooltipRef={tooltipRef}
          currentProject={currentProject}
        />
      </Layer>
    </Stage>
  );
});
