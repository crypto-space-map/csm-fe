import { forceSimulation, forceCollide, forceCenter } from 'd3';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { CirclesSimulation } from '../types';
import forceInABox from './forceInABox';

const ALPHA_TICK = 0.001;

export const circlesSimulation = ({ packedCategories, width, height }: CirclesSimulation) => {
  const groupingForce = forceInABox()
    .size([width, height]) // Size of the chart
    .template('force') // Either treemap or force
    .groupBy('sortingNumber') // Nodes' attribute to group
    .strength(height / 1000) // Strength to foci
    .forceCharge(-3000) // Charge between the meta-nodes (Force template only)
    .forceNodeSize(10);

  const simulation = forceSimulation(packedCategories)
    .force('group', groupingForce)
    // .force('charge', forceManyBody().strength(-50))
    .force('center', forceCenter(width / 2, height / 2).strength(0.2))
    .force(
      'collide',
      forceCollide()
        .strength(0.1)
        .radius(d => d.r + 5)
    )
    .stop();

  while (simulation.alpha() > ALPHA_TICK) {
    simulation.tick();
  }

  return simulation;
};
