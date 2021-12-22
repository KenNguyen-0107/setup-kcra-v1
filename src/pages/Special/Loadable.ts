/**
*
* Asynchronously loads the component for Special
*
*/

import { lazyLoad } from 'utils/loadable';

export const Special = lazyLoad(() => import('./index'), module => module.Special);