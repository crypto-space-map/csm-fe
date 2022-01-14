import { HierarchyCircularNode } from 'd3';

import { PackedCategories } from '../types';

export const getCircleCord = (data: HierarchyCircularNode<PackedCategories>, key: 'x' | 'y') => {
  const cord = data[key] + (data.parent?.data[key] || 0) - (data.parent?.data.r || 0) || 0;
  const val: number = data.parent?.parent
    ? data?.parent?.parent.data[key] - data?.parent?.parent.data.r || 0
    : 0;
  return cord + val;
};

export const getProjectsVsCords = (data: HierarchyCircularNode<PackedCategories>[]) => {
  const parsed: HierarchyCircularNode<PackedCategories>[] = data.reduce((acc, item) => {
    if (item.children?.length) {
      return [...acc, ...getProjectsVsCords(item.children)];
    }
    if (item.x && item.y && item.data.projectId) {
      acc.push(item);
    }
    return acc;
  }, [] as HierarchyCircularNode<PackedCategories>[]);
  return parsed;
};
