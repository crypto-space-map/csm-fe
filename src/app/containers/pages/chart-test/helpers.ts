import * as d3 from 'd3';

import { mapCords } from './coords';
// import { data } from './data';

const NODE = { MIN_RADIUS: 6, MAX_RADIUS: 20, PADDING: 10 };

const mappedData = data => d3.group(data, d => d.name);

const packSiblings = values => d3.packSiblings(values);

const packEnclose = nodes => d3.packEnclose(nodes);

export const createBaseMap = (width, height, ref) => {
  const svg = d3.select(ref.current).attr('viewBox', `0 0 ${width} ${height}`);

  svg
    .append('path')
    .classed('state-boundaries', true)
    .attr('fill', 'none')
    .attr('stroke', 'lightgray')
    .attr('stroke-width', 1)
    .attr('stroke-linejoin', 'round');

  svg
    .append('path')
    .classed('nation-boundary', true)
    .attr('fill', 'none')
    .attr('stroke', 'gray')
    .attr('stroke-linejoin', 'round');

  return svg.node();
};

export const createStatePacks = data => {
  const parsed = mappedData(data);
  const packedCategories = new Map();

  const getAllChildValues = data.reduce((arr, { children }) => {
    children.map(({ value }) => arr.push(value));
    return arr;
  }, []);

  const radius = d3
    .scaleSqrt()
    .domain(d3.extent(getAllChildValues))
    .range([NODE.MIN_RADIUS, NODE.MAX_RADIUS]);

  for (let [k, v] of parsed) {
    let { children } = v[0];
    children.sort((a, b) => b.value - a.value); // step 0
    children = children.map(data => ({ data, r: radius(data.value) })); // step 1
    const nodes = packSiblings(children); // step 1
    const { r } = packEnclose(nodes); // step 2
    const state = mapCords.find(d => d.properties.name === k); // step 3
    const { x, y } = state.properties; // step 3
    packedCategories.set(k, { nodes, r, x, y }); // step 4
  }
  return packedCategories;
};

export const applySimulation = ({ nodes, width, height }) => {
  const simulation = d3
    .forceSimulation(nodes)
    .force(
      'cx',
      d3
        .forceX()
        .x(d => width / 2)
        .strength(0.02)
    )
    .force(
      'cy',
      d3
        .forceY()
        .y(d => height / 2)
        .strength(0.02)
    )
    .force(
      'x',
      d3
        .forceX()
        .x(d => d.x)
        .strength(0.3)
    )
    .force(
      'y',
      d3
        .forceY()
        .y(d => d.y)
        .strength(0.3)
    )
    .force('charge', d3.forceManyBody().strength(-1))
    .force(
      'collide',
      d3
        .forceCollide()
        .radius(d => d.r + NODE.PADDING)
        .strength(1)
    )
    .stop();

  while (simulation.alpha() > 0.01) {
    simulation.tick();
  }

  return simulation.nodes();
};
