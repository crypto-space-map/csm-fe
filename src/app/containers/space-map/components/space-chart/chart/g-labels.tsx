import { memo, useLayoutEffect, useRef } from 'react';

import { css } from '@emotion/react';

import { GAreaProps } from '../types';
import { containerCreator } from '../utils/container-creator';

const PADDING = {
  PARENT: 10,
  CHILD: 12,
};

const labels = css({ display: 'inherit' }).name;

export const GLabels = memo<GAreaProps>(({ nodes }) => {
  const labelsRef = useRef<SVGGElement>(null);

  useLayoutEffect(() => {
    if (nodes?.length) {
      const { component } = containerCreator<SVGGElement, typeof nodes>({
        ref: labelsRef,
        data: nodes,
        className: labels,
      });

      component
        .data(component.data())
        .append('text')
        .text(item => item.data.key || '')
        .classed('label-text', true)
        .attr('x', ({ data }) => data.x)
        .attr('y', ({ data: { y, r } }) => y - r - PADDING.PARENT);
    }
  }, [nodes]);

  return <g ref={labelsRef} className="category-labels" />;
});
