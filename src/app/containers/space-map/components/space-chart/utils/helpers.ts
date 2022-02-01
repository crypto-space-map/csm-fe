import { CSSProperties } from 'react';

import { HierarchyCircularNode } from 'd3';

import { PackedCategories } from '../types';

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

export const getAllProjects = (data: HierarchyCircularNode<PackedCategories>[]) => {
  const result = data.reduce((acc, item) => {
    if (!item.children?.length) {
      acc.push(item);
    }
    if (item.children?.length) {
      acc = [...acc, ...getAllProjects(item.children)];
    }
    return acc;
  }, [] as HierarchyCircularNode<PackedCategories>[]);
  return result;
};

export const transformStylesToString = (styles: CSSProperties) =>
  Object.keys(styles).reduce((styleString, name) => {
    styleString += `${name}:${styles[name as keyof typeof styles]};`;
    return styleString;
  }, '');
