import { useEffect, useState } from 'react';

import { Spring, animated } from '@react-spring/konva';
import { COLOR_PALLETTE } from 'global/pallette';
import { useSelector } from 'react-redux';

import { selectCategoriesParentPathData } from 'app/containers/space-map/selectors';
import { CategoryPathData } from 'app/containers/space-map/types';

import { GAreaProps } from '../types';
import { capitalizeFirstLetter } from '../utils/helpers';

const calculateYAxis = (prev: number, cur: number) => {
  if (!prev) return cur;
  if (prev < cur) return prev;
  return cur;
}; /** calculate highest YAxis point to place header of category */

export const GHeaders = ({ data, scale = 1 }: GAreaProps) => {
  type blah = {
    x: number;
    y: number;
    r: number;
  };

  const [currentFontSize, setCurrentFontSize] = useState(16);

  const getCords = (elem: CategoryPathData) => {
    if (data) {
      const filteredFields = data?.filter(
        ({ data: { sortingNumber: dataSortingNumbers } }) => dataSortingNumbers === elem.sortingNumber
      );

      const cords = filteredFields?.reduce(
        (acc, item) => {
          acc = {
            x: acc.x + item.data.x,
            y: calculateYAxis(acc.y, item.data.y - item.data.r),
            r: acc.r + item.data.r,
          };
          return acc;
        },
        { x: 0, y: 0, r: 0 } as blah
      );
      return {
        x:
          cords?.x / filteredFields?.length -
          cords.r / filteredFields.length -
          (elem.parent!.length * elem.parent!.length) / 5 / scale,
        y: cords?.y - 40 / scale,
      };
    }
    return null;
  };

  const categoriesHeaders = useSelector(selectCategoriesParentPathData);

  useEffect(() => {
    setCurrentFontSize(currentFontSize / scale || 1);
  }, [scale, currentFontSize]);

  return (
    <>
      {categoriesHeaders?.map(elem => (
        <Spring
          key={`categories-headers-${elem.parent}`}
          from={{ fontSize: currentFontSize, x: 0, y: 0 }}
          to={{
            fontSize: 16 / scale,
            x: getCords(elem)?.x || 0,
            y: getCords(elem)?.y || 0,
          }}>
          {props => (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <animated.Text
              {...props}
              fill={COLOR_PALLETTE.MAIN_WHITE}
              align="left"
              fontFamily="Open Sans , sans-serif"
              text={capitalizeFirstLetter(elem.parent || '')}
            />
          )}
        </Spring>
      ))}
    </>
  );
};
