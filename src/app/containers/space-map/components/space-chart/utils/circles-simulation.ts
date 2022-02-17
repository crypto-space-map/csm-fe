import { forceSimulation, forceCollide, forceCenter, forceManyBody, forceX, forceY } from 'd3';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import forceInABox from 'force-in-a-box';

import { CirclesSimulation } from '../types';

const ALPHA_TICK = 0.001;

export const circlesSimulation = ({ packedCategories, width, height }: CirclesSimulation) => {
  packedCategories.sort((a, b) => b.sortingNumber - a.sortingNumber);
  const groupingForce = forceInABox()
    .size([width * 0.7, height * 0.7]) // Size of the chart
    .strength(10) // Strength to foci
    .template('treemap') // treemap | force
    .groupBy('sortingNumber'); // Node attribute to group

  const simulation = forceSimulation(packedCategories)
    .force(
      'x',
      forceX()
        .x(d => d.x as number)
        .strength(0.1)
    )
    .force(
      'y',
      forceY()
        .y(d => d.y as number)
        .strength(0.3)
    )
    .force('group', groupingForce)
    .force('charge', forceManyBody().strength(-200))
    .force('center', forceCenter((width * 0.9) / 2, height / 2).strength(0.2))
    .force(
      'collide',
      forceCollide()
        .strength(0.2)
        .radius(d => d.r + 10)
    )
    .stop();

  while (simulation.alpha() > ALPHA_TICK) {
    simulation.tick();
  }

  return simulation;
};
