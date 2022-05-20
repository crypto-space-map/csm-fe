import { packSiblings, group, scaleSqrt } from 'd3';

import { MapCategory } from 'app/containers/space-map/types';

import { PackedNodes } from '../types';
import { getCategoriesCords } from './categories-cords';

export const createCategoryPacks = (categories: MapCategory[], width = 0, height = 0) => {
  const mappedCategories = group(categories, d => d.name);

  const allCap = categories.reduce((acc, item) => {
    acc += item.marketCap;
    return acc;
  }, 0);

  const radius = scaleSqrt()
    .domain([0, 1])
    .range([0, height * 0.04]);

  const packedCategories = new Map<string, PackedNodes>();

  for (let [key, value] of mappedCategories) {
    const { children, marketCap, sortingNumber, namePathData } = value[0];

    const circledChildren = children.map(data => ({ ...data, data, r: 0 }));

    const nodes = packSiblings<typeof circledChildren[number]>(circledChildren);

    const maxCalculatedRadius = (marketCap / allCap) * 100;

    const r = radius(maxCalculatedRadius);

    const state = getCategoriesCords(sortingNumber, width, height);
    const { x, y } = state;
    packedCategories.set(key, { key, children: nodes, r, x, y, sortingNumber, namePathData });
  }
  const categoriesMapValues = [...new Map(packedCategories).values()] as PackedNodes[];
  return categoriesMapValues;
};
