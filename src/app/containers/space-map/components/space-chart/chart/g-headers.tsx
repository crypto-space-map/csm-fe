import { Fragment, useCallback } from 'react';

import { useSelector } from 'react-redux';

import { selectCategoriesParentPathData } from 'app/containers/space-map/selectors';

import { GAreaProps } from '../types';
import { getCategoriesCords } from '../utils/categories-cords';

type GHeadersProps = GAreaProps & {
  width: number;
  height: number;
};

const MARKER = 'CATEGORIES_HEADERS';

export const GHeaders = ({ width, height, data }: GHeadersProps) => {
  const getCirclesLength = useCallback(
    (sortingNumber: number) => data?.filter(item => item.data.sortingNumber === sortingNumber).length || 0,
    [data]
  );

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
          const y = () => {
            if (!acc.y) return item.data.y;
            if (acc.y > item.data.y) return item.data.y;
            return acc.y;
          };
          acc = {
            x: acc.x + item.data.x,
            y: y(),
            r: acc.r + item.data.r,
          };
          return acc;
        },
        { x: 0, y: 0, r: 0 } as blah
      );
      return {
        x: cords?.x / filteredFields?.length - cords.r / filteredFields.length - 30,
        y: cords?.y - 50,
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
            refX={0}
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
