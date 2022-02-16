import { forceSimulation, forceCollide, forceCenter, forceManyBody } from 'd3';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import forceInABox from 'force-in-a-box';

import { CirclesSimulation } from '../types';

const ALPHA_TICK = 0.001;

export const circlesSimulation = ({ packedCategories, width, height }: CirclesSimulation) => {
  packedCategories.sort((a, b) => b.sortingNumber - a.sortingNumber);
  const groupingForce = forceInABox()
    .size([width * 0.8, height * 0.8]) // Size of the chart
    .strength(0.4) // Strength to foci
    .template('treemap') // treemap | force
    .groupBy('sortingNumber'); // Node attribute to group

  const simulation = forceSimulation(packedCategories)
    .force('group', groupingForce)
    .force('charge', forceManyBody().strength(-1))
    .force('center', forceCenter(width / 2, height / 2).strength(0.2))
    .force(
      'collide',
      forceCollide()
        .strength(1)
        .radius(d => d.r + 15)
    )
    .stop();

  while (simulation.alpha() > ALPHA_TICK) {
    simulation.tick();
  }

  return simulation;
};
