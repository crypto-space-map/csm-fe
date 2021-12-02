import { packSiblings, extent, scaleSqrt, group, packEnclose } from 'd3';

import { CSMMapData } from '../types';
import { mapCords } from './map-cords';
/** TODO  need to understand where from we take circle coords data */

const NODE = { MIN_RADIUS: 20, MAX_RADIUS: 40 };
/** TODO  May be out NODE params from this code */

export const createCategoryPacks = (categories: CSMMapData) => {
  const mappedCategories = group(categories, d => d.name);

  const packedCategories = new Map();

  const categoriesChildValues = categories.reduce((arr, { marketCap }) => {
    arr.push(marketCap as number);
    return arr;
  }, [] as number[]);
  /** Create array of values to d3.domain  */
  const allMarketCap = categories.reduce((sum, { marketCap }) => (sum + marketCap) as number, 0);

  const radius = scaleSqrt()
    .domain(extent(categoriesChildValues) as Iterable<number>)
    .range([NODE.MIN_RADIUS, NODE.MAX_RADIUS]);

  for (let [key, value] of mappedCategories) {
    const radius2 = scaleSqrt()
      .domain(extent([0, 200]) as Iterable<number>)
      .range([20, 200]);

    let { children } = value[0];
    // children.sort((a, b) => b.marketCap - a.marketCap);
    children = children.map(data => ({ ...data, data, r: radius(data.marketCap) }));

    console.log(children);

    const nodes = packSiblings(children as d3.PackRadius[]);
    // const { r } = packEnclose(children);
    const allChildrenCap = children.reduce((sum, { marketCap }) => (sum + marketCap) as number, 0);
    // console.log(allChildrenCap, key);
    // console.log({ allMarketCap, categoriesChildValues });
    // let r = (allChildrenCap / allMarketCap) * 100 * 4;
    // const fooBar = (number: number) => {
    //   switch (true) {
    //     case number > 200:
    //       return 200;
    //     case number < 40:
    //       return 40;
    //   }
    //   return number;
    // };
    // r = fooBar(r);
    // console.log(r, key);

    const dats = categories.map(categ => ({
      cur: (+categ.marketCap / 1268865289918) * 100,
      name: categ.name,
      size: (+categ.marketCap / 1268865289918) * 100 * 2,
    }));

    console.log(value);

    let r = (value[0].marketCap / 1268865289918) * 100 * 2;

    r = radius2(r);
    console.log({ r, k: key });

    // mock cords { x: 500, y: 250 }
    const state = mapCords.find(d => d.name === key) || { properties: { x: 500, y: 450 } };
    const { x, y } = state.properties;
    packedCategories.set(key, { key, children: nodes, r, x, y });
  }
  const categoriesMapValues = [...new Map(packedCategories).values()];
  return categoriesMapValues;
};
