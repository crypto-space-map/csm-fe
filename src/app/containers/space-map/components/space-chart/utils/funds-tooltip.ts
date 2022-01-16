import { RefObject } from 'react';

import { select, Selection, EnterElement } from 'd3';

import { PackedCategories } from '../types';

const TOOLTIP = 'tooltip';

type FundsTooltipProps = {
  ref: RefObject<HTMLDivElement>;
  nodes: PackedCategories[];
};

export const fundsTooltips = ({ ref }: FundsTooltipProps) => {
  /** Root div */

  const tooltipArea = select(ref.current).append('div').attr('class', TOOLTIP).data([]);

  tooltipArea.enter().merge(tooltipArea as unknown as Selection<EnterElement, never, null, undefined>);
  tooltipArea.exit().remove();

  return tooltipArea;
};
