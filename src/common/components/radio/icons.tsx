import React from 'react';

import { SVGProps } from '@global/types';

export const RadioIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <path
      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
      fill="url(#csm_icon_gradient)"
    />
  </svg>
);

export const RadioIconChecked = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" {...props}>
    <path
      stroke="null"
      id="svg_1"
      fill="url(#csm_icon_gradient)"
      d="m10,0.242327c-5.430824,0 -9.83845,4.371438 -9.83845,9.757673c0,5.386236 4.407625,9.757673 9.83845,9.757673c5.430824,0 9.83845,-4.371438 9.83845,-9.757673c0,-5.386236 -4.407625,-9.757673 -9.83845,-9.757673zm0,17.563812c-4.348595,0 -7.87076,-3.493247 -7.87076,-7.806139c0,-4.312892 3.522165,-7.806139 7.87076,-7.806139c4.348595,0 7.87076,3.493247 7.87076,7.806139c0,4.312892 -3.522165,7.806139 -7.87076,7.806139z"
    />
    <path
      id="svg_2"
      fill="url(#csm_icon_gradient)"
      d="m10,15c2.7614,0 5,-2.2386 5,-5c0,-2.76142 -2.2386,-5 -5,-5c-2.76142,0 -5,2.23858 -5,5c0,2.7614 2.23858,5 5,5z"
    />
  </svg>
);
