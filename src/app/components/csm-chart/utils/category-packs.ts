import { packSiblings, extent, scaleSqrt, group, packEnclose } from 'd3';

import { CSMMapData } from '../types';
import { mapCords } from './map-cords';
/** TODO  need to understand where from we take circle coords data */

const NODE = { MIN_RADIUS: 10, MAX_RADIUS: 80 };
/** TODO  May be out NODE params from this code */

export const createCategoryPacks = (categories: CSMMapData) => {
  const mappedCategories = group(categories, d => d.name);

  const packedCategories = new Map();

  const categoriesChildValues = categories.reduce((arr, { children }) => {
    children.map(({ marketCap }) => arr.push(marketCap));
    return arr;
  }, [] as number[]);
  /** Create array of values to d3.domain  */

  const radius = scaleSqrt()
    .domain(extent(categoriesChildValues) as Iterable<number>)
    .range([NODE.MIN_RADIUS, NODE.MAX_RADIUS]);

  for (let [key, value] of mappedCategories) {
    let { children } = value[0];
    // children.sort((a, b) => b.marketCap - a.marketCap);
    children = children.map(data => ({ ...data, data, r: radius(data.marketCap) }));
    const nodes = packSiblings(children as d3.PackRadius[]);
    const { r } = packEnclose(nodes);
    // mock cords { x: 500, y: 250 }
    const state = mapCords.find(d => d.name === key) || { properties: { x: 500, y: 450 } };
    const { x, y } = state.properties;
    packedCategories.set(key, { key, children: nodes, r, x, y });
  }
  const categoriesMapValues = [...new Map(packedCategories).values()];
  return categoriesMapValues;
};
