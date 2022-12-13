import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import { GlobalStyles } from '../global-styles';

interface MyThemeProviderProps {
  children: ReactNode;
}

export function MyThemeProvider({ children }: MyThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
