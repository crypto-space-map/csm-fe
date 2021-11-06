import { useRef } from 'react';

import { RandomSvg } from './styled';

export const SingleChart = () => {
  const ref = useRef<SVGSVGElement>(null);
  return <RandomSvg ref={ref} />;
};
