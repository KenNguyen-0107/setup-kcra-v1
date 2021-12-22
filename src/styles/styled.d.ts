import 'styled-components';
import { Theme } from 'constants/themeConstant';

/* This is the suggested way of declaring theme types */
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
