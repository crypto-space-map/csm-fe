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

  //   TODO find circle with highest cord and get value

  const categoriesHeaders = useSelector(selectCategoriesParentPathData);
  return (
    <g>
      {categoriesHeaders?.map(item => (
        <Fragment key={`scaled-categories${item.sortingNumber}`}>
          <line
            x1={0}
            y1={0}
            x2={getCategoriesCords(item.sortingNumber, width, height).x}
            y2={getCategoriesCords(item.sortingNumber, width, height).y}
            strokeWidth={1}
            strokeDasharray="1 1"
            fill="none"
            vectorEffect="non-scaling-stroke"
            markerEnd={`url(#${MARKER}${item.sortingNumber})`}
          />
          <marker
            refY={getCirclesLength(item.sortingNumber) * 12}
            refX={70}
            key={`marker-category-point${item.sortingNumber}`}
            id={`${MARKER}${item.sortingNumber}`}
            viewBox="0 0 200 10"
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
