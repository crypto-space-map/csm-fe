import { useEffect, useRef } from 'react';

import * as d3 from 'd3';

import { data } from './data';
import { ChartWrapper } from './styled';
import { pack } from 'app/components/csm-chart/utils/pack';

export const TestCsm = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = wrapperRef.current?.offsetWidth;
    const height = wrapperRef.current?.offsetHeight;
    if (width && height) {
      const root = pack({ data, width, height });
      let focus = root;
      let view;

      let xScale = d3.scaleLinear().domain([0, 1]).range([0, 600]);

      const svg = d3
        .select('.csm-map')
        .attr('viewBox', `-${width / 2} -${height / 2} ${width} ${height}`)
        .style('display', 'block')
        .style('background', 'transparent')
        .style('cursor', 'pointer')
        .on('click', event => console.log(event));

      const node = svg
        .append('g')
        .join('rect')
        .selectAll('circle')
        .data(root.descendants().slice(1))
        .join('circle')
        .attr('fill', d => (d.children ? 'transparent' : 'white'))
        .attr('stroke', 'white')
        .attr('stroke-dasharray', '10,10')
        .attr('stroke-dasharray', '10,10')
        .attr('pointer-events', d => (!d.children ? 'none' : null))
        .on('mouseover', function () {
          d3.select(this).attr('stroke', 'red');
        })
        .on('mouseout', function () {
          d3.select(this).attr('stroke', 'white');
        })
        .on('click', (event, d) => focus !== d && console.log({ event, d }));

      const label = svg
        .append('g')
        .style('font', '10px sans-serif')
        .attr('pointer-events', 'none')
        .attr('text-anchor', 'middle')
        .selectAll('text')
        .data(root.descendants())
        .join('text')
        .style('fill-opacity', d => (d.parent === root ? 1 : 0))
        .style('display', d => (d.parent === root ? 'inline' : 'none'))
        .text(d => d.data.name);

      zoomTo([root.x, root.y, height * 1.5]);

      function zoomTo(v: number[]) {
        const k = width / v[2];

        view = v;

        label.attr('transform', d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
        node.attr('transform', d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
        node.attr('r', d => d.r * k);
      }
    }
  }, [wrapperRef.current?.offsetWidth]);

  return (
    <ChartWrapper ref={wrapperRef}>
      <svg className="csm-map" />
    </ChartWrapper>
  );
};
