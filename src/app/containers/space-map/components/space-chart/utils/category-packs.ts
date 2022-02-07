import { packSiblings, group } from 'd3';

import { MapCategory } from 'app/containers/space-map/types';

import { PackedNodes } from '../types';

export const createCategoryPacks = (
  categories: MapCategory[],
  maxMarketCap = 0,
  minMarketCap = 0,
  width = 0,
  height = 0
) => {
  const mappedCategories = group(categories, d => d.name);

  const sumAllCaps = (data: MapCategory[]) =>
    data.reduce((acc, item) => {
      acc += sumAllCaps(item.children) + item.marketCap;
      return acc;
    }, 0);

  const allCAp = categories.reduce((acc, item) => {
    acc += item.marketCap;
    return acc;
  }, 0);

  const packedCategories = new Map<string, PackedNodes>();

  for (let [key, value] of mappedCategories) {
    const { children, marketCap } = value[0];

    const circledChildren = children.map(data => ({ ...data, data, r: 0 }));

    const nodes = packSiblings<typeof circledChildren[number]>(circledChildren);

    const maxCalculatedRadius = (marketCap / allCAp) * 100;

    const r = maxCalculatedRadius * 10;

    const state = { properties: { x: width / 2, y: height / 2 } };
    const { x, y } = state.properties;
    packedCategories.set(key, { key, children: nodes, r, x, y });
  }
  const categoriesMapValues = [...new Map(packedCategories).values()] as PackedNodes[];
  return categoriesMapValues;
};
