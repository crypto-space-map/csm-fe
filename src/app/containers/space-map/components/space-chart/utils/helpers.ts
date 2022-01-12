import { PackedCategories } from '../types';

export const getCircleCord = (data: PackedCategories, key: 'x' | 'y') => {
  const cord = data[key] + (data.parent?.data[key] || 0) - (data.parent?.data.r || 0) || 0;
  const val: number = data.parent?.parent
    ? data?.parent?.parent.data[key] - data?.parent?.parent.data.r || 0
    : 0;
  return cord + val;
};
