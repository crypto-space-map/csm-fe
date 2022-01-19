import { forceSimulation, forceX, forceY, forceCollide, forceCenter } from 'd3';

import { CirclesSimulation } from '../types';

const NODE = { PADDING: 10 };

const ALPHA_TICK = 0.0001;

export const circlesSimulation = ({ packedCategories, width, height }: CirclesSimulation) => {
  const simulation = forceSimulation(packedCategories)
    .force(
      'x',
      forceX()
        .x(d => d.x as number)
        .strength(height / width)
    )
    .force(
      'y',
      forceY()
        .y(d => d.y as number)
        .strength(width / height)
    )
    // .force('charge', forceManyBody().strength(width / height))
    .force('center', forceCenter(width / 2, height / 2))
    .force(
      'collide',
      forceCollide()
        .radius(d => d.r + NODE.PADDING)
        .strength(1.6)
    )
    .stop();

  while (simulation.alpha() > ALPHA_TICK) {
    simulation.tick();
  }

  return simulation;
};
