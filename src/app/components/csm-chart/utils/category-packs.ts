import { packSiblings, extent, scaleSqrt, group, packEnclose, pack, hierarchy } from 'd3';

import { CSMMapData } from '../types';
import { mapCords } from './map-cords';
/** TODO  need to understand where from we take circle coords data */

const NODE = { MIN_RADIUS: 10, MAX_RADIUS: 30 };
/** TODO  May be out NODE params from this code */

const radiusDetermine = (circleValue: number, categories: CSMMapData, circleRadius?: number) => {
  const rangeParams = circleRadius
    ? [circleRadius / 2, circleRadius / 2]
    : [NODE.MIN_RADIUS, NODE.MAX_RADIUS];
  const categoriesChildValues = categories.reduce((arr, { children }) => {
    if (!children) return [0, 0];
    children.map(({ value }) => arr.push(value));
    return arr;
  }, [] as number[]);
  const radius = scaleSqrt()
    .domain(extent(categoriesChildValues) as Iterable<number>)
    .range(rangeParams)(circleValue);
  return radius;
};
/** function generate circle radius by category value and  categories  */

type CategoryPackProps = {
  categories: CSMMapData;
  xPos?: number;
  yPos?: number;
  circleRadius?: number;
};

export const createCategoryPacks = ({ categories, xPos, yPos, circleRadius }: CategoryPackProps) => {
  const mappedCategories = group(categories, d => d.name);

  const packedCategories = new Map();

  for (let [key, value] of mappedCategories) {
    let { children } = value[0];
    if (!children) return [];
    children.sort((a, b) => b.value - a.value);
    children = children.map(data => ({
      ...data,
      data,
      r: radiusDetermine(data.value, categories, circleRadius),
    }));

    const nodes = packSiblings(children as d3.PackRadius[]);
    const { r } = packEnclose(nodes);
    const { x, y } =
      xPos && yPos ? { x: xPos, y: yPos } : mapCords.find(d => d.properties.name === key)?.properties;
    packedCategories.set(key, { key, nodes, r, x, y });
  }
  const categoriesMapValues = [...new Map(packedCategories).values()];

  const childeNodes = categoriesMapValues.map(item => ({
    ...item,
    nodes: item.nodes.map(node => ({
      ...node,
      nodes: node.children
        ? createCategoryPacks({ categories: [node], xPos: item.x, yPos: item.y, circleRadius: item.r })[0]
            .nodes
        : [],
    })),
  }));
  return childeNodes;
};
