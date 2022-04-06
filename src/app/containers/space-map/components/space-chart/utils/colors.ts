import { HierarchyCircularNode, interpolateRgbBasis } from 'd3';
import { COLOR_PALLETTE } from 'global/pallette';

import { PackedCategories } from '../types';

type GetCircleColorProps = {
  projectWeight: number;
  isTransparent: boolean;
};
// E8E866 ЖЕЛТЫЙ F5F587 SUPER YELLOW

export const colorArray = [
  '#C93A44',
  '#F5F587',
  '#A35263',
  '#044733',
  '#F7C599',
  '#4B3C6A',
  '#ED766B',
  '#AABCC3',
  '#36454E',
  '#343F63',
  '#817474',
];

export const color = interpolateRgbBasis(colorArray);

const getCircleColor = ({ projectWeight, isTransparent }: GetCircleColorProps) =>
  isTransparent ? '#383838' : color(projectWeight > 100 ? 1 : projectWeight / 100);

export const getSphereColorParams = (
  item: HierarchyCircularNode<PackedCategories>,
  isTransparent: boolean
) => {
  const sphereColor =
    typeof item.data.projectWeight !== 'undefined' &&
    getCircleColor({
      projectWeight: Math.round(item.data.projectWeight / 10) * 10,
      isTransparent,
    });

  const colorParams = {
    fill: !item.children ? sphereColor || '#383838' : 'none',
    stroke: !!item.children ? COLOR_PALLETTE.MAP_DOTTED_CIRCLES : COLOR_PALLETTE.MAP_CHILD_DASH_ARRAY,
    strokeWidth: !!item.children ? 0.5 : 0.2,
    strokeDasharray: !!item.children ? '4,4' : 'none',
  };
  return colorParams;
};
