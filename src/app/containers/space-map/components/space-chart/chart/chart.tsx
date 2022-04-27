import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { HierarchyCircularNode } from 'd3';
import { Layer } from 'react-konva';
import { ReactReduxContext, Provider, useSelector } from 'react-redux';

import { selectAuth } from 'app/containers/login/selectors';
import { useSpaceMap } from 'app/containers/space-map/hooks';
import { useWindowSize } from 'hooks/use-screen-size';
import { useSetNewProject } from 'hooks/use-set-new-project';

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
import { MapStage } from './map-stage';
import { ChartWrapper, ProjectTooltip, RandomSvg } from './styled';

const NEEDLES_CATEGORIES = ['619b3ca2064df399fced84b1'];

type SpaceChartProps = {
  handleSelectProduct: (val: string) => void;
};

export const SpaceChart = memo<SpaceChartProps>(({ handleSelectProduct }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);

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

  const { handleSelectFund } = useSetNewProject();

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

  // initZoomedElement(wrapperRef, width, height);
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <ChartWrapper ref={wrapperRef}>
          <MapStage width={width} height={height}>
            <Provider store={store}>
              <Layer>
                {currentProject && <GLinks data={foundProjects} currentProject={currentProject} />}
                <GCircles
                  selectedProjects={foundProjects}
                  data={simulatedCircles}
                  setCurrentProject={setProject}
                  tooltipRef={tooltipRef}
                  currentProject={currentProject}
                  handleSelectFund={handleSelectFund}
                />
                <GHeaders data={simulatedCircles} />
              </Layer>
            </Provider>
          </MapStage>
        </ChartWrapper>
      )}
    </ReactReduxContext.Consumer>
  );
});
