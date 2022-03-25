import { Fragment } from 'react';

import { useSelector } from 'react-redux';

import { selectCategoriesParentPathData } from 'app/containers/space-map/selectors';

import { GAreaProps } from '../types';

const MARKER = 'CATEGORIES_HEADERS';

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

  const getCords = (sortingNumber: number) => {
    if (data) {
      const filteredFields = data?.filter(
        ({ data: { sortingNumber: dataSortingNumbers } }) => dataSortingNumbers === sortingNumber
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
        x: cords?.x / filteredFields?.length - cords.r / filteredFields.length,
        y: cords?.y - 30,
      };
    }
    return null;
  };

  const categoriesHeaders = useSelector(selectCategoriesParentPathData);
  return (
    <g>
      {categoriesHeaders?.map(item => (
        <Fragment key={`scaled-categories${item.sortingNumber}`}>
          <line
            x1={0}
            y1={0}
            x2={getCords(item.sortingNumber)?.x || 0}
            y2={getCords(item.sortingNumber)?.y || 0}
            strokeWidth={1}
            strokeDasharray="1 1"
            fill="none"
            vectorEffect="non-scaling-stroke"
            markerEnd={`url(#${MARKER}${item.sortingNumber})`}
          />
          <marker
            refY={0}
            refX={(item.parent?.length || 1) * 5}
            key={`marker-category-point${item.sortingNumber}`}
            id={`${MARKER}${item.sortingNumber}`}
            viewBox="0 0 250 10"
            markerUnits="strokeWidth"
            markerWidth="200"
            markerHeight="100">
            <path fill="#eae0d7" transform="scale(0.3)" strokeWidth={1} d={item.parentPathData} />
          </marker>
        </Fragment>
      ))}
    </g>
  );
};
