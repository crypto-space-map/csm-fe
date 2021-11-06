import { useEffect, useRef } from 'react';

import * as d3 from 'd3';

import { pack } from 'app/components/csm-chart/utils/pack';

import { data } from './data';
import { ChartWrapper } from './styled';

export const TestCsm = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = wrapperRef.current?.offsetWidth;
    const height = wrapperRef.current?.offsetHeight;
    if (width && height) {
      let colorScale = ['orange', 'lightblue', '#B19CD9'];
      let xScale = d3.scaleLinear().domain([0, 1]).range([0, 600]);

      const root = pack({ data, width, height });

      let numNodes = 40;
      let nodes = d3.range(numNodes).map((d, i) => ({
        radius: Math.random() * 25,
        value: Math.random(),
      }));

      const ticked = () => {
        d3.select('.csm-map')
          .attr('viewBox', `-${width / 4} -${height / 2} ${width} ${height}`)
          .selectAll('circle')
          .data(nodes)
          .join('circle')
          .attr('r', d => d.radius)
          .style('fill', d => d.color)
          .attr('cx', d => d.x)
          .attr('cy', d => d.y);
      };

      const ppacks = pack({ width, height, data });

      console.log({ nodes, ppacks });

      d3.forceSimulation(nodes)
        .force(
          'x',
          d3.forceX().x(d => xScale(d.value))
        )
        .force(
          'y',
          d3.forceY().y(() => 0)
        )
        .force(
          'collision',
          d3.forceCollide().radius(d => d.radius)
        )
        .on('tick', ticked);
    }
  }, [wrapperRef.current?.offsetWidth]);

  return (
    <ChartWrapper ref={wrapperRef}>
      <svg className="csm-map" />
    </ChartWrapper>
  );
};
