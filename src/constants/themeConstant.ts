const lightTheme = {
  primary: '#000',
  secondary: '#fff',
  error: '',
  success: '',
  info: '',
  warning: '',
};

const darkTheme = {
  primary: '#fff',
  secondary: '#000',
  error: '',
  success: '',
  info: '',
  warning: '',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
