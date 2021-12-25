import { packSiblings, extent, scaleSqrt, group, PackCircle } from 'd3';

import { CSMMapCategory } from 'app/containers/space-map/types';

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

/** Incoming categories values  from to  */
const DOMAIN = {
  RADIUS_FROM: 0,
  RADIUS_TO: 200,
};
/** At this interval, the function will place incoming values from the DOMAIN and exactly set relative to each other */
const RANGE = {
  MIN: 20,
  MAX: 200,
};

export const createCategoryPacks = (categories: CSMMapCategory[], maxMarketCap = 100) => {
  const mappedCategories = group(categories, d => d.name);

  const packedCategories = new Map<string, PackedNodes>();

  const radius = scaleSqrt()
    .domain(extent([DOMAIN.RADIUS_FROM, DOMAIN.RADIUS_TO]) as Iterable<number>)
    .range([RANGE.MIN, RANGE.MAX]);

  for (let [key, value] of mappedCategories) {
    const { children, marketCap } = value[0];

    const circledChildren = children.map(data => ({ ...data, data, r: 0 }));

    const nodes = packSiblings<typeof circledChildren[number]>(circledChildren);

    // TODO мок значение битка убрать
    const maxCalculatedRadius = (marketCap / maxMarketCap) * 100 * 2;

    const r = radius(maxCalculatedRadius);

    /** TODO create function to find page center instead properties { x: 600, y: 350 } */

    const state = mapCords.find(d => d.name === key) || { properties: { x: 600, y: 350 } };
    const { x, y } = state.properties;
    packedCategories.set(key, { key, children: nodes, r, x, y });
  }
  const categoriesMapValues = [...new Map(packedCategories).values()] as PackedCategories[];
  return categoriesMapValues;
};
