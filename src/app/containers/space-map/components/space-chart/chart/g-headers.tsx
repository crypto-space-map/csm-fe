import { COLOR_PALLETTE } from 'global/pallette';
import { Text } from 'react-konva';
import { useSelector } from 'react-redux';

import { selectCategoriesParentPathData } from 'app/containers/space-map/selectors';
import { CategoryPathData } from 'app/containers/space-map/types';

import { GAreaProps } from '../types';

const calculateYAxis = (prev: number, cur: number) => {
  if (!prev) return cur;
  if (prev < cur) return prev;
  return cur;
}; /** calculate highest YAxis point to place header of category */

export const GHeaders = ({ data }: GAreaProps) => {
  type blah = {
    x: number;
    y: number;
    r: number;
  };

  const capitalizeFirstLetter = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

  const xAxisOffset = (val: number) => (val > 10 ? val : 1);

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
          (elem.parent!.length * elem.parent!.length) / 5,
        y: cords?.y - 30,
      };
    }
    return null;
  };

  const categoriesHeaders = useSelector(selectCategoriesParentPathData);
  return (
    <>
      {categoriesHeaders?.map(elem => (
        <Text
          key={`categories-headers-${elem.parent}`}
          x={getCords(elem)?.x}
          y={getCords(elem)?.y}
          fill={COLOR_PALLETTE.MAIN_WHITE}
          fontSize={16}
          align="left"
          fontFamily="Open Sans , sans-serif"
          text={capitalizeFirstLetter(elem.parent || '')}
        />
      ))}
    </>
  );
};
