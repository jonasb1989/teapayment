import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import * as Styles from './styles';

interface PageLoaderProps {
  children: ReactNode;
  isLoading: boolean;
}

export function PageLoader({ children, isLoading = false }: PageLoaderProps) {
  return isLoading ? (
    <>{createPortal(<Styles.Spinner />, document.body)}</>
  ) : (
    <>{children}</>
  );
}
