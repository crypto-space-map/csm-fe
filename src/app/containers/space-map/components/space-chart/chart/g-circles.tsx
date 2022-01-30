import { Fragment, memo, useCallback, MouseEvent } from 'react';

import { HierarchyCircularNode, scaleLinear } from 'd3';

import { useSpaceMap } from 'app/containers/space-map/hooks';

import { GAreaProps, PackedCategories } from '../types';
import { getSphereColorParams } from '../utils/colors';

const scaled = scaleLinear();

type CircleProps = Omit<GAreaProps, 'data'> & {
  elem: HierarchyCircularNode<PackedCategories>;
};

const Circle = memo<CircleProps>(({ elem, setCurrentProject = () => false }) => {
  const handleClick = () => setCurrentProject(elem);
  const handleMouseOver = (event: MouseEvent) => false;

  const {
    spaceMapData: { maxMarketCap, minMarketCap },
    filters: { mCapFrom, mCapTo, exchanges },
    projectPartnerships,
  } = useSpaceMap();

  // TODO надо подумать куда это дело вынести
  const isTransparent = useCallback(
    ({ marketCap, projectId, exchanges: itemExchangesArr }: PackedCategories) => {
      let opacity = false;
      const lessCapFrom = mCapFrom || minMarketCap || 0;
      const moreCapTo = mCapTo || maxMarketCap || 0;
      if (mCapTo || mCapFrom) {
        if (marketCap < lessCapFrom || marketCap > moreCapTo) {
          opacity = true;
        }
      }
      const isIncludes = itemExchangesArr?.some(item => exchanges.includes(item));
      const isLinked = projectId && projectPartnerships?.includes(projectId);
      if (!isIncludes) opacity = true;
      if (isIncludes && projectPartnerships.length && !isLinked) opacity = true;
      return opacity;
    },
    [exchanges, mCapFrom, mCapTo, maxMarketCap, minMarketCap, projectPartnerships]
  );

  return (
    <circle
      key={elem.data.key || elem.data.projectId}
      r={elem.r}
      cx={scaled(elem.x)}
      cy={scaled(elem.y)}
      onClick={handleClick}
      onMouseMove={handleMouseOver}
      {...getSphereColorParams(elem, isTransparent(elem.data))}
    />
  );
});

const Circles = memo<GAreaProps>(({ data, setCurrentProject = () => false }) => (
  <>
    {data?.map(elem => (
      <Fragment key={`${elem.data.projectId}${elem.x}${elem.y}`}>
        <Circle elem={elem} setCurrentProject={setCurrentProject} />
        <Circles data={elem.children} setCurrentProject={setCurrentProject} />
      </Fragment>
    ))}
  </>
));

export const GCircles = memo(({ data, setCurrentProject = () => false }: GAreaProps) => {
  if (!data) return null;

  return (
    <g className="circles-map">
      {data.map(item => (
        <g
          transform={`translate(${item.data.x - item.r}, ${item.data.y - item.r})`}
          key={`${item.x}${item.y}${item.data.projectId}`}>
          <Circle elem={item} setCurrentProject={setCurrentProject} />
          <Circles data={item.children} setCurrentProject={setCurrentProject} />
        </g>
      ))}
    </g>
  );
});
