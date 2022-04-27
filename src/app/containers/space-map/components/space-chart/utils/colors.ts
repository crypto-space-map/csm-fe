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

export const color = interpolateRgbBasis(colorArray);

const getCircleColor = ({ projectWeight, isTransparent }: GetCircleColorProps) =>
  isTransparent ? '#383838' : color(projectWeight > 100 ? 1 : projectWeight / 100);

export const getSphereColorParams = (
  item: HierarchyCircularNode<PackedCategories>,
  isTransparent: boolean
) => {
  const colorParams = {
    fill: !item.children
      ? (typeof item.data.projectWeight !== 'undefined' &&
          getCircleColor({
            projectWeight: Math.round(item.data.projectWeight / 10) * 10,
            isTransparent,
          })) ||
        '#383838'
      : '',
    stroke: !!item.children ? COLOR_PALLETTE.MAP_DOTTED_CIRCLES : COLOR_PALLETTE.MAP_CHILD_DASH_ARRAY,
    strokeWidth: !!item.children ? 0.5 : 0.2,
    dash: !!item.children ? [4, 4] : [],
  };
  return colorParams;
};
