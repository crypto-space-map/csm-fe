import { HierarchyCircularNode, selection } from 'd3';

import { PackedCategories, ProjectsLinksGeneratorProps } from '../types';

const LINKS = 'LINKS';

type IncludesProjects = {
  x: number;
  y: number;
  projectId: string;
  parent: HierarchyCircularNode<PackedCategories> | null;
}[];

const getIncludesProjects = (
  data: ProjectsLinksGeneratorProps['nodes'],
  projectPartnerships: ProjectsLinksGeneratorProps['projectPartnerships']
): IncludesProjects => {
  const parsed = data.reduce((acc, item) => {
    if (projectPartnerships?.includes(item.data.projectId)) {
      const {
        parent,
        data: { projectId },
        x,
        y,
      } = item;
      acc.push({ projectId, x, y, parent });
    }
    return acc;
  }, [] as IncludesProjects);
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
    .attr('stroke-dasharray', 1000);
  return link;
};
