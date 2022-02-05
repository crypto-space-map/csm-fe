import { RefObject } from 'react';

import { D3ZoomEvent, select, zoom } from 'd3';

const ZOOM_RANGE: [number, number] = [0.8, 10];

export const initZoomedElement = <T extends Element>(ref: RefObject<T>) => {
  const handleZoom = (e: D3ZoomEvent<SVGGElement, unknown>) => {
    /** TODO add correct type for event */
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    select(ref.current).select('g').attr('transform', e.transform);
  };
  const initZoom = () => select(ref.current as Element).call(zoom().on('zoom', handleZoom));

  initZoom();
};