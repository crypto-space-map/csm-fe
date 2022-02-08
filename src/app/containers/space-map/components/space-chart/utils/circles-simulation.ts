import { forceSimulation, forceX, forceY, forceCollide, forceCenter, forceManyBody } from 'd3';

import { CirclesSimulation } from '../types';

const NODE = { PADDING: 100 };

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
    .force('charge', forceManyBody().strength(width / height))
    .force('center', forceCenter(width / 2, height / 2))
    .force(
      'collide',
      forceCollide()
        .strength(1.6)
        .radius(d => d.r + (d.groupName ? 20 : NODE.PADDING))
        .iterations(1)
    )
    .stop();

  while (simulation.alpha() > ALPHA_TICK) {
    simulation.tick();
  }

  return simulation;
};
