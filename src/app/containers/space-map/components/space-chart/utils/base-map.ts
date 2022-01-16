import { select, zoom, Selection, D3ZoomEvent } from 'd3';

import { BaseMapParams, PackedCategories } from '../types';

export const createBaseMap = ({ ref }: BaseMapParams) => {
  const update = select(ref.current as Element)
    .selectAll('g')
    .data([{} as PackedCategories]);

  update
    .enter()
    .append('g')
    .merge(update as unknown as Selection<SVGGElement, PackedCategories, Element, unknown>);

  const handleZoom = (e: D3ZoomEvent<HTMLCanvasElement, unknown>) =>
    /** TODO add correct type for event */
    select(ref.current).select('g').attr('transform', e.transform);

  const initZoom = () =>
    select(ref.current as Element).call(zoom().scaleExtent([0.8, 10]).on('zoom', handleZoom));

  initZoom();

  update.exit().remove();

  return update;
};
