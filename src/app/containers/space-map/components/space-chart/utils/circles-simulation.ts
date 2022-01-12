import { forceSimulation, forceX, forceY, forceManyBody, forceCollide } from 'd3';

import { CirclesSimulation } from '../types';

const NODE = { PADDING: 10 };

export const circlesSimulation = ({ nodes, width, height }: CirclesSimulation) => {
  const simulation = forceSimulation(nodes)
    .force(
      'cx',
      forceX()
        .x(width / 2)
        .strength(0.1)
    )
    .force(
      'cy',
      forceY()
        .y(height / 2)
        .strength(0.0003)
    )
    .force(
      'x',
      forceX()
        .x(d => d.x as number)
        .strength(0.19)
    )
    .force(
      'y',
      forceY()
        .y(d => d.y as number)
        .strength(3)
    )
    .force('charge', forceManyBody().strength(-1))
    .force(
      'collide',
      forceCollide()
        .radius(d => d.r + NODE.PADDING)
        .strength(1.5)
    )
    .stop();

  while (simulation.alpha() > 0.001) {
    simulation.tick();
  }

  return simulation;
};
