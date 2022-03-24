import { forceSimulation, forceCollide, forceCenter, forceManyBody } from 'd3';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import forceInABox from 'force-in-a-box';

import { CirclesSimulation } from '../types';

const ALPHA_TICK = 0.0001;

export const circlesSimulation = ({ packedCategories, width, height }: CirclesSimulation) => {
  const groupingForce = forceInABox()
    .strength(0.1) // Strength to foci
    .groupBy('sortingNumber') // Node attribute to group
    .size([width * 0.8, height * 0.9]); // Size of the chart
  // .forceCharge(1)

  const simulation = forceSimulation(packedCategories)
    .force('group', groupingForce)
    .force('charge', forceManyBody().strength(-1))
    .force('center', forceCenter(width / 2, height / 2).strength(0.2))
    .force(
      'collide',
      forceCollide()
        .strength(-2)
        .radius(d => d.r)
        .iterations(1)
    )
    .stop();

  while (simulation.alpha() > ALPHA_TICK) {
    simulation.tick();
  }

  return simulation;
};
