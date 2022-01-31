import { RefObject } from 'react';

import { select } from 'd3';

const TOOLTIP = 'tooltip';

type FundsTooltipProps = {
  ref: RefObject<HTMLDivElement>;
};

export const circlesTooltips = ({ ref }: FundsTooltipProps) => {
  const tooltipArea = select(ref.current).selectAll('div').data(['']);

  tooltipArea.enter().append('div').attr('class', TOOLTIP);

  tooltipArea.merge(tooltipArea);

  tooltipArea.exit().remove();

  return tooltipArea;
};
