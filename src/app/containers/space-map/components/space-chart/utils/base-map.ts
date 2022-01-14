import { select } from 'd3';

import { BaseMapParams } from '../types';

export const createBaseMap = ({ width = 0, height = 0, ref }: BaseMapParams) => {
  const svg = select(ref.current).attr('viewBox', `0 0 ${width} ${height}`);
  return svg.node();
};
