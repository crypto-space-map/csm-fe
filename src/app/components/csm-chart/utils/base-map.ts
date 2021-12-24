import { select } from 'd3';

import { BaseMapParams } from '../types';

export const createBaseMap = ({ width = 1000, height = 500, ref }: BaseMapParams) => {
  const svg = select(ref.current).attr('viewBox', `0 0 ${width} ${height}`);

  return svg.node();
};
