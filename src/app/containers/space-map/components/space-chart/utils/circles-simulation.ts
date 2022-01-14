import { forceSimulation, forceX, forceY, forceManyBody, forceCollide, forceCenter } from 'd3';

import { CirclesSimulation } from '../types';

const NODE = { PADDING: 10 };

export const circlesSimulation = ({ packedCategories, width, height }: CirclesSimulation) => {
  const simulation = forceSimulation(packedCategories)
    .force(
      'x',
      forceX()
        .x(d => d.x as number)
        .strength(1.5)
    )
    .force(
      'y',
      forceY()
        .y(d => d.y as number)
        .strength(10)
    )
    .force('charge', forceManyBody().strength(-1))
    .force('center', forceCenter(width / 2, height / 2))
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
