import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { HierarchyCircularNode } from 'd3';
import { Layer } from 'react-konva';
import { ReactReduxContext, Provider, useSelector } from 'react-redux';

import { selectAuth } from 'app/containers/login/selectors';
import { useSpaceMap } from 'app/containers/space-map/hooks';
import { selectMapTree, selectPartnerships } from 'app/containers/space-map/selectors';
import { useSetNewProject } from 'hooks/use-set-new-project';
import { selectedProjectName } from 'store/pageStore/selectors';

import { PackedCategories } from '../types';
import { getAllProjects, getIncludesProjects } from '../utils/helpers';
import { useChart } from '../utils/use-chart';
import { GCircles } from './g-circles';
import { GHeaders } from './g-headers';
import { GLabels } from './g-labels';
import { GLinks } from './g-links';
import { ProjectWeightFilter } from './g-partners-legend';
import { MapStage } from './map-stage';
import { ChartWrapper } from './styled';

const NEEDLES_CATEGORIES = ['619b3ca2064df399fced84b1'];

type SpaceChartProps = {
  handleSelectProduct?: (val: string) => void;
};

export const SpaceChart = memo<SpaceChartProps>(() => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [scale, setsScale] = useState(0);

  const isAuth = useSelector(selectAuth);

  const width = wrapperRef.current?.offsetWidth || 0;
  const height = wrapperRef.current?.offsetHeight || 0;

  const [currentProject, setMapCurrentProject] = useState<HierarchyCircularNode<PackedCategories> | null>(
    null
  );

  const { fetchSpaceMapData, fetchPartnershipsData } = useSpaceMap();
  const { maxMarketCap, minMarketCap, tree } = useSelector(selectMapTree);

  const { projectPartnerships: reducerPartnerShips = [] } = useSelector(selectPartnerships);
  const selectedProject = useSelector(selectedProjectName);

  const projectPartnerships = useMemo(
    () => (selectedProject ? [...reducerPartnerShips, selectedProject] : []),
    [reducerPartnerShips, selectedProject]
  );

  const { handleSelectProduct, handleSelectFund } = useSetNewProject();

  const handleSetScale = (val: number) => setsScale(val);

  const setProject = useCallback(
    val => {
      setMapCurrentProject(val);
      handleSelectProduct(val.data?.projectId);
      fetchPartnershipsData(val.data?.projectId);
    },
    [handleSelectProduct, fetchPartnershipsData]
  );

  const { simulatedCircles } = useChart({ width, height, tree, maxMarketCap, minMarketCap });

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
    // debugger;
    if (!selectedProject) {
      setMapCurrentProject(null);
    }
    if (selectedProject !== currentProject?.data.projectId) {
      const target = allProjects.find(({ data: { projectId } }) => projectId === selectedProject) || null;
      if (target) {
        setProject(target);
      }
    }
  }, [allProjects, currentProject?.data.projectId, selectedProject, setProject, setMapCurrentProject]);

  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <ChartWrapper ref={wrapperRef}>
          <ProjectWeightFilter />
          <MapStage width={width} height={height} handleSetScale={handleSetScale}>
            <Provider store={store}>
              <Layer alpha={false}>
                {currentProject && <GLinks data={foundProjects} currentProject={currentProject} />}
                <GCircles
                  selectedProjects={foundProjects}
                  data={simulatedCircles}
                  setCurrentProject={setProject}
                  currentProject={currentProject}
                  handleSelectFund={handleSelectFund}
                  scale={scale}
                />
                <GHeaders data={simulatedCircles} scale={scale} />
                <GLabels data={simulatedCircles} scale={scale} />
              </Layer>
            </Provider>
          </MapStage>
        </ChartWrapper>
      )}
    </ReactReduxContext.Consumer>
  );
});
