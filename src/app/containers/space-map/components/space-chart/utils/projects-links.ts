import { ProjectsLinksGeneratorProps } from '../types';

const LINKS = 'LINKS';

export const generateProjectLinks = ({ svg, foundedProjects }: ProjectsLinksGeneratorProps) => {
  const link = svg
    .insert('g', ':first-child')
    .classed(LINKS, true)
    .selectAll(LINKS)
    .data(foundedProjects)
    .enter()
    .append('line')
    .join('line')
    .attr('stroke', '#ffffff')
    .attr('stroke-width', 1)
    .attr('stroke-dasharray', 4000);

  link.merge(link);

  return link;
};
