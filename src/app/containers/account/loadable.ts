/**
 *
 * Asynchronously loads the component for Account
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AccountPage = lazyLoad(
  () => import('./index'),
  module => module.Account
);
