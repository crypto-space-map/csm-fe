import { RefObject } from 'react';

import { select, Selection } from 'd3';

import { PackedCategories } from '../types';

const TOOLTIP = 'tooltip';

type FundsTooltipProps = {
  ref: RefObject<HTMLDivElement>;
  nodes: PackedCategories[];
};

export const fundsTooltips = ({ ref }: FundsTooltipProps) => {
  /** Root div */

  const tooltipArea = select(ref.current).selectAll('div').data(['']);

  tooltipArea
    .enter()
    .append('div')
    .merge(tooltipArea as unknown as Selection<HTMLDivElement, string, HTMLDivElement | null, unknown>)
    .attr('class', TOOLTIP);

  tooltipArea.exit().remove();

  return tooltipArea;
};
