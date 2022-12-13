import { ReactNode } from 'react';
import { MyThemeProvider } from '../theme-provider';

interface RenderThemeProps {
  children: ReactNode;
}

export function RenderTheme({ children }: RenderThemeProps) {
  return <MyThemeProvider>{children}</MyThemeProvider>;
}
