import { packSiblings, group, scaleSqrt } from 'd3';

import { MapCategory } from 'app/containers/space-map/types';

import { PackedNodes } from '../types';

const radius = scaleSqrt().domain([0, 1]).range([0, 20]);

export const createCategoryPacks = (categories: MapCategory[], width = 0, height = 0) => {
  const mappedCategories = group(categories, d => d.name);

  const allCap = categories.reduce((acc, item) => {
    acc += item.marketCap;
    return acc;
  }, 0);

  const packedCategories = new Map<string, PackedNodes>();

  function getRandomFromRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  for (let [key, value] of mappedCategories) {
    const { children, marketCap } = value[0];

    const circledChildren = children.map(data => ({ ...data, data, r: 0 }));

    const nodes = packSiblings<typeof circledChildren[number]>(circledChildren);

    const maxCalculatedRadius = (marketCap / allCap) * 100;

    const r = radius(maxCalculatedRadius);

    const sortingNumber = value[0].sortingNumber || Math.floor(getRandomFromRange(20, 60));

    const state = { properties: { x: width / 2, y: height / 2 } };
    const { x, y } = state.properties;
    packedCategories.set(key, { key, children: nodes, r, x, y, sortingNumber });
  }
  const categoriesMapValues = [...new Map(packedCategories).values()] as PackedNodes[];
  return categoriesMapValues;
};
