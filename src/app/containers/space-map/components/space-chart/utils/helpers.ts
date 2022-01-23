import { HierarchyCircularNode } from 'd3';

import { PackedCategories } from '../types';
import { color } from './colors';

export const getCircleCoord = (data: HierarchyCircularNode<PackedCategories>, key: 'x' | 'y') => {
  const coord = data[key] + (data.parent?.data[key] || 0) - (data.parent?.data.r || 0) || 0;
  let dataParent = data.parent?.parent;
  let value = dataParent ? dataParent.data[key] - dataParent.data.r || 0 : 0;
  return coord + value;
};

export const getProjectsVsCoords = (data: HierarchyCircularNode<PackedCategories>[]) => {
  const parsed: HierarchyCircularNode<PackedCategories>[] = data.reduce((acc, item) => {
    if (item.children?.length) {
      return [...acc, ...getProjectsVsCoords(item.children)];
    }
    if (item.x && item.y && item.data.projectId) {
      acc.push(item);
    }
    return acc;
  }, [] as HierarchyCircularNode<PackedCategories>[]);
  return parsed;
};

type GetCircleColorProps = {
  projectWeight: number;
  isTransparent: boolean;
};

export const getIncludesProjects = (
  data: HierarchyCircularNode<PackedCategories>[],
  projectPartnerships: string[]
): HierarchyCircularNode<PackedCategories>[] => {
  const parsed = data.reduce((acc, item) => {
    if (item.data.projectId && projectPartnerships?.includes(item.data?.projectId)) {
      acc.push(item);
    }
    return acc;
  }, [] as HierarchyCircularNode<PackedCategories>[]);
  return parsed;
};

export const getCircleColor = ({ projectWeight, isTransparent }: GetCircleColorProps) =>
  isTransparent ? '#383838' : color(projectWeight > 100 ? 1 : projectWeight / 100);
