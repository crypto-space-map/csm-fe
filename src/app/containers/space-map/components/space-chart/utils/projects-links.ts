import { forceLink, SimulationLinkDatum } from 'd3';

import { ProjectsLinksGeneratorProps } from '../types';

export const generateProjectLinks = ({ simulation, partnerships }: ProjectsLinksGeneratorProps) => {
  if (partnerships) {
    simulation.force(
      'link',
      forceLink(partnerships).id(d => d.id)
    );
  }
};
