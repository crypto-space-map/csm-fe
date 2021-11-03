import { useEffect, useRef } from 'react';

import * as d3 from 'd3';

import { data } from './data';
import { ChartWrapper } from './styled';

export const TestCsm = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = wrapperRef.current?.offsetWidth;
    const height = wrapperRef.current?.offsetHeight;
    const pack = data =>
      d3.pack().size([width, height]).padding(3)(
        d3
          .hierarchy(data)
          .sum(d => d.value)
          .sort((a, b) => b.value - a.value)
      );
    const root = pack(data);
    let focus = root;
    let view;
    const svg = d3
      .select('.csm-map')
      .attr('viewBox', `-${width} 0 ${width * 2} ${height / 10}`)
      .style('display', 'block')
      .style('margin', '0 -14px')
      .style('background', 'transparent')
      .style('cursor', 'pointer')
      .on('click', event => zoom(event, root));

    const node = svg
      .append('g')
      .selectAll('circle')
      .data(root.descendants().slice(1))
      .join('circle')
      .attr('fill', d => (d.children ? 'transparent' : 'white'))
      .attr('stroke', 'white')
      .attr('stroke-dasharray', '10,10')
      .attr('pointer-events', d => (!d.children ? 'none' : null))
      .on('mouseover', function () {
        d3.select(this).attr('stroke', 'white');
      })
      .on('mouseout', function () {
        d3.select(this).attr('stroke', 'red');
      })
      .on('click', (event, d) => focus !== d && (zoom(event, d), event.stopPropagation()));

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

    zoomTo([root.x, root.y, root.r * 2]);

    function zoomTo(v) {
      const k = width / v[2];

      view = v;

      label.attr('transform', d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
      node.attr('transform', d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
      node.attr('r', d => d.r * k);
    }

    function zoom(event, d) {
      const focus0 = focus;

      focus = d;

      const transition = svg
        .transition()
        .duration(event.altKey ? 7500 : 750)
        .tween('zoom', d => {
          const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
          return t => zoomTo(i(t));
        });

      label
        .filter(function (d) {
          return d.parent === focus || this.style.display === 'inline';
        })
        .transition(transition)
        .style('fill-opacity', d => (d.parent === focus ? 1 : 0))
        .on('start', function (d) {
          if (d.parent === focus) this.style.display = 'inline';
        })
        .on('end', function (d) {
          if (d.parent !== focus) this.style.display = 'none';
        });
    }
    return () => {
      svg.node();
    };
  }, []);
  return (
    <ChartWrapper ref={wrapperRef}>
      <svg className="csm-map" />
    </ChartWrapper>
  );
};
