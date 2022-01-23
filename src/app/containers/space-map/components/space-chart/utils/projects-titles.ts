import { ProjectsLinksGeneratorProps } from '../types';

const TOOLTIPS = 'g-area-tooltip';
const PROJECT_TOOLTIPS = 'project-tooltip';

export const generateProjectTooltips = ({ svg, foundedProjects }: ProjectsLinksGeneratorProps) => {
  const tooltip = svg
    .insert('g')
    .classed(TOOLTIPS, true)
    .selectAll(TOOLTIPS)
    .data(foundedProjects)
    .enter()
    .append('foreignObject')
    .join('foreignObject')
    .attr('height', 20 + 9)
    .attr('width', ({ data: { name } }) => name.length * 12)
    .classed(PROJECT_TOOLTIPS, true);

  tooltip.merge(tooltip);
  tooltip.exit().remove();

  return tooltip;
};
