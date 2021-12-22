import { lazyLoad } from 'utils/loadable';

export const Included = lazyLoad(
  () => import('./index'),
  module => module.Included,
);
