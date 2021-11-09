import { useEffect, useRef } from 'react';

import * as d3 from 'd3';

import { data } from './data';
import { ChartWrapper, RandomSvg } from './styled';
import { applySimulation, createBaseMap, createStatePacks } from './helpers';

const scheme = d3.schemeGnBu;

const color = d3.scaleQuantize().domain([0, 1]).range(scheme[9]);

export const TestCsm = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const width = wrapperRef.current?.offsetWidth;
    const height = wrapperRef.current?.offsetHeight;

    if (width && height && svgRef.current) {
      const map = createBaseMap(width, height, svgRef);
      const svg = d3.select(map);
      const statesPacked = createStatePacks(data);
      let nodes = [...new Map(statesPacked).values()];
      nodes = applySimulation({ nodes, width, height });

      svg.select('.state-boundaries').attr('stroke', '#fff');

      const statePacks = svg
        .append('g')
        .classed('state-packs', true)
        .selectAll('.state-pack')
        .data(nodes)
        .enter()
        .append('g')
        .classed('state-pack', true)
        .attr('transform', d => `translate(${d.x}, ${d.y})`);

      statePacks
        .append('circle')
        .attr('r', d => d.r)
        .attr('fill', 'none')
        .attr('stroke', 'none');

      const counties = statePacks
        .selectAll('.county-centroid')
        .data(d => d.nodes)
        .enter()
        .append('circle')
        .attr('fill', d => color(d.data.value / 5))
        .attr('r', d => d.r)
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);

      counties
        .append('title')
        .text(d => `${d.data.value}, ${d.data.value}\nTotal Households: ${d.data.value}`);

      svg
        .append('g')
        .classed('centroids', true)
        .selectAll('circle')
        .data(nodes)
        .join('circle')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', d => d.r)
        .attr('fill', 'none')
        .attr('stroke', 'white')
        .attr('stroke-dasharray', '10,10')
        .attr('stroke-width', 1);
    }
  }, [wrapperRef.current?.offsetWidth, wrapperRef.current?.getAttribute('class')]);

  return (
    <ChartWrapper ref={wrapperRef}>
      <RandomSvg className="csm-map" ref={svgRef} />
    </ChartWrapper>
  );
};
