import { RefObject } from 'react';

import { select } from 'd3';

import { SimulationNodeDatumRadial } from '../types';

const TOOLTIP = 'tooltip';

type FundsTooltipProps = {
  ref: RefObject<HTMLDivElement>;
  nodes: SimulationNodeDatumRadial[];
};

export const fundsTooltips = ({ ref }: FundsTooltipProps) => {
  /** Root div */

  const tooltipArea = select(ref.current).append('div').attr('class', TOOLTIP);

  return tooltipArea;
};
