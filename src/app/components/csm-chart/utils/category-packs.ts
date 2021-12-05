import { packSiblings, extent, scaleSqrt, group, PackCircle } from 'd3';

import { CSMMapCategory } from 'app/containers/pages/space-map/types';

import { PackedCategories } from '../types';
import { mapCords } from './map-cords';
/** TODO  need to understand where from we take circle coords data */

type PackedNodes = {
  key: string;
  children: ({
    data: CSMMapCategory;
    r: number;
    id: string;
    name: string;
    children: CSMMapCategory[];
    marketCap: number;
  } & PackCircle)[];
  r: number;
  x: number;
  y: number;
};

export const createCategoryPacks = (categories: CSMMapCategory[], marketCap: number) => {
  const mappedCategories = group(categories, d => d.name);

  const packedCategories = new Map<string, PackedNodes>();

  const radius = scaleSqrt()
    .domain(extent([0, 200]) as Iterable<number>)
    .range([20, 200]);

  for (let [key, value] of mappedCategories) {
    const { children } = value[0];

    const circledChildren = children.map(data => ({ ...data, data, r: 0 }));

    const nodes = packSiblings<typeof circledChildren[number]>(circledChildren);

    // TODO мок значение битка убрать
    const maxCalculatedRadius = (value[0].marketCap / marketCap) * 100 * 2;

    const r = radius(maxCalculatedRadius);

    const state = mapCords.find(d => d.name === key) || { properties: { x: 600, y: 350 } };
    const { x, y } = state.properties;
    packedCategories.set(key, { key, children: nodes, r, x, y });
  }
  const categoriesMapValues = [...new Map(packedCategories).values()] as PackedCategories[];
  return categoriesMapValues;
};
