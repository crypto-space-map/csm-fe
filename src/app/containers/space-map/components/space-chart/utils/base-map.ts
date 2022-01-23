import { select, zoom, D3ZoomEvent } from 'd3';

import { BaseMapParams, PackedCategories } from '../types';

/** [max out zoom , max in zoom] */
const ZOOM_RANGE: [number, number] = [0.8, 10];

export const createBaseMap = ({ ref }: BaseMapParams) => {
  const svg = select(ref.current as Element)
    .selectAll('g')
    .data([{} as PackedCategories]);

  svg.enter().append('g');

  svg.merge(svg);

  const handleZoom = (e: D3ZoomEvent<SVGGElement, unknown>) => {
    /** TODO add correct type for event */
    select(ref.current).select('g').attr('transform', e.transform);
  };
  const initZoom = () =>
    select(ref.current as Element).call(zoom().scaleExtent(ZOOM_RANGE).on('zoom', handleZoom));

  initZoom();

  svg.exit().remove();

  return svg;
};
