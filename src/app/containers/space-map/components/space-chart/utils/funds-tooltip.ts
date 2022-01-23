import { RefObject } from 'react';

import { select } from 'd3';

import { PackedCategories } from '../types';

const TOOLTIP = 'tooltip';

type FundsTooltipProps = {
  ref: RefObject<HTMLDivElement>;
  nodes: PackedCategories[];
};

export const fundsTooltips = ({ ref }: FundsTooltipProps) => {
  /** Root div */

  const tooltipArea = select(ref.current).selectAll('div').data(['']);

  tooltipArea.enter().append('div').attr('class', TOOLTIP);

  tooltipArea.merge(tooltipArea);

  tooltipArea.exit().remove();

  return tooltipArea;
};
