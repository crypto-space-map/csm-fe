import { RefObject } from 'react';

import { select } from 'd3';

const MATRIX_VALUE = `0     0     0     0     0
                      0     0     0     0     0
                      0     0     0     0     0
                      0     0     0     1     0 `;

export const circleShadow = (ref: RefObject<Element>) => {
  const svg = select(ref.current);
  const defs = svg.append('defs');

  const dropShadowFilter = defs
    .append('svg:filter')
    .attr('id', 'drop-shadow')
    .attr('filterUnits', 'userSpaceOnUse')
    .attr('width', '250%')
    .attr('height', '250%');
  dropShadowFilter
    .append('svg:feGaussianBlur')
    .attr('in', 'SourceGraphic')
    .attr('stdDeviation', 2)
    .attr('result', 'blur-out');
  dropShadowFilter
    .append('svg:feColorMatrix')
    .attr('in', 'blur-out')
    .attr('type', 'matrix')
    .attr('values', MATRIX_VALUE)
    .attr('result', 'color-out');
  dropShadowFilter
    .append('svg:feOffset')
    .attr('in', 'color-out')
    .attr('dx', 1)
    .attr('dy', 1)
    .attr('result', 'the-shadow');
  dropShadowFilter
    .append('svg:feBlend')
    .attr('in', 'SourceGraphic')
    .attr('in2', 'the-shadow')
    .attr('mode', 'normal');
  dropShadowFilter.append('svg:feDropShadow').attr('flood-color', '#ffffff');
};
