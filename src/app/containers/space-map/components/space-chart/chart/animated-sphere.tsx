import { memo, useCallback, useMemo, useRef } from 'react';

import { Spring, animated } from '@react-spring/konva';
import { useSprings } from '@react-spring/web';
import { HierarchyCircularNode } from 'd3';
import { Circle as CircleShape } from 'konva/lib/shapes/Circle';

import { GAreaProps, PackedCategories } from '../types';
import { getSphereColorParams } from '../utils/colors';
import { getCordsPos, randomNumber } from '../utils/helpers';
import { useCircleOpacity } from '../utils/use-circle-opacity';
import { CircleText } from './circle-text';

type SphereProps = Omit<GAreaProps, 'data'> & {
  elem: HierarchyCircularNode<PackedCategories>;
  isTransparent?: boolean;
  handleClick?: () => void;
};

const Sphere = memo<SphereProps>(({ elem, isTransparent = false, handleClick, ...props }) => {
  const { projectWeight, projectId } = elem.data;
  const { children, r } = elem;

  const circleRef = useRef<CircleShape>(null);
  const isClickableProject = !!projectId;

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
  console.log('Sphere render');
  // const { isHidden: isTransparent } = useCircleOpacity({ projectId, projectWeight, marketCap, exchanges });

  const sphereColorParams = useMemo(
    () => getSphereColorParams({ children, projectWeight, isTransparent }),
    [children, projectWeight, isTransparent]
  );

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <animated.Circle
      {...props}
      {...sphereColorParams}
      ref={circleRef}
      key={`project-circle${projectId}`}
      radius={r || 0.1}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      strokeScaleEnabled={false}
      dash={[10, 10]}
    />
  );
});

export const AnimatedSphere = memo<SphereProps>(
  ({ elem, scale = 1, onProjectClick = () => false, ...rest }) => {
    const isClickableProject = !!elem.data.projectId;

    const handleClick = useCallback(() => {
      if (isClickableProject) {
        onProjectClick(elem);
      }
      return null;
    }, [elem, isClickableProject, onProjectClick]);

    const from = useMemo(() => ({ x: randomNumber(0, 1500), y: randomNumber(0, 1500) }), []);
    const to = useMemo(
      () => ({
        x: getCordsPos(elem, 'x'),
        y: getCordsPos(elem, 'y'),
      }),
      [elem]
    );
    return (
      <Spring key={`categories-headers-${elem.parent || elem.data.key}`} from={from} to={to}>
        {props => (
          <>
            <Sphere {...rest} {...props} elem={elem} handleClick={handleClick} />
            <CircleText
              {...rest}
              {...props}
              elem={elem}
              isSelected
              scale={scale}
              handleClick={handleClick}
            />
          </>
        )}
      </Spring>
    );
  }
);
