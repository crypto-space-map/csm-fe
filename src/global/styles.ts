import { css } from '@emotion/react';

export const pallette = {
  // use like css vars(--mainBlue etc...)
  mainGreen: css`
    @property --mainGreen {
      syntax: '<color>';
      initial-value: #a8f8a0;
      inherits: false;
    }
  `,
  mainBlue: css`
    @property --mainBlue {
      syntax: '<color>';
      initial-value: #83d9f5;
      inherits: false;
    }
  `,
};
