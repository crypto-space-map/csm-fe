import { PackedCategories } from '../types';

export const getCircleCord = (data: PackedCategories, key: 'x' | 'y') => {
  const cord = data[key] + (data.parent?.data[key] || 0) - (data.parent?.data.r || 0) || 0;
  const val: number = data.parent?.parent ? getCircleCord(data.parent, key) : 0;
  return cord + val;
};
