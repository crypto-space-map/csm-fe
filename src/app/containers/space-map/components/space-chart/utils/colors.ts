import { HierarchyCircularNode, interpolateRgbBasis } from 'd3';
import { COLOR_PALLETTE } from 'global/pallette';

import { PackedCategories } from '../types';

type GetCircleColorProps = {
  projectWeight: number;
  isTransparent: boolean;
};

export const colorArray = [
  '#EAE0D7',
  '#817474',
  '#E7948C',
  '#AABCC3',
  '#519581',
  '#DFDFA6',
  '#9E6A87',
  '#4B3C6A',
  '#36454E',
  '#6F464F',
  '#343F63',
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
