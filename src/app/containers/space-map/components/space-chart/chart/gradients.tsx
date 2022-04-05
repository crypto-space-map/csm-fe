import { colorArray } from '../utils/colors';

export const Gradients = () => (
  <>
    {colorArray.map(item => (
      <defs key={item}>
        <linearGradient id={`${item.replace('#', '')}`} x1="0" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor="#3d3d3d" />
          <stop offset="100%" stopColor={item} />
        </linearGradient>
      </defs>
    ))}
  </>
);
