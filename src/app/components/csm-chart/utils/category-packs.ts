import { packSiblings, extent, scaleSqrt, group, packEnclose } from 'd3';

import { CSMMapData } from '../types';
import { mapCords } from './map-cords';
/** TODO  need to understand where from we take circle coords data */

const NODE = { MIN_RADIUS: 10, MAX_RADIUS: 30 };
/** TODO  May be out NODE params from this code */

export const createCategoryPacks = (categories: CSMMapData) => {
  const mappedCategories = group(categories, d => d.name);

  const packedCategories = new Map();

  const categoriesChildValues = categories.reduce((arr, { children }) => {
    children.map(({ value }) => arr.push(value));
    return arr;
  }, [] as number[]);

  const radius = scaleSqrt()
    .domain(extent(categoriesChildValues) as Iterable<number>)
    .range([NODE.MIN_RADIUS, NODE.MAX_RADIUS]);

  for (let [key, value] of mappedCategories) {
    let { children } = value[0];
    children.sort((a, b) => b.value - a.value);
    children = children.map(data => ({ ...data, data, r: radius(data.value) }));
    const nodes = packSiblings(children as d3.PackRadius[]);
    const { r } = packEnclose(nodes);
    const state = mapCords.find(d => d.properties.name === key) || { properties: { x: 0, y: 0 } };
    const { x, y } = state.properties;
    packedCategories.set(key, { key, nodes, r, x, y });
  }
  return packedCategories;
};
