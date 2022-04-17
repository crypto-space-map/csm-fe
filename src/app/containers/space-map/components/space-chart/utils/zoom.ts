import { RefObject } from 'react';

import { D3ZoomEvent, select, zoom } from 'd3';

const ZOOM_RANGE: [number, number] = [0.5, 50];

export const initZoomedElement = <T extends Element>(ref: RefObject<T>, width: number, height: number) => {
  if (ref.current) {
    const handleZoom = (e: D3ZoomEvent<SVGGElement, unknown>) => {
      /** TODO add correct type for event */
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      select(ref.current).select('g').attr('transform', e.transform);
    };
    const initZoom = () =>
      select(ref.current as Element).call(
        zoom()
          .scaleExtent(ZOOM_RANGE)
          .translateExtent([
            [-width, -height],
            [width * 2, height * 2],
          ])
          .on('zoom', handleZoom)
      );

    initZoom();
  }
};
