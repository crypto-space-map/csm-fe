import { HierarchyCircularNode, interpolateRgbBasis } from 'd3';
import { COLOR_PALLETTE } from 'global/pallette';

import { PackedCategories } from '../types';

type GetCircleColorProps = {
  projectWeight: number;
  isTransparent: boolean;
};

const colorArray = [
  '#78939C',
  '#9DD2F8',
  '#A9F89D',
  '#FCEB92',
  '#FF8585',
  '#FDA1FF',
  '#E0772B',
  '#E535D4',
  '#F64848',
  '#B41F54',
  '#B02727',
];

interface SphereColorParams {
  children: HierarchyCircularNode<PackedCategories>['children'];
  projectWeight: HierarchyCircularNode<PackedCategories>['data']['projectWeight'];
  isTransparent: boolean;
}

export const color = interpolateRgbBasis(colorArray);

const getCircleColor = ({ projectWeight, isTransparent }: GetCircleColorProps) =>
  isTransparent ? '#383838' : color(projectWeight > 100 ? 1 : projectWeight / 100);

export const getSphereColorParams = ({ children, projectWeight, isTransparent }: SphereColorParams) => {
  const colorParams = {
    fill: !children
      ? (typeof projectWeight !== 'undefined' &&
          getCircleColor({
            projectWeight: Math.round(projectWeight / 10) * 10,
            isTransparent,
          })) ||
        '#383838'
      : '',
    stroke: !!children ? COLOR_PALLETTE.MAP_DOTTED_CIRCLES : COLOR_PALLETTE.MAP_CHILD_DASH_ARRAY,
    strokeWidth: !!children ? 0.5 : 0.2,
    dash: !!children ? [4, 4] : [],
  };
  return colorParams;
};
