import { forceSimulation, forceCollide, forceCenter, forceManyBody, forceX, forceY } from 'd3';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { CirclesSimulation } from '../types';
import forceInABox from './forceInABox';

const ALPHA_TICK = 0.001;

export const circlesSimulation = ({ packedCategories, width, height }: CirclesSimulation) => {
  packedCategories.sort((a, b) => b.sortingNumber - a.sortingNumber);
  const groupingForce = forceInABox()
    .size([width * 0.8, height]) // Size of the chart
    .strength(0.8) // Strength to foci
    .template('treemap') // treemap | force
    .groupBy('sortingNumber') // Node attribute to group
    .forceCharge(-2000) // Charge between the meta-nodes (Force template only)
    .forceNodeSize(1);

  const simulation = forceSimulation(packedCategories)
    .force(
      'y',
      forceY()
        .y(d => d.y as number)
        .strength(1)
    )
    .force('group', groupingForce)
    .force('charge', forceManyBody().strength(-200))
    .force('center', forceCenter((width * 0.9) / 2, height / 2).strength(0.2))
    .force(
      'collide',
      forceCollide()
        .strength(0.2)
        .radius(d => d.r + 5)
    )
    .stop();

  while (simulation.alpha() > ALPHA_TICK) {
    simulation.tick();
  }

  return simulation;
};
