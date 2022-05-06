import { memo, useCallback, useRef } from 'react';

import { Spring, animated } from '@react-spring/konva';
import { HierarchyCircularNode } from 'd3';
import { Circle as CircleShape } from 'konva/lib/shapes/Circle';

import { GAreaProps, PackedCategories } from '../types';
import { getSphereColorParams } from '../utils/colors';
import { getCordsPos, randomNumber } from '../utils/helpers';
import { useCircleOpacity } from '../utils/use-circle-opacity';
import { CircleText } from './circle-text';

type SphereProps = Omit<GAreaProps, 'data'> & {
  elem: HierarchyCircularNode<PackedCategories>;
  isTransparent: boolean;
};

const Sphere = memo<SphereProps>(
  ({
    elem,
    currentProject,
    handleSelectFund = () => false,
    setCurrentProject = () => false,
    isTransparent,
    ...props
  }) => {
    const circleRef = useRef<CircleShape>(null);
    const isClickableProject = !!elem.data.projectId;
    const handleClick = useCallback(() => {
      if (isClickableProject) {
        if (currentProject?.data.projectId === elem.data.projectId) return handleSelectFund('');
        return setCurrentProject(elem);
      }
      return null;
    }, [currentProject?.data.projectId, elem, handleSelectFund, isClickableProject, setCurrentProject]);

    const onMouseEnter = () => {
      const stage = circleRef.current?.getStage();
      if (stage && isClickableProject) {
        stage.container().style.cursor = 'pointer';
      }
    };

    const onMouseLeave = () => {
      const stage = circleRef.current?.getStage();
      if (stage) {
        stage.container().style.cursor = 'default';
      }
    };
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <animated.Circle
        {...props}
        {...getSphereColorParams(elem, isTransparent)}
        ref={circleRef}
        key={`project-circle${elem.data.projectId}`}
        radius={elem.r || 0.1}
        onClick={handleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        strokeScaleEnabled={false}
        dash={[10, 10]}
      />
    );
  },
  ({ isTransparent: prevIsTransparent }, { isTransparent: curIsTransparent }) =>
    prevIsTransparent === curIsTransparent
);

export const AnimatedSphere = memo<Omit<SphereProps, 'isTransparent'>>(({ elem, scale = 1, ...rest }) => {
  const isTransparent = useCircleOpacity(elem.data);
  return (
    <Spring
      key={`categories-headers-${elem.parent}`}
      from={{ x: randomNumber(0, 1500), y: randomNumber(0, 1500) }}
      to={{
        x: getCordsPos(elem, 'x'),
        y: getCordsPos(elem, 'y'),
      }}>
      {props => (
        <>
          <Sphere {...rest} {...props} elem={elem} isTransparent={isTransparent} />
          <CircleText {...rest} {...props} elem={elem} isSelected scale={scale} />
        </>
      )}
    </Spring>
  );
});
