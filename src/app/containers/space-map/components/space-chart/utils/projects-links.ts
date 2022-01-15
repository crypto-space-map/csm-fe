import { HierarchyCircularNode } from 'd3';

import { PackedCategories, ProjectsLinksGeneratorProps } from '../types';

const LINKS = 'LINKS';

const getIncludesProjects = (
  data: ProjectsLinksGeneratorProps['nodes'],
  projectPartnerships: ProjectsLinksGeneratorProps['projectPartnerships']
): HierarchyCircularNode<PackedCategories>[] => {
  const parsed = data.reduce((acc, item) => {
    if (projectPartnerships?.includes(item.data.projectId)) {
      acc.push(item);
    }
    return acc;
  }, [] as HierarchyCircularNode<PackedCategories>[]);
  return parsed;
};

export const generateProjectLinks = ({ svg, nodes, projectPartnerships }: ProjectsLinksGeneratorProps) => {
  const foundedProjects = getIncludesProjects(nodes, [...new Set(projectPartnerships)]);

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
    .attr('stroke-dasharray', 10000);

  link.merge(link);

  return link;
};
