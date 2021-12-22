import * as React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { useThemeSlice } from 'stores/reducers/theme';
import { selectTheme } from 'stores/reducers/theme/selectors';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  useThemeSlice();

  const theme = useSelector(selectTheme);

  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
