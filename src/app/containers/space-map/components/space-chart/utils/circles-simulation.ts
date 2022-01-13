import { forceSimulation, forceX, forceY, forceManyBody, forceCollide } from 'd3';

import { CirclesSimulation } from '../types';

const NODE = { PADDING: 10 };

export const circlesSimulation = ({ packedCategories }: CirclesSimulation) => {
  const simulation = forceSimulation(packedCategories)
    .force(
      'x',
      forceX()
        .x(d => d.x as number)
        .strength(1)
    )
    .force(
      'y',
      forceY()
        .y(d => d.y as number)
        .strength(5)
    )
    .force('charge', forceManyBody().strength(-1))
    .force(
      'collide',
      forceCollide()
        .radius(d => d.r + NODE.PADDING)
        .strength(1.5)
    )
    .stop();

  while (simulation.alpha() > 0.0001) {
    simulation.tick();
  }

  return simulation;
};
