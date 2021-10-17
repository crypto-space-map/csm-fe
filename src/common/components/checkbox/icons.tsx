import React from 'react';

import { SVGProps } from '@global/types';

export const CheckBoxIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <path
      d="M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
      fill="url(#csm_icon_gradient)"
    />
  </svg>
);

export const CheckBoxCheckedIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM14.99 5.99999L13.58 4.57999L6.98999 11.17L4.40999 8.59999L2.98999 10.01L6.98999 14L14.99 5.99999Z"
      fill="url(#csm_icon_gradient)"
    />
  </svg>
);
