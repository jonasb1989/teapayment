import { ReactNode } from 'react';

import * as Styles from './styles';

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <Styles.Card>
      <h4>{children}</h4>
      <b style={{ margin: '2rem 0' }}>here icon</b>
      <Styles.CurrentWeather>25°</Styles.CurrentWeather>
    </Styles.Card>
  );
}
