import { packSiblings, scaleSqrt, group } from 'd3';

import { MapCategory } from 'app/containers/space-map/types';

import { PackedNodes } from '../types';

const DOMAIN = {
  RADIUS_FROM: 0,
  RADIUS_TO: 100,
};
/** At this interval, the function will place incoming values from the DOMAIN and exactly set relative to each other */
const RANGE = {
  MIN: 0,
  MAX: 0.0002,
};

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
      acc += item.marketCap;
      if (item.children.length) {
        acc += sumAllCaps(item.children);
      }
      return acc;
    }, 0);

  const packedCategories = new Map<string, PackedNodes>();

  for (let [key, value] of mappedCategories) {
    const { children, marketCap } = value[0];
    const radius = scaleSqrt().domain([0, 1]).range([RANGE.MIN, RANGE.MAX]);

    const circledChildren = children.map(data => ({ ...data, data, r: 0 }));

    const nodes = packSiblings<typeof circledChildren[number]>(circledChildren);

    const maxCalculatedRadius = sumAllCaps(children) + marketCap;

    const r = radius(maxCalculatedRadius);

    const state = { properties: { x: width / 2, y: height / 2 } };
    const { x, y } = state.properties;
    packedCategories.set(key, { key, children: nodes, r, x, y });
  }
  const categoriesMapValues = [...new Map(packedCategories).values()] as PackedNodes[];
  return categoriesMapValues;
};
