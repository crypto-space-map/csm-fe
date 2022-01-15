import { select, zoom } from 'd3';

import { BaseMapParams } from '../types';

export const createBaseMap = ({ width = 0, height = 0, ref }: BaseMapParams) => {
  const svg = select(ref.current as Element)
    // .attr('viewBox', `0 0 ${width} ${height}`)
    .call(
      zoom()
        .scaleExtent([0.8, 32])
        .on('zoom', event => {
          console.log(event);
          svg.attr('transform', event.transform);
        })
    )
    .append('g');

  svg.merge(svg);

  svg.exit().remove();

  return svg.node();
};
