import { forceSimulation, forceCollide, forceX, forceY, forceManyBody } from 'd3';

import { CirclesSimulation } from '../types';

const ALPHA_TICK = 0.001;

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
        .strength(1)
    )
    .force('charge', forceManyBody().strength(-500))
    .force(
      'collide',
      forceCollide()
        .strength(1)
        .radius(d => d.r + 5)
    )
    .stop();

  while (simulation.alpha() > ALPHA_TICK) {
    simulation.tick();
  }

  return simulation;
};
