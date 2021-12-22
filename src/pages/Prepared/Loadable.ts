import { lazyLoad } from 'utils/loadable';

export const Prepared = lazyLoad(
  () => import('./index'),
  module => module.Prepared,
);
