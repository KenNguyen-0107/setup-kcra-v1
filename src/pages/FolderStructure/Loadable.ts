import { lazyLoad } from 'utils/loadable';

export const FolderStructure = lazyLoad(
  () => import('./index'),
  module => module.FolderStructure,
);
